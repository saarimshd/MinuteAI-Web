import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Vanta.js fog background
    if (sectionRef.current && (window as any).VANTA) {
      vantaRef.current = (window as any).VANTA.FOG({
        el: sectionRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xf0000,
        midtoneColor: 0x232339,
        lowlightColor: 0x232552,
        baseColor: 0x481919,
        speed: 0.40,
        zoom: 0.90
      });
    }

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ delay: 0.2 });

      // Headline animation - split by words
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        loadTl.fromTo(words, 
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power2.out' }
        );
      }

      // Subheadline
      loadTl.fromTo(subheadlineRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );

      // CTA
      loadTl.fromTo(ctaRef.current,
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

      // Trust text
      loadTl.fromTo(trustRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.2'
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: 0.5,
        }
      });

      // Exit animations
      scrollTl.fromTo(headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0
      );

      scrollTl.fromTo(subheadlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-8vh', opacity: 0, ease: 'power2.in' },
        0.05
      );

      scrollTl.fromTo(ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '-6vh', opacity: 0, ease: 'power2.in' },
        0.1
      );

      scrollTl.fromTo(trustRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.1
      );

    }, sectionRef);

    return () => {
      ctx.revert();
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  const headlineText = "What if you actually finished everything you started?";
  const words = headlineText.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Main content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-hero font-light tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="mt-6 text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed"
          style={{ color: 'var(--text-primary)' }}
        >
          MinuteAI makes sure you actually get there and finish what you started. Speak naturally, get scheduled automatically, and never lose track of what matters again. Tell MinuteAI "Finish my assignment by friday" and watch it break the work into daily sessions, schedule them into your calendar, and remind you until it's done. From chaotic thoughts to finished tasks—without the manual sorting. Whether it's work deadlines, personal goals, or recurring life admin, MinuteAI handles it all.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-10">
          <button
            className="inline-flex items-center justify-center px-8 py-4 text-white font-medium text-sm uppercase tracking-[0.05em] rounded-lg transition-all duration-200 hover:scale-[1.02]"
            style={{ 
              backgroundColor: 'var(--alarm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--alarm-hover)';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(255, 59, 48, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--alarm)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => {
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Be First in Line
          </button>
        </div>

        {/* Trust text */}
        <p
          ref={trustRef}
          className="mt-4 text-sm mono"
          style={{ color: 'var(--text-primary)' }}
        >
          Join the waitlist for launch updates, priority access, and early perks.
        </p>
      </div>
    </section>
  );
}
