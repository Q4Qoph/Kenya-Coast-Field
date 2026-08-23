import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio, Clock, Music2 } from 'lucide-react';

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

  // Sample official stream URL (or fallback Adventist radio stream)
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

  return (
    <div className="bg-gradient-to-r from-[#002244] via-[#003366] to-[#082347] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10">
      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Player Controls & Current Show */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                <Radio size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-serif font-bold text-white tracking-wide">Sheki FM Radio</h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span>
                    Live Coast Broadcast
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-medium">Coastal Seventh-day Adventist Radio Network • Tononoka, Mombasa</p>
              </div>
            </div>

            {/* Animated Audio Waveform */}
            {isPlaying && (
              <div className="flex items-end gap-1 h-6 px-3 py-1 bg-white/10 rounded-lg">
                <span className="w-1 bg-amber-400 rounded animate-[bounce_0.8s_infinite] h-4"></span>
                <span className="w-1 bg-amber-400 rounded animate-[bounce_1.2s_infinite] h-6"></span>
                <span className="w-1 bg-amber-400 rounded animate-[bounce_0.6s_infinite] h-3"></span>
                <span className="w-1 bg-amber-400 rounded animate-[bounce_1s_infinite] h-5"></span>
              </div>
            )}
          </div>

          {/* Current Playing Program Card */}
          <div className="bg-black/25 backdrop-blur-md rounded-xl p-4 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                <Music2 size={13} /> On Air Now
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">{currentShow.title}</h4>
              <p className="text-xs text-slate-300">Host: <span className="text-slate-100 font-medium">{currentShow.host}</span> | Schedule: {currentShow.time}</p>
            </div>

            {/* Big Play / Pause Button */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={togglePlay}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition shadow-lg hover:scale-105 active:scale-95 cursor-pointer text-sm"
              >
                {isPlaying ? (
                  <>
                    <Pause size={18} /> Pause Live Radio
                  </>
                ) : (
                  <>
                    <Play size={18} className="fill-slate-950" /> Listen Live
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Volume Controls */}
          <div className="flex items-center gap-3 text-slate-300 text-xs">
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
              className="w-28 sm:w-40 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <span className="text-[11px] font-mono text-slate-400">
              {isMuted ? 'Muted' : `${Math.round(volume * 100)}%`}
            </span>
          </div>
        </div>

        {/* Right: Daily Broadcast Schedule */}
        <div className="bg-black/30 backdrop-blur-md rounded-xl p-5 border border-white/10 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5">
              <Clock size={14} /> Today's Lineup
            </h4>
            <span className="text-[10px] text-slate-400">East Africa Time</span>
          </div>

          <div className="space-y-2.5">
            {DAILY_SCHEDULE.map((prog, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentShow(prog)}
                className={`p-2 rounded-lg text-xs cursor-pointer transition flex justify-between items-center ${
                  currentShow.title === prog.title
                    ? 'bg-amber-500/20 border border-amber-500/30 text-white'
                    : 'hover:bg-white/5 text-slate-300'
                }`}
              >
                <div>
                  <div className="font-semibold text-slate-100">{prog.title}</div>
                  <div className="text-[10px] text-slate-400">{prog.time}</div>
                </div>
                {currentShow.title === prog.title && (
                  <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded">Active</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
