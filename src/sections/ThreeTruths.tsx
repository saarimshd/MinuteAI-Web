import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, MessageCircle, RefreshCw, ArrowRight, Check, X, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeTruths() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1TextRef = useRef<HTMLDivElement>(null);
  const card1VisualRef = useRef<HTMLDivElement>(null);
  const card2TextRef = useRef<HTMLDivElement>(null);
  const card2VisualRef = useRef<HTMLDivElement>(null);
  const card3TextRef = useRef<HTMLDivElement>(null);
  const card3VisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card 1 animation
      gsap.timeline({
        scrollTrigger: {
          trigger: card1TextRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.5,
        }
      })
      .fromTo(card1TextRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      )
      .fromTo(card1VisualRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );

      // Card 2 animation
      gsap.timeline({
        scrollTrigger: {
          trigger: card2VisualRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.5,
        }
      })
      .fromTo(card2VisualRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      )
      .fromTo(card2TextRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );

      // Card 3 animation
      gsap.timeline({
        scrollTrigger: {
          trigger: card3TextRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.5,
        }
      })
      .fromTo(card3TextRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      )
      .fromTo(card3VisualRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="truths"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Section Header */}
      <div className="text-center pt-24 pb-16">
        <h2 
          className="text-section font-light tracking-tight"
          style={{ color: '#fafafa', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          How It Works
        </h2>
      </div>

      {/* CARD 1: Big Goals, Small Steps */}
      <div 
        className="min-h-[50vh] flex items-center border-b"
        style={{ borderColor: '#1f1f1f' }}
      >
        <div className="max-w-[1000px] mx-auto px-6 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div ref={card1TextRef}>
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 59, 48, 0.15)' }}
                >
                  <Layers style={{ color: '#ff3b30' }} className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-micro uppercase" style={{ color: '#444444', letterSpacing: '0.2em', fontSize: '12px' }}>01</span>
              </div>
              <h3 
                className="text-2xl md:text-3xl font-light tracking-tight mb-4"
                style={{ color: '#fafafa', letterSpacing: '-0.02em' }}
              >
                Big Goals, Small Steps
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: '#888888', lineHeight: '1.7' }}
              >
                Say "I need to finish this project by Friday" and MinuteAI automatically carves it into manageable pieces—research, outline, review—and places them in your calendar when you actually have time.
              </p>
            </div>

            {/* Right: Visual */}
            <div ref={card1VisualRef} className="flex justify-center">
              <div className="relative w-full max-w-[400px]">
                {/* Left: One large intimidating block */}
                <div 
                  className="p-5 rounded-xl mb-6"
                  style={{ 
                    backgroundColor: 'rgba(255, 59, 48, 0.15)',
                    border: '1px solid rgba(255, 59, 48, 0.35)'
                  }}
                >
                  <div className="text-xs mono mb-2" style={{ color: '#ff3b30' }}>URGENT</div>
                  <div className="text-xl font-medium" style={{ color: '#fafafa' }}>FINISH PROJECT</div>
                  <div className="text-sm mt-1" style={{ color: '#888888' }}>Due Friday</div>
                </div>

                {/* AI Processing */}
                <div className="flex justify-center my-4">
                  <div 
                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{ backgroundColor: 'rgba(255, 59, 48, 0.1)' }}
                  >
                    <Sparkles style={{ color: '#ff3b30' }} className="w-4 h-4" />
                    <span className="text-xs mono" style={{ color: '#ff3b30' }}>MINUTEAI</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-4">
                  <ArrowRight style={{ color: '#ff3b30' }} className="w-6 h-6" />
                </div>

                {/* Right: Three organized blocks */}
                <div className="space-y-3">
                  <div 
                    className="p-4 rounded-xl flex items-center justify-between"
                    style={{ 
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                      border: '1px solid rgba(59, 130, 246, 0.25)'
                    }}
                  >
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#fafafa' }}>Project research</div>
                      <div className="text-xs mono mt-1" style={{ color: '#60a5fa' }}>Mon 2pm · 2 hours</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>

                  <div 
                    className="p-4 rounded-xl flex items-center justify-between"
                    style={{ 
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                      border: '1px solid rgba(59, 130, 246, 0.25)'
                    }}
                  >
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#fafafa' }}>Create outline</div>
                      <div className="text-xs mono mt-1" style={{ color: '#60a5fa' }}>Wed 10am · 1 hour</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>

                  <div 
                    className="p-4 rounded-xl flex items-center justify-between"
                    style={{ 
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                      border: '1px solid rgba(59, 130, 246, 0.25)'
                    }}
                  >
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#fafafa' }}>Final review</div>
                      <div className="text-xs mono mt-1" style={{ color: '#60a5fa' }}>Thu 4pm · 90 min</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2: Just Talk */}
      <div 
        className="min-h-[50vh] flex items-center border-b"
        style={{ borderColor: '#1f1f1f' }}
      >
        <div className="max-w-[1000px] mx-auto px-6 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Visual */}
            <div ref={card2VisualRef} className="flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-[380px]">
                {/* Top: Text bubble */}
                <div 
                  className="p-4 rounded-2xl rounded-bl-sm mb-6"
                  style={{ 
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #1f1f1f'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 mt-0.5" style={{ color: '#888888' }} strokeWidth={1.5} />
                    <p className="text-sm leading-relaxed" style={{ color: '#fafafa' }}>
                      "Coffee with Sarah next Tuesday afternoon"
                    </p>
                  </div>
                </div>

                {/* Middle: AI extraction */}
                <div 
                  className="p-4 rounded-xl mb-4"
                  style={{ 
                    backgroundColor: 'rgba(255, 59, 48, 0.08)',
                    border: '1px solid rgba(255, 59, 48, 0.2)'
                  }}
                >
                  <div className="text-xs mono mb-3" style={{ color: '#ff3b30' }}>EXTRACTING</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: '#888888', width: '60px' }}>Who:</span>
                      <span className="text-sm" style={{ color: '#fafafa' }}>Sarah</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: '#888888', width: '60px' }}>When:</span>
                      <span className="text-sm" style={{ color: '#fafafa' }}>Tuesday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: '#888888', width: '60px' }}>Duration:</span>
                      <span className="text-sm" style={{ color: '#fafafa' }}>1 hour</span>
                    </div>
                  </div>
                </div>

                {/* Conflict check */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-xs" style={{ color: '#ef4444' }}>Wed 2pm Busy</span>
                  </div>
                  <ArrowRight style={{ color: '#444444' }} className="w-4 h-4" />
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-xs" style={{ color: '#22c55e' }}>Tue 3pm Available</span>
                  </div>
                </div>

                {/* Bottom: Calendar block */}
                <div 
                  className="p-4 rounded-xl flex items-center justify-between"
                  style={{ 
                    backgroundColor: 'rgba(168, 85, 247, 0.12)',
                    border: '1px solid rgba(168, 85, 247, 0.25)'
                  }}
                >
                  <div>
                    <div className="text-sm font-medium" style={{ color: '#fafafa' }}>Coffee with Sarah</div>
                    <div className="text-xs mono mt-1" style={{ color: '#a78bfa' }}>Tue 3pm · 1 hour</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div ref={card2TextRef} className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 59, 48, 0.15)' }}
                >
                  <MessageCircle style={{ color: '#ff3b30' }} className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-micro uppercase" style={{ color: '#444444', letterSpacing: '0.2em', fontSize: '12px' }}>02</span>
              </div>
              <h3 
                className="text-2xl md:text-3xl font-light tracking-tight mb-4"
                style={{ color: '#fafafa', letterSpacing: '-0.02em' }}
              >
                Just Talk
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: '#888888', lineHeight: '1.7' }}
              >
                No syntax, no tags, no clicking through five menus. Say "Coffee with Sarah Tuesday afternoon" and MinuteAI finds the slot, checks your conflicts, and books it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3: Missed It? No Problem */}
      <div className="min-h-[50vh] flex items-center">
        <div className="max-w-[1000px] mx-auto px-6 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div ref={card3TextRef}>
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 59, 48, 0.15)' }}
                >
                  <RefreshCw style={{ color: '#ff3b30' }} className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-micro uppercase" style={{ color: '#444444', letterSpacing: '0.2em', fontSize: '12px' }}>03</span>
              </div>
              <h3 
                className="text-2xl md:text-3xl font-light tracking-tight mb-4"
                style={{ color: '#fafafa', letterSpacing: '-0.02em' }}
              >
                Missed It? No Problem
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: '#888888', lineHeight: '1.7' }}
              >
                Life happens. Instead of overdue badges and guilt, MinuteAI offers options: move it to tomorrow, break it into smaller pieces, or snooze for later. You decide, it adapts.
              </p>
            </div>

            {/* Right: Visual */}
            <div ref={card3VisualRef} className="flex justify-center">
              <div className="relative w-full max-w-[360px]">
                {/* Top: Grayed-out missed block */}
                <div 
                  className="p-4 rounded-xl mb-4 opacity-40"
                  style={{ 
                    backgroundColor: '#0a0a0a',
                    border: '1px dashed #444444'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#444444' }}
                    >
                      <span className="text-xs" style={{ color: '#888888' }}>✕</span>
                    </div>
                    <div>
                      <div className="text-sm line-through" style={{ color: '#888888' }}>Review proposal</div>
                      <div className="text-xs mono mt-1" style={{ color: '#666666' }}>Yesterday, 3:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Center: AI suggestion popup */}
                <div 
                  className="p-4 rounded-xl mb-4"
                  style={{ 
                    backgroundColor: 'rgba(255, 59, 48, 0.08)',
                    border: '1px solid rgba(255, 59, 48, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles style={{ color: '#ff3b30' }} className="w-4 h-4" />
                    <span className="text-xs mono" style={{ color: '#ff3b30' }}>MINUTEAI</span>
                  </div>
                  <p className="text-sm mb-4" style={{ color: '#fafafa' }}>
                    "Missed this. What works?"
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      className="px-3 py-2 text-xs rounded-lg flex items-center gap-2"
                      style={{ 
                        backgroundColor: '#ff3b30',
                        color: '#fafafa'
                      }}
                    >
                      <Check className="w-3 h-3" />
                      Move to tomorrow 2pm
                    </button>
                    <button 
                      className="px-3 py-2 text-xs rounded-lg"
                      style={{ 
                        backgroundColor: '#0a0a0a',
                        color: '#888888',
                        border: '1px solid #1f1f1f'
                      }}
                    >
                      Split into 30-min chunks
                    </button>
                    <button 
                      className="px-3 py-2 text-xs rounded-lg"
                      style={{ 
                        backgroundColor: '#0a0a0a',
                        color: '#888888',
                        border: '1px solid #1f1f1f'
                      }}
                    >
                      Snooze 2 hours
                    </button>
                  </div>
                </div>

                {/* Bottom: Fresh rescheduled block */}
                <div 
                  className="p-4 rounded-xl flex items-center justify-between"
                  style={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.12)',
                    border: '1px solid rgba(34, 197, 94, 0.25)'
                  }}
                >
                  <div>
                    <div className="text-sm font-medium" style={{ color: '#fafafa' }}>Review proposal</div>
                    <div className="text-xs mono mt-1" style={{ color: '#4ade80' }}>Tomorrow 2pm</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
