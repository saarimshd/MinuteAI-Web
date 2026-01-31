import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ListTodo, MessageSquare, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeTruths() {
  const sectionRef = useRef<HTMLElement>(null);
  const truth1TextRef = useRef<HTMLDivElement>(null);
  const truth1VisualRef = useRef<HTMLDivElement>(null);
  const truth2TextRef = useRef<HTMLDivElement>(null);
  const truth2VisualRef = useRef<HTMLDivElement>(null);
  const truth3TextRef = useRef<HTMLDivElement>(null);
  const truth3VisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Truth 1 animation
      gsap.timeline({
        scrollTrigger: {
          trigger: truth1TextRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.5,
        }
      })
      .fromTo(truth1TextRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      )
      .fromTo(truth1VisualRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );

      // Truth 2 animation
      gsap.timeline({
        scrollTrigger: {
          trigger: truth2VisualRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.5,
        }
      })
      .fromTo(truth2VisualRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      )
      .fromTo(truth2TextRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );

      // Truth 3 animation
      gsap.timeline({
        scrollTrigger: {
          trigger: truth3TextRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.5,
        }
      })
      .fromTo(truth3TextRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      )
      .fromTo(truth3VisualRef.current,
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
      className="relative w-full overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--void)' }}
    >
      {/* Truth 1: The Calendar is the Contract */}
      <div 
        className="min-h-[40vh] flex items-center border-b transition-colors duration-300"
        style={{ borderColor: 'var(--hairline)' }}
      >
        <div className="max-w-[1000px] mx-auto px-6 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={truth1TextRef}>
              <div className="flex items-center gap-3 mb-4">
                <Calendar style={{ color: 'var(--alarm)' }} className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-micro uppercase" style={{ color: 'var(--text-muted)' }}>Truth 01</span>
              </div>
              <h3 
                className="text-2xl md:text-3xl font-light tracking-tight mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                The Calendar is the Contract
              </h3>
              <p 
                className="text-body leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Tasks die in lists. They live in time blocks. When you schedule something, you're not organizing—you're making a commitment to your future self. We don't help you manage tasks. We help you keep promises.
              </p>
            </div>
            <div ref={truth1VisualRef} className="flex justify-center">
              <div className="relative w-full max-w-[320px]">
                {/* List item transforming to calendar block */}
                <div className="calendar-user-block p-4 mb-4 opacity-50">
                  <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                    <ListTodo className="w-4 h-4" strokeWidth={1.5} />
                    <span className="text-sm line-through">Finish project</span>
                  </div>
                </div>
                <div className="flex justify-center my-2">
                  <div 
                    className="w-px h-8"
                    style={{ background: 'linear-gradient(to bottom, var(--text-secondary), var(--alarm))' }} 
                  />
                </div>
                <div 
                  className="calendar-user-block p-4"
                  style={{ borderLeft: '2px solid var(--alarm)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--alarm)' }} />
                    <span className="text-xs mono" style={{ color: 'var(--text-secondary)' }}>2:00 - 4:00 PM</span>
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-primary)' }}>Finish project</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Truth 2: Context, Not Commands */}
      <div 
        className="min-h-[40vh] flex items-center border-b transition-colors duration-300"
        style={{ borderColor: 'var(--hairline)' }}
      >
        <div className="max-w-[1000px] mx-auto px-6 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={truth2VisualRef} className="flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-[360px]">
                {/* Natural language input */}
                <div className="calendar-user-block p-4 mb-3">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 mt-1" style={{ color: 'var(--text-muted)' }} strokeWidth={1.5} />
                    <div>
                      <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                        "Meeting with Sarah next Tuesday afternoon"
                      </p>
                    </div>
                  </div>
                </div>
                {/* Parsed result */}
                <div className="calendar-ai-block p-4">
                  <div className="text-xs mono mb-2" style={{ color: 'var(--alarm)', opacity: 0.8 }}>AI UNDERSTOOD</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span style={{ color: 'var(--text-muted)' }}>Title:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Meeting with Sarah</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: 'var(--text-muted)' }}>When:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Tuesday, 2:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: 'var(--text-muted)' }}>Duration:</span>
                      <span style={{ color: 'var(--text-primary)' }}>1 hour</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={truth2TextRef} className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare style={{ color: 'var(--alarm)' }} className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-micro uppercase" style={{ color: 'var(--text-muted)' }}>Truth 02</span>
              </div>
              <h3 
                className="text-2xl md:text-3xl font-light tracking-tight mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Context, Not Commands
              </h3>
              <p 
                className="text-body leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Say "I need to finish this by Thursday" and MinuteAI understands the urgency, the estimated duration, and whether you actually have time. No syntax to learn. No tags to manage. Just talk like a person.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Truth 3: The Gentle Accountability */}
      <div className="min-h-[40vh] flex items-center">
        <div className="max-w-[1000px] mx-auto px-6 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={truth3TextRef}>
              <div className="flex items-center gap-3 mb-4">
                <Heart style={{ color: 'var(--alarm)' }} className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-micro uppercase" style={{ color: 'var(--text-muted)' }}>Truth 03</span>
              </div>
              <h3 
                className="text-2xl md:text-3xl font-light tracking-tight mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                The Gentle Accountability
              </h3>
              <p 
                className="text-body leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Missed a deadline? Life happens. Instead of a shameful red badge, MinuteAI asks: "Want to move this to tomorrow morning, or break it into smaller pieces?" No judgment. Just momentum.
              </p>
            </div>
            <div ref={truth3VisualRef} className="flex justify-center">
              <div className="relative w-full max-w-[320px]">
                {/* Missed event */}
                <div 
                  className="calendar-user-block p-4 mb-3 border-dashed"
                  style={{ opacity: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
                    <span className="text-xs mono" style={{ color: 'var(--text-muted)' }}>Yesterday</span>
                  </div>
                  <div className="text-sm line-through" style={{ color: 'var(--text-muted)' }}>Review proposal</div>
                </div>
                {/* AI suggestion */}
                <div 
                  className="calendar-ai-block p-4 border-dashed"
                >
                  <div className="text-xs mono mb-2" style={{ color: 'var(--alarm)', opacity: 0.8 }}>AI SUGGESTION</div>
                  <div className="text-sm mb-3" style={{ color: 'var(--text-primary)' }}>Review proposal</div>
                  <div className="flex gap-2">
                    <button 
                      className="px-3 py-1.5 text-xs rounded transition-colors"
                      style={{ 
                        backgroundColor: 'rgba(255, 59, 48, 0.2)', 
                        color: 'var(--alarm)' 
                      }}
                    >
                      Move to tomorrow
                    </button>
                    <button 
                      className="px-3 py-1.5 text-xs rounded transition-colors"
                      style={{ 
                        backgroundColor: 'var(--user-block-bg)', 
                        color: 'var(--text-secondary)' 
                      }}
                    >
                      Break it down
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
