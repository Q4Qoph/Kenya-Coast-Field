import React, { useState, useMemo } from 'react';
import { Search, MapPin, User, Clock, Copy, Check } from 'lucide-react';

export interface ServiceTimes {
    sabbathSchool?: string;
    divineService?: string;
    adventistYouth?: string;
}

export interface Church {
    id: string;
    name: string;
    district: string;
    county: string;
    location: string;
    pastor: string;
    serviceTimes?: ServiceTimes | string;
    givingPaybill?: string;
    givingAccount?: string;
    paybill?: string;
    account?: string;
    coordinates?: { lat: number; lng: number };
}

interface ChurchFinderProps {
    churches?: Church[];
}

export default function ChurchFinder({ churches = [] }: ChurchFinderProps) {
    const [search, setSearch] = useState('');
    const [selectedCounty, setSelectedCounty] = useState('All');
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Derive unique counties dynamically from data
    const counties = useMemo(() => {
        const unique = Array.from(new Set(churches.map((c) => c.county).filter(Boolean)));
        return ['All', ...unique];
    }, [churches]);

    const filteredChurches = useMemo(() => {
        return churches.filter((church) => {
            const matchesCounty = selectedCounty === 'All' || church.county === selectedCounty;
            const q = search.toLowerCase();
            const matchesQuery =
                church.name.toLowerCase().includes(q) ||
                church.district.toLowerCase().includes(q) ||
                church.location.toLowerCase().includes(q) ||
                church.pastor.toLowerCase().includes(q);
            return matchesCounty && matchesQuery;
        });
    }, [search, selectedCounty, churches]);

    const handleCopy = (id: string, text: string) => {
        navigator.clipboard?.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="w-full">
            {/* Search and Filter Bar */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-slate-200 mb-6 grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Search Congregation, District or Pastor
                    </label>
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="e.g. Mombasa Central, Pr. Mwashighadi, Malindi, Kilifi..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-adventist-blue focus:border-adventist-blue focus:outline-none transition"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Filter by County
                    </label>
                    <select
                        value={selectedCounty}
                        onChange={(e) => setSelectedCounty(e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-adventist-blue focus:border-adventist-blue focus:outline-none transition"
                    >
                        {counties.map((c) => (
                            <option key={c} value={c}>
                                {c === 'All' ? 'All Counties' : `${c} County`}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Results Count */}
            <div className="flex justify-between items-center mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">
                <span>Showing {filteredChurches.length} of {churches.length} Congregations</span>
                {selectedCounty !== 'All' && <span>Filtered by: {selectedCounty} County</span>}
            </div>

            {/* Results Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredChurches.length > 0 ? (
                    filteredChurches.map((church) => {
                        const paybill = church.givingPaybill || church.paybill;
                        const account = church.givingAccount || church.account;
                        const isTimesObj = typeof church.serviceTimes === 'object' && church.serviceTimes !== null;
                        const times = isTimesObj ? church.serviceTimes as ServiceTimes : null;

                        return (
                            <div
                                key={church.id}
                                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-blue-50 text-adventist-blue rounded-full border border-blue-100">
                                            {church.county} County
                                        </span>
                                    </div>
                                    <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug">{church.name}</h3>
                                    <p className="text-xs text-slate-500 font-medium mb-3">{church.district}</p>

                                    <div className="text-xs sm:text-sm space-y-2 text-slate-600 border-t border-slate-100 pt-3">
                                        <div className="flex items-start gap-2">
                                            <MapPin className="text-adventist-blue shrink-0 mt-0.5" size={16} />
                                            <span>{church.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="text-adventist-blue shrink-0" size={16} />
                                            <span><strong>Pastor:</strong> {church.pastor}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Clock className="text-adventist-blue shrink-0 mt-0.5" size={16} />
                                            <div>
                                                {times ? (
                                                    <span className="text-xs">
                                                        SS: {times.sabbathSchool || '09:00 AM'} | Divine: {times.divineService || '11:00 AM'} | AYS: {times.adventistYouth || '02:30 PM'}
                                                    </span>
                                                ) : (
                                                    <span>{typeof church.serviceTimes === 'string' ? church.serviceTimes : '09:00 AM - 12:30 PM'}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {paybill && (
                                    <div className="mt-4 pt-3 border-t border-slate-100">
                                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs flex justify-between items-center">
                                            <div>
                                                <div className="text-slate-500 text-[10px] uppercase font-bold">M-Pesa Tithe / Giving</div>
                                                <div className="font-mono font-bold text-slate-800">
                                                    Paybill: <span className="text-adventist-blue">{paybill}</span> | Acc: <span className="text-adventist-ochre">{account || 'TITHE'}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleCopy(church.id, `${paybill}`)}
                                                className="p-1.5 rounded hover:bg-slate-200 text-slate-600 transition"
                                                title="Copy Paybill"
                                            >
                                                {copiedId === church.id ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full py-12 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
                        <p className="font-medium text-base">No congregations found matching "{search}"</p>
                        <p className="text-xs text-slate-400 mt-1">Try clearing filters or searching by a different county or pastor name.</p>
                    </div>
                )}
            </div>
        </div>
    );
}