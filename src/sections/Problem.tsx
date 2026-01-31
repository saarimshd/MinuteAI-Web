import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
        }
      });

      // Label fade in
      scrollTl.fromTo(labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0
      );

      // Headline fade in
      scrollTl.fromTo(headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.1
      );

      // Body fade in
      scrollTl.fromTo(bodyRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.2
      );

      // Closing fade in
      scrollTl.fromTo(closingRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ 
        backgroundColor: 'var(--void-secondary)',
        minHeight: '60vh',
        padding: '120px 0'
      }}
    >
      <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
        {/* Label */}
        <p
          ref={labelRef}
          className="text-micro uppercase mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          The Problem
        </p>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="text-section font-light tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          The modern tragedy: Infinite intentions. Finite execution.
        </h2>

        {/* Body copy */}
        <p
          ref={bodyRef}
          className="mt-6 text-body leading-[1.7]"
          style={{ color: 'var(--text-secondary)' }}
        >
          You've tried everything. Notion templates. Bullet journals. That voice memo you swore you'd listen to later. You start every Monday organized, and every Friday wondering where the week went. It's not your fault. Productivity tools are designed to store your ambitions, not deliver them. You don't have a tracking problem. You have a commitment problem.
        </p>

        {/* Closing statement */}
        <p
          ref={closingRef}
          className="mt-8 text-lg italic"
          style={{ color: 'var(--text-primary)' }}
        >
          MinuteAI exists to close the gap between "I should" and "I did."
        </p>
      </div>
    </section>
  );
}
