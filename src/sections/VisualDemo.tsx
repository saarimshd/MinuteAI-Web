import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Desktop chaotic thoughts - using grid-based positioning for better responsiveness
const chaoticThoughtsDesktop = [
  { text: "Call mom...", size: "text-sm xl:text-base", opacity: 0.6, top: "5%", left: "5%", rotate: -3 },
  { text: "Email professor", size: "text-xs xl:text-sm", opacity: 0.65, top: "8%", left: "40%", rotate: 1 },
  { text: "Book flight", size: "text-xs xl:text-sm", opacity: 0.75, top: "3%", left: "70%", rotate: 3 },
  { text: "Thesis due Thursday???", size: "text-lg xl:text-xl", opacity: 0.95, top: "22%", left: "15%", rotate: 2, urgent: true },
  { text: "Mom's birthday panic", size: "text-base xl:text-lg", opacity: 0.9, top: "20%", left: "55%", rotate: -1 },
  { text: "Gym? Skipped yesterday", size: "text-sm xl:text-base", opacity: 0.7, top: "25%", left: "75%", rotate: 4 },
  { text: "That thing Sarah mentioned...", size: "text-base xl:text-lg", opacity: 0.85, top: "45%", left: "5%", rotate: -2 },
  { text: "Send invoice to client", size: "text-sm xl:text-base", opacity: 0.8, top: "48%", left: "35%", rotate: -4 },
  { text: "Pick up dry cleaning", size: "text-xs xl:text-sm", opacity: 0.5, top: "42%", left: "70%", rotate: -3, fading: true },
  { text: "Renew passport", size: "text-sm xl:text-base", opacity: 0.7, top: "68%", left: "20%", rotate: 2 },
  { text: "I'm forgetting something important", size: "text-xs", opacity: 0.35, top: "75%", left: "50%", rotate: -2, ghosted: true },
];

// Mobile chaotic thoughts - vertically stacked with good spacing
const chaoticThoughtsMobile = [
  { text: "Call mom...", size: "text-sm", opacity: 0.6, rotate: -2 },
  { text: "Thesis due Thursday???", size: "text-lg", opacity: 0.95, rotate: 1, urgent: true },
  { text: "Email professor", size: "text-sm", opacity: 0.65, rotate: -1 },
  { text: "Gym? Skipped yesterday", size: "text-sm", opacity: 0.7, rotate: 2 },
  { text: "That thing Sarah mentioned...", size: "text-base", opacity: 0.85, rotate: -2 },
  { text: "Book flight", size: "text-xs", opacity: 0.75, rotate: 3 },
  { text: "Mom's birthday panic", size: "text-base", opacity: 0.9, rotate: -1 },
  { text: "Send invoice to client", size: "text-sm", opacity: 0.8, rotate: -3 },
  { text: "Pick up dry cleaning", size: "text-xs", opacity: 0.5, rotate: 2, fading: true },
  { text: "Renew passport", size: "text-sm", opacity: 0.7, rotate: -2 },
  { text: "I'm forgetting something important", size: "text-xs", opacity: 0.35, rotate: 1, ghosted: true },
];

// Right side - Calendar events
const calendarEvents = [
  // Monday
  { day: "Mon", time: "9:00-11:00am", title: "Thesis deep work", color: "bg-blue-500/20 border-blue-500/30 light:bg-blue-500/15 light:border-blue-500/25" },
  { day: "Mon", time: "2:00-2:30pm", title: "Email professor", color: "bg-purple-500/20 border-purple-500/30 light:bg-purple-500/15 light:border-purple-500/25" },
  // Tuesday
  { day: "Tue", time: "10:00-11:00am", title: "Coffee w/ Sarah", subtitle: "Ask about her move", color: "bg-indigo-500/20 border-indigo-500/30 light:bg-indigo-500/15 light:border-indigo-500/25" },
  { day: "Tue", time: "5:00-5:30pm", title: "Call Mom", color: "bg-green-500/20 border-green-500/30 light:bg-green-500/15 light:border-green-500/25" },
  { day: "Tue", time: "5:30-6:30pm", title: "Gym - Leg day", color: "bg-red-500/20 border-red-500/30 light:bg-red-500/15 light:border-red-500/25" },
  // Wednesday
  { day: "Wed", time: "11:00am-12:00pm", title: "Book flight to NYC", color: "bg-cyan-500/20 border-cyan-500/30 light:bg-cyan-500/15 light:border-cyan-500/25" },
  { day: "Wed", time: "4:00-4:30pm", title: "Pick up dry cleaning", color: "bg-gray-500/20 border-gray-500/30 light:bg-gray-500/15 light:border-gray-500/25" },
  // Thursday
  { day: "Thu", time: "9:00-10:30am", title: "Thesis outline", color: "bg-blue-500/20 border-blue-500/30 light:bg-blue-500/15 light:border-blue-500/25" },
  { day: "Thu", time: "2:00-2:30pm", title: "Renew passport", color: "bg-orange-500/20 border-orange-500/30 light:bg-orange-500/15 light:border-orange-500/25" },
  // Friday
  { day: "Fri", time: "10:00-11:00am", title: "Submit invoice", color: "bg-emerald-500/20 border-emerald-500/30 light:bg-emerald-500/15 light:border-emerald-500/25" },
  { day: "Fri", time: "3:00-4:00pm", title: "Mom birthday prep", color: "bg-pink-500/20 border-pink-500/30 light:bg-pink-500/15 light:border-pink-500/25" },
  // Saturday
  { day: "Sat", time: "11:00am-12:00pm", title: "Gym - Upper body", color: "bg-red-500/20 border-red-500/30 light:bg-red-500/15 light:border-red-500/25" },
  // Sunday
  { day: "Sun", time: "2:00-3:00pm", title: "Review week / Plan next", color: "bg-amber-500/20 border-amber-500/30 light:bg-amber-500/15 light:border-amber-500/25" },
];

export default function VisualDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate chaotic thoughts with floating animation (3-5s bobbing)
      const thoughts = leftSideRef.current?.querySelectorAll('.thought-bubble');
      thoughts?.forEach((thought, i) => {
        const duration = 3 + (i % 3) * 0.8;
        gsap.to(thought, {
          y: '+=6',
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.15,
        });
      });

      // Scroll-triggered animations
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 0.5,
        }
      });

      scrollTl.fromTo(leftSideRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      );

      scrollTl.fromTo(rightSideRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );

      scrollTl.fromTo(captionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.2
      );

      // Calendar blocks stagger animation
      const blocks = rightSideRef.current?.querySelectorAll('.calendar-block');
      blocks?.forEach((block, i) => {
        gsap.fromTo(block,
          { x: 20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--void)', minHeight: '90vh' }}
    >
      {/* Section header */}
      <div className="text-center pt-16 pb-8 px-4">
        <h2 
          className="text-section font-light tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          From mental clutter to calendar clarity
        </h2>
      </div>

      {/* Split screen */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left side - The 2 AM Brain */}
        <div
          ref={leftSideRef}
          className="flex-1 min-h-auto lg:min-h-[60vh] relative p-6 lg:p-8 transition-colors duration-300"
          style={{ backgroundColor: 'var(--void-secondary)' }}
        >
          <p 
            className="text-micro uppercase mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            Your mind at 2 AM
          </p>
          
          {/* Desktop - Absolute positioned scattered thoughts */}
          <div className="hidden lg:block relative h-[400px] xl:h-[500px]">
            {chaoticThoughtsDesktop.map((thought, i) => (
              <div
                key={i}
                className="thought-bubble absolute max-w-[200px] xl:max-w-none"
                style={{
                  top: thought.top,
                  left: thought.left,
                  opacity: thought.opacity,
                  transform: `rotate(${thought.rotate}deg)`,
                }}
              >
                <span 
                  className={`${thought.size}`}
                  style={{ 
                    color: 'var(--text-primary)',
                    fontWeight: thought.urgent ? 600 : 400,
                    textShadow: thought.ghosted ? '0 0 8px rgba(100, 100, 100, 0.3)' : 'none',
                    filter: thought.fading ? 'blur(0.5px)' : 'none',
                    wordWrap: 'break-word',
                  }}
                >
                  {thought.text}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile - Flex column layout - centered with justified/staggered alignment */}
          <div className="lg:hidden flex flex-col items-center gap-4 py-4 px-6">
            {chaoticThoughtsMobile.map((thought, i) => {
              // Create staggered left margins for justified effect
              const staggerOffsets = [0, 20, -15, 30, -10, 25, -20, 15, -30, 10, 5];
              return (
                <div
                  key={i}
                  className="thought-bubble"
                  style={{
                    opacity: thought.opacity,
                    transform: `rotate(${thought.rotate}deg)`,
                    marginLeft: `${staggerOffsets[i]}px`,
                  }}
                >
                  <span 
                    className={`${thought.size}`}
                    style={{ 
                      color: 'var(--text-primary)',
                      fontWeight: thought.urgent ? 600 : 400,
                      textShadow: thought.ghosted ? '0 0 8px rgba(100, 100, 100, 0.3)' : 'none',
                      filter: thought.fading ? 'blur(0.5px)' : 'none',
                    }}
                  >
                    {thought.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center divider with arrow */}
        <div className="hidden lg:flex items-center justify-center w-16 relative">
          <div 
            className="absolute inset-y-0 left-1/2 w-px"
            style={{ backgroundColor: 'var(--hairline)' }}
          />
          <div 
            className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            style={{ 
              backgroundColor: 'var(--surface-custom)', 
              border: '1px solid var(--hairline)' 
            }}
          >
            <ArrowRight style={{ color: 'var(--alarm)' }} className="w-4 h-4" strokeWidth={1.5} />
          </div>
        </div>

        {/* Mobile arrow */}
        <div className="lg:hidden flex justify-center py-6">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center rotate-90 transition-colors duration-300"
            style={{ 
              backgroundColor: 'var(--surface-custom)', 
              border: '1px solid var(--hairline)' 
            }}
          >
            <ArrowRight style={{ color: 'var(--alarm)' }} className="w-4 h-4" strokeWidth={1.5} />
          </div>
        </div>

        {/* Right side - The Minute Morning */}
        <div
          ref={rightSideRef}
          className="flex-1 min-h-auto lg:min-h-[60vh] relative p-4 lg:p-6 xl:p-8 transition-colors duration-300 overflow-x-auto"
          style={{ backgroundColor: 'var(--surface-custom)' }}
        >
          <p 
            className="text-micro uppercase mb-4 lg:mb-6 px-2"
            style={{ color: 'var(--text-muted)' }}
          >
            Your calendar with Minute
          </p>
          
          <div className="space-y-3 min-w-[650px] lg:min-w-0">
            {/* Day headers - All 7 days */}
            <div className="flex gap-1 lg:gap-2 mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="flex-1 text-center">
                  <span className="text-[10px] lg:text-xs mono" style={{ color: 'var(--text-muted)' }}>{day}</span>
                </div>
              ))}
            </div>

            {/* Calendar grid - All 7 days */}
            <div className="grid grid-cols-7 gap-1 lg:gap-2">
              {/* Monday column */}
              <div className="space-y-1 lg:space-y-2">
                {calendarEvents.filter(e => e.day === 'Mon').map((event, i) => (
                  <div
                    key={i}
                    className={`calendar-block p-1.5 lg:p-2 xl:p-3 rounded-md lg:rounded-lg border ${event.color}`}
                  >
                    <div className="text-[8px] lg:text-[9px] xl:text-[10px] mono mb-0.5 lg:mb-1" style={{ color: 'var(--text-muted)' }}>{event.time}</div>
                    <div className="text-[10px] lg:text-xs xl:text-sm leading-tight break-words" style={{ color: 'var(--text-primary)' }}>{event.title}</div>
                  </div>
                ))}
              </div>

              {/* Tuesday column */}
              <div className="space-y-1 lg:space-y-2">
                {calendarEvents.filter(e => e.day === 'Tue').map((event, i) => (
                  <div
                    key={i}
                    className={`calendar-block p-1.5 lg:p-2 xl:p-3 rounded-md lg:rounded-lg border ${event.color}`}
                  >
                    <div className="text-[8px] lg:text-[9px] xl:text-[10px] mono mb-0.5 lg:mb-1" style={{ color: 'var(--text-muted)' }}>{event.time}</div>
                    <div className="text-[10px] lg:text-xs xl:text-sm leading-tight break-words" style={{ color: 'var(--text-primary)' }}>{event.title}</div>
                    {event.subtitle && (
                      <div className="text-[8px] lg:text-[9px] xl:text-xs mt-0.5 lg:mt-1 leading-tight break-words" style={{ color: 'var(--text-muted)' }}>{event.subtitle}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Wednesday column */}
              <div className="space-y-1 lg:space-y-2">
                {calendarEvents.filter(e => e.day === 'Wed').map((event, i) => (
                  <div
                    key={i}
                    className={`calendar-block p-1.5 lg:p-2 xl:p-3 rounded-md lg:rounded-lg border ${event.color}`}
                  >
                    <div className="text-[8px] lg:text-[9px] xl:text-[10px] mono mb-0.5 lg:mb-1" style={{ color: 'var(--text-muted)' }}>{event.time}</div>
                    <div className="text-[10px] lg:text-xs xl:text-sm leading-tight break-words" style={{ color: 'var(--text-primary)' }}>{event.title}</div>
                  </div>
                ))}
              </div>

              {/* Thursday column */}
              <div className="space-y-1 lg:space-y-2">
                {calendarEvents.filter(e => e.day === 'Thu').map((event, i) => (
                  <div
                    key={i}
                    className={`calendar-block p-1.5 lg:p-2 xl:p-3 rounded-md lg:rounded-lg border ${event.color}`}
                  >
                    <div className="text-[8px] lg:text-[9px] xl:text-[10px] mono mb-0.5 lg:mb-1" style={{ color: 'var(--text-muted)' }}>{event.time}</div>
                    <div className="text-[10px] lg:text-xs xl:text-sm leading-tight break-words" style={{ color: 'var(--text-primary)' }}>{event.title}</div>
                  </div>
                ))}
              </div>

              {/* Friday column */}
              <div className="space-y-1 lg:space-y-2">
                {calendarEvents.filter(e => e.day === 'Fri').map((event, i) => (
                  <div
                    key={i}
                    className={`calendar-block p-1.5 lg:p-2 xl:p-3 rounded-md lg:rounded-lg border ${event.color}`}
                  >
                    <div className="text-[8px] lg:text-[9px] xl:text-[10px] mono mb-0.5 lg:mb-1" style={{ color: 'var(--text-muted)' }}>{event.time}</div>
                    <div className="text-[10px] lg:text-xs xl:text-sm leading-tight break-words" style={{ color: 'var(--text-primary)' }}>{event.title}</div>
                  </div>
                ))}
              </div>

              {/* Saturday column */}
              <div className="space-y-1 lg:space-y-2">
                {calendarEvents.filter(e => e.day === 'Sat').map((event, i) => (
                  <div
                    key={i}
                    className={`calendar-block p-1.5 lg:p-2 xl:p-3 rounded-md lg:rounded-lg border ${event.color}`}
                  >
                    <div className="text-[8px] lg:text-[9px] xl:text-[10px] mono mb-0.5 lg:mb-1" style={{ color: 'var(--text-muted)' }}>{event.time}</div>
                    <div className="text-[10px] lg:text-xs xl:text-sm leading-tight break-words" style={{ color: 'var(--text-primary)' }}>{event.title}</div>
                  </div>
                ))}
              </div>

              {/* Sunday column */}
              <div className="space-y-1 lg:space-y-2">
                {calendarEvents.filter(e => e.day === 'Sun').map((event, i) => (
                  <div
                    key={i}
                    className={`calendar-block p-1.5 lg:p-2 xl:p-3 rounded-md lg:rounded-lg border ${event.color}`}
                  >
                    <div className="text-[8px] lg:text-[9px] xl:text-[10px] mono mb-0.5 lg:mb-1" style={{ color: 'var(--text-muted)' }}>{event.time}</div>
                    <div className="text-[10px] lg:text-xs xl:text-sm leading-tight break-words" style={{ color: 'var(--text-primary)' }}>{event.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p
        ref={captionRef}
        className="text-center text-sm lg:text-base py-8 lg:py-10 px-4"
        style={{ color: 'var(--text-secondary)' }}
      >
        Natural language goes in. Executed intentions come out.
      </p>
    </section>
  );
}
