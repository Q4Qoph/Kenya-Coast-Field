import React, { useState } from "react";

interface Announcement {
  id: string;
  slug: string;
  body: string;
  data: {
    title: string;
    date: string | Date;
    excerpt?: string;
    author?: string;
    category: "news" | "announcement" | "camp-meeting" | "event";
    image?: string;
    eventDetails?: {
      startDate: string | Date;
      endDate: string | Date;
      venue: string;
      district: string;
      county?: string;
      theme?: string;
      speaker?: string;
      speakerTitle?: string;
      givingPaybill?: string;
      givingAccount?: string;
    };
  };
}

interface Props {
  announcements: Announcement[];
}

export default function NewsGrid({ announcements }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter logic
  const filtered = announcements.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.data.category === selectedCategory;
    const matchesSearch =
      post.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.data.excerpt?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
      post.data.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort by date (newest first)
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "camp-meeting":
        return "bg-amber-100 text-amber-900 border-amber-200";
      case "event":
        return "bg-blue-100 text-blue-900 border-blue-200";
      case "news":
        return "bg-emerald-100 text-emerald-900 border-emerald-200";
      default:
        return "bg-slate-100 text-slate-900 border-slate-200";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "camp-meeting":
        return "⛺ Camp Meeting";
      case "event":
        return "📅 Event";
      case "news":
        return "📰 News";
      default:
        return "📣 Announcement";
    }
  };

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {[
            { id: "all", label: "All Updates" },
            { id: "news", label: "News" },
            { id: "camp-meeting", label: "Camp Meetings" },
            { id: "event", label: "Other Events" },
            { id: "announcement", label: "Announcements" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition uppercase tracking-wider cursor-pointer border ${
                selectedCategory === tab.id
                  ? "bg-[#003366] text-white border-[#003366] shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search news & events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-900 focus:outline-none"
          />
        </div>
      </div>

      {/* Grid of Posts */}
      {sorted.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-slate-300 rounded-2xl">
          <p className="text-slate-500 font-medium">No announcements found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((post) => {
            const isEvent = post.data.category === "camp-meeting" || post.data.category === "event";
            const dateStr = new Date(post.data.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            return (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Image */}
                  <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={post.data.image || "/assets/hero/hero-1.jpg"}
                      alt={post.data.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className={`absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${getCategoryStyles(
                        post.data.category
                      )}`}
                    >
                      {getCategoryLabel(post.data.category)}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3.5">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-mono">
                      <span>🕒 {dateStr}</span>
                      {post.data.author && (
                        <>
                          <span>•</span>
                          <span>By {post.data.author}</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-lg text-slate-900 leading-snug group-hover:text-blue-900">
                      <a href={`/news/${post.slug}`} className="hover:underline">
                        {post.data.title}
                      </a>
                    </h3>

                    {post.data.excerpt && (
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                        {post.data.excerpt}
                      </p>
                    )}

                    {/* Quick Event Summary */}
                    {isEvent && post.data.eventDetails && (
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-[11px] text-slate-700 space-y-1">
                        <div>📍 <strong>Venue:</strong> {post.data.eventDetails.venue}</div>
                        <div>
                          📅 <strong>Date:</strong>{" "}
                          {new Date(post.data.eventDetails.startDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          -{" "}
                          {new Date(post.data.eventDetails.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#003366] hover:text-[#E36520] transition uppercase tracking-wider"
                  >
                    Read Details →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
