import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, Clock, Music2, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';

interface Program {
  time: string;
  title: string;
  host: string;
}

const DAILY_SCHEDULE: Program[] = [
  { time: '05:00 AM - 07:00 AM', title: 'Asubuhi ya Baraka (Morning Manna & Prayer)', host: 'Pr. Maxwell' },
  { time: '09:00 AM - 11:00 AM', title: 'Afya Bora & Familia (Holistic Health & Family)', host: 'Dr. Mwangi' },
  { time: '01:00 PM - 03:00 PM', title: 'Sauti ya Tumaini (Voice of Prophecy & Hope)', host: 'Pr. Safari' },
  { time: '04:00 PM - 06:00 PM', title: 'Vijana wa Kristo (Youth Crossroads & Music)', host: 'Bro. Dennis' },
  { time: '08:00 PM - 10:00 PM', title: 'Mkesha wa Neno (Night Bible Study & Vespers)', host: 'Elder Bartonjo' },
];

export default function ShekiRadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentShow, setCurrentShow] = useState(DAILY_SCHEDULE[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Official stream URL (or fallback live audio stream)
  const STREAM_URL = 'https://stream.adventist.org/live';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.log('Audio autoplay prevented or stream loading:', err);
      });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const openPopout = () => {
    if (typeof window !== 'undefined') {
      window.open(
        '/sheki-fm',
        'ShekiPopout',
        'width=500,height=700,menubar=no,toolbar=no,location=no,status=no,resizable=yes'
      );
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#001d3d] via-[#003366] to-[#082347] text-white rounded-lg p-5 sm:p-7 shadow-xl border border-white/15 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-center relative z-10">
        {/* Left / Center: Player Controls & Current Show */}
        <div className="lg:col-span-2 space-y-4">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Enlarged Logo Container */}
              <div className="h-20 w-24 sm:h-24 sm:w-32 rounded-lg bg-white p-2 shadow-lg flex items-center justify-center border border-white/20 shrink-0">
                <img
                  src="/assets/sheki/sheki-logo.png"
                  alt="Sheki FM 106.6 Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                  Sheki FM 106.6
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-semibold italic mt-0.5">
                  "Twavuma Twasikika" • Coastal Adventist Radio
                </p>
              </div>
            </div>

            {/* Top Right Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openPopout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 transition cursor-pointer"
                title="Open lightweight popup player"
              >
                <ExternalLink size={13} /> Pop-out Player
              </button>
              {isPlaying && (
                <div className="flex items-end gap-1 h-6 px-3 py-1 bg-white/10 rounded-lg">
                  <span className="w-1 bg-amber-400 rounded animate-[bounce_0.8s_infinite] h-4"></span>
                  <span className="w-1 bg-amber-400 rounded animate-[bounce_1.2s_infinite] h-6"></span>
                  <span className="w-1 bg-amber-400 rounded animate-[bounce_0.6s_infinite] h-3"></span>
                  <span className="w-1 bg-amber-400 rounded animate-[bounce_1s_infinite] h-5"></span>
                </div>
              )}
            </div>
          </div>

          {/* Current Playing Program Card */}
          <div className="bg-black/35 backdrop-blur-md rounded-lg p-4 sm:p-5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                <Music2 size={13} /> On Air Now
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">{currentShow.title}</h4>
              <p className="text-xs text-slate-300">
                Host: <span className="text-slate-100 font-medium">{currentShow.host}</span> | Schedule: {currentShow.time}
              </p>
            </div>

            {/* Play / Pause Button */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={togglePlay}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition shadow-md hover:scale-102 active:scale-98 cursor-pointer text-sm"
              >
                {isPlaying ? (
                  <>
                    <Pause size={18} /> Pause Radio
                  </>
                ) : (
                  <>
                    <Play size={18} className="fill-slate-950" /> Listen Live
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Volume Controls & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-slate-300 text-xs pt-1">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 hover:text-white transition cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="w-24 sm:w-36 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <span className="text-[11px] font-mono text-slate-400">
                {isMuted ? 'Muted' : `${Math.round(volume * 100)}%`}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/254724561850?text=Hello%20Sheki%20FM%20Studio%2C%20I%20am%20listening%20live%20and%20would%20like%20to%20send%20greetings%20or%20prayer%20request..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition font-semibold"
              >
                <MessageCircle size={14} /> WhatsApp Studio
              </a>
              <span className="text-white/20">|</span>
              <a
                href="/sheki-fm"
                className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition font-semibold"
              >
                Full Schedule & Frequencies →
              </a>
            </div>
          </div>
        </div>

        {/* Right: Daily Broadcast Schedule */}
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-5 border border-white/10 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5">
              <Clock size={14} /> Today's Lineup
            </h4>
            <span className="text-[10px] text-slate-400">East Africa Time (EAT)</span>
          </div>

          <div className="space-y-2">
            {DAILY_SCHEDULE.map((prog, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentShow(prog)}
                className={`p-2 rounded-lg text-xs cursor-pointer transition flex justify-between items-center ${
                  currentShow.title === prog.title
                    ? 'bg-amber-500/20 border border-amber-500/40 text-white shadow-xs'
                    : 'hover:bg-white/5 text-slate-300 border border-transparent'
                }`}
              >
                <div>
                  <div className="font-semibold text-slate-100">{prog.title}</div>
                  <div className="text-[10px] text-slate-400">{prog.time}</div>
                </div>
                {currentShow.title === prog.title && (
                  <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded shrink-0">
                    Active
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 text-center border-t border-white/10">
            <a
              href="/sheki-fm"
              className="text-[11px] text-slate-300 hover:text-amber-400 transition font-medium inline-flex items-center gap-1"
            >
              Explore all Sheki FM shows & frequencies →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
