import React, { useState } from 'react';
import { Clock, User, Sparkles, Radio, Calendar } from 'lucide-react';

interface Show {
  time: string;
  title: string;
  host: string;
  description: string;
  tag: string;
}

const SCHEDULE_DATA: Record<string, Show[]> = {
  weekdays: [
    {
      time: '05:00 AM - 07:00 AM',
      title: 'Asubuhi ya Baraka (Morning Manna & Devotion)',
      host: 'Pr. Maxwell Mwashighadi',
      description: 'Start your coastal morning with biblical reflection, pastoral prayer, Scripture meditation, and spirit of prophecy readings.',
      tag: 'Devotional',
    },
    {
      time: '07:00 AM - 09:00 AM',
      title: 'Habari za Pwani & Matukio (Coastal News & Uplift)',
      host: 'Media Desk Team',
      description: 'Christian news review, traffic and weather along the coast, inspirational interviews, and health nuggets.',
      tag: 'News & Talk',
    },
    {
      time: '09:00 AM - 12:00 PM',
      title: 'Afya Bora & Familia Imara (Holistic Health & Family)',
      host: 'Dr. Mwangi & Sis. Rehema',
      description: 'Lifestyle medicine, vegetarian nutrition, Adventist marriage enrichment, parenting wisdom, and listener Q&A.',
      tag: 'Health & Family',
    },
    {
      time: '01:00 PM - 03:30 PM',
      title: 'Sauti ya Tumaini (Voice of Prophecy & Bible Truth)',
      host: 'Pr. Safari Charo',
      description: 'In-depth biblical prophecy, Three Angels’ Messages, Christ-centered doctrinal studies, and listener call-ins.',
      tag: 'Prophecy & Word',
    },
    {
      time: '04:00 PM - 06:30 PM',
      title: 'Vijana wa Kristo (Youth Drive & Gospel Crossroads)',
      host: 'Bro. Dennis & Team',
      description: 'High-energy contemporary coastal Adventist gospel melodies, youth mentorship, talent showcases, and school talks.',
      tag: 'Youth & Music',
    },
    {
      time: '08:00 PM - 10:30 PM',
      title: 'Mkesha wa Neno & Sala (Night Bible Study & Vespers)',
      host: 'Elder Bartonjo',
      description: 'Quiet sacred evening hymns, intercessory prayer for families and the sick, and bedtime Bible readings.',
      tag: 'Prayer & Hymns',
    },
  ],
  sabbath: [
    {
      time: '06:00 AM - 08:30 AM',
      title: 'Pambio za Sabato (Sabbath Dawn Sacred Choirs)',
      host: 'Choir Ministries',
      description: 'Coastal SDA choirs, acapella quartets, and traditional Adventist choral heritage welcoming the holy Sabbath.',
      tag: 'Choral Praise',
    },
    {
      time: '08:30 AM - 10:00 AM',
      title: 'Sabbath School Lesson Study Live',
      host: 'Field Sabbath School Panel',
      description: 'Interactive panel study of the global Adult Bible Study Guide / E-Quarterly with live calls.',
      tag: 'Bible Study',
    },
    {
      time: '10:30 AM - 12:30 PM',
      title: 'Divine Service & Fieldwide Pulpit',
      host: 'Guest Preachers & Field Officers',
      description: 'Live field broadcast of divine worship sermons directly from Mombasa, Kilifi, Kwale, and Taita camp convocations.',
      tag: 'Divine Worship',
    },
    {
      time: '02:30 PM - 04:30 PM',
      title: 'Adventist Youth Society (AYS) Hour & Music',
      host: 'KCF Youth Ministries',
      description: 'Pathfinder insights, youth evangelism testimonials, Bible bowl quizzes, and coastal youth ministry updates.',
      tag: 'Youth AYS',
    },
    {
      time: '05:30 PM - 07:00 PM',
      title: 'Kufunga Sabato (Sabbath Sunset Vespers)',
      host: 'Pr. Maxwell',
      description: 'Closing Sabbath reflection, testimonies from churches across 10 counties, and week-ahead blessings.',
      tag: 'Sunset Vespers',
    },
  ],
  sunday: [
    {
      time: '06:00 AM - 09:00 AM',
      title: 'Nyimbo za Zaburi (Psalms & Praise Dawn)',
      host: 'Sister Christine',
      description: 'Uplifting East African gospel melodies and motivational messages to energize your new working week.',
      tag: 'Praise & Worship',
    },
    {
      time: '10:00 AM - 01:00 PM',
      title: 'Uinjilisti Mashinani (Grassroots Evangelism Spotlight)',
      host: 'Evangelism Desk',
      description: 'Stories of mission frontiers in Garissa, Mandera, Wajir, and unreached coastal islands.',
      tag: 'Mission Field',
    },
    {
      time: '03:00 PM - 06:00 PM',
      title: 'Muziki wa Injili & Dedications (Listener Request Desk)',
      host: 'Bro. Dennis',
      description: 'WhatsApp song dedications, birthday & anniversary wishes, and coastal choir features.',
      tag: 'Dedications',
    },
    {
      time: '08:00 PM - 10:00 PM',
      title: 'Nuru ya Usiku (Night Light Devotional)',
      host: 'Pr. Safari',
      description: 'Quiet night meditation, prayer requests, and biblical promises for peaceful rest.',
      tag: 'Night Devotional',
    },
  ],
};

export default function ShekiSchedule() {
  const [activeTab, setActiveTab] = useState<'weekdays' | 'sabbath' | 'sunday'>('weekdays');

  const tabs = [
    { id: 'weekdays', label: '📅 Monday – Friday (Weekday Lineup)' },
    { id: 'sabbath', label: '⛺ Holy Sabbath (Saturday Specials)' },
    { id: 'sunday', label: '☀️ Sunday (Evangelism & Praise)' },
  ] as const;

  const currentShows = SCHEDULE_DATA[activeTab];

  return (
    <div className="space-y-6">
      {/* Day Selector Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition uppercase tracking-wider cursor-pointer border ${
              activeTab === tab.id
                ? 'bg-[#003366] text-white border-[#003366] shadow-md scale-102'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Program Schedule List */}
      <div className="grid gap-4 md:grid-cols-2">
        {currentShows.map((show, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#003366] border border-blue-200 font-mono">
                  <Clock size={12} /> {show.time}
                </span>
                <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {show.tag}
                </span>
              </div>
              <h4 className="text-base font-serif font-bold text-slate-900 leading-snug mb-1">
                {show.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {show.description}
              </p>
            </div>

            <div className="border-t border-slate-100 pt-2.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <User size={13} className="text-[#003366]" />
              <span>Host / Department: <strong className="text-slate-800">{show.host}</strong></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
