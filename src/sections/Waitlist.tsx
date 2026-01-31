import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "60% off founder's pricing forever",
  "Direct input on feature development",
  "Priority onboarding when we launch",
];

export default function Waitlist() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.5,
        }
      });

      scrollTl.fromTo(contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' }
      );

      scrollTl.fromTo(formRef.current,
        { scale: 0.98, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'power2.out' },
        0.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would typically send the email to your backend
    }
  };

  return (
    <section
      ref={sectionRef}
      id="waitlist"
      className="relative w-full flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ 
        backgroundColor: 'var(--void-secondary)',
        minHeight: '100vh'
      }}
    >
      <div className="relative z-10 max-w-[600px] mx-auto px-6 py-20">
        <div ref={contentRef}>
          {/* Headline */}
          <h2 
            className="text-section font-light tracking-tight text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            We're building this for people tired of disappointing themselves.
          </h2>

          {/* Subtext */}
          <p 
            className="mt-6 text-body text-center leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            MinuteAI is currently in closed alpha. Join the waitlist for founder pricing and early access.
          </p>

          {/* Benefits list */}
          <div className="mt-10 space-y-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255, 59, 48, 0.2)' }}
                >
                  <Check style={{ color: 'var(--alarm)' }} className="w-3 h-3" strokeWidth={2} />
                </div>
                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 space-y-4"
        >
          {!submitted ? (
            <>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-14 px-5 rounded-xl text-base transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--surface-custom)', 
                    border: '1px solid var(--hairline)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full h-14 text-white font-medium text-sm uppercase tracking-[0.05em] rounded-lg transition-all duration-200 hover:scale-[1.01]"
                style={{ backgroundColor: 'var(--alarm)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--alarm-hover)';
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(255, 59, 48, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--alarm)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Secure my spot
              </button>
            </>
          ) : (
            <div className="text-center py-8">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'rgba(255, 59, 48, 0.2)' }}
              >
                <Sparkles style={{ color: 'var(--alarm)' }} className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 
                className="text-xl font-light mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                You're on the list!
              </h3>
              <p 
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                We'll be in touch soon with early access details.
              </p>
            </div>
          )}
        </form>

        {/* Social proof */}
        <p 
          className="mt-6 text-sm mono text-center"
          style={{ color: 'var(--text-muted)' }}
        >
          1,247 people ahead of you
        </p>

        {/* Quote */}
        <div 
          className="mt-12 pt-8 border-t transition-colors duration-300"
          style={{ borderColor: 'var(--hairline)' }}
        >
          <blockquote className="text-center">
            <p 
              className="text-lg italic mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              "Finally, someone built the assistant I've been trying to hire for years."
            </p>
            <cite 
              className="text-sm not-italic"
              style={{ color: 'var(--text-muted)' }}
            >
              — Design Partner, Stanford
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
