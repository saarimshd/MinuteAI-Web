import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);
  const vantaRef = useRef<any>(null);

  // Waitlist state
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [placeholderText, setPlaceholderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect for placeholder
  useEffect(() => {
    const phrases = [
      "Finish my assignment by Friday...",
      "Launch my portfolio today...",
      "Organize my chaotic thoughts...",
      "Enter your email to join..."
    ];

    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setPlaceholderText(
        isDeleting
          ? fullText.substring(0, placeholderText.length - 1)
          : fullText.substring(0, placeholderText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && placeholderText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && placeholderText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [placeholderText, isDeleting, loopNum, typingSpeed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

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

        {/* CTA - Command Interface Waitlist */}
        <div ref={ctaRef} className="mt-10 w-full max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            className={`
              relative group transition-all duration-500 transform
              ${status === 'success' ? 'scale-95 opacity-0 pointer-events-none h-0 overflow-hidden' : 'scale-100 opacity-100'}
            `}
          >
            {/* Glass Container */}
            <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 transition-all duration-300 group-focus-within:bg-white/10 group-focus-within:border-white/20 group-focus-within:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] hover:border-white/15">

              {/* Prompt Icon */}
              <div className="pl-4 pr-3 text-white/40">
                <Terminal size={20} />
              </div>

              {/* Input Field with Typewriter Placeholder */}
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-none text-white text-lg placeholder-transparent focus:ring-0 outline-none h-12 z-10 relative"
                  required
                />

                {/* Custom Typewriter Placeholder (Only visible when input is empty) */}
                {email.length === 0 && (
                  <div className="absolute inset-0 flex items-center pointer-events-none text-white/30 text-lg">
                    <span>{placeholderText}</span>
                    <span className="w-0.5 h-5 bg-red-500 ml-1 animate-blink"></span>
                  </div>
                )}
              </div>

              {/* Intelligent Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300
                  ${email.length > 0
                    ? 'bg-gradient-to-br from-red-600 to-red-900 text-white shadow-lg shadow-red-900/30 hover:scale-105'
                    : 'bg-white/5 text-white/30 cursor-not-allowed'}
                `}
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Be First</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>

            {/* Decorative "Glow" under the bar */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/0 via-red-500/10 to-purple-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </form>

          {/* Success State Display */}
          {status === 'success' && (
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-900/10 border border-green-500/20 backdrop-blur-md rounded-2xl p-6 text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 border border-green-500/30 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                  <Check size={24} />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-1">Spot Reserved</h3>
              <p className="text-white/60 text-sm">We've added you to the priority queue.</p>
            </div>
          )}

          {/* CSS for animations */}
          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            .animate-blink {
              animation: blink 1s step-end infinite;
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fadeInUp 0.5s ease-out forwards;
            }
          `}</style>
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
