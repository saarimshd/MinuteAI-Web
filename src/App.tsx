import { useEffect, useState } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import ThreeTruths from './sections/ThreeTruths';
import VisualDemo from './sections/VisualDemo';
import Waitlist from './sections/Waitlist';
import Footer from './sections/Footer';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-void/80 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-medium tracking-tight" style={{ color: 'var(--text-primary)' }}>
          MinuteAI
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#problem" 
            className="text-sm transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Problem
          </a>
          <a 
            href="#truths" 
            className="text-sm transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Truths
          </a>
          <a 
            href="#demo" 
            className="text-sm transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Demo
          </a>
          <a 
            href="#waitlist" 
            className="text-sm transition-colors"
            style={{ color: 'var(--alarm)' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Join Beta
          </a>
        </div>


      </div>
    </nav>
  );
}

function GrainOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function AppContent() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--void)' }}>
      <Navigation />
      <GrainOverlay />
      
      <main className="relative">
        <Hero />
        <div id="problem">
          <Problem />
        </div>
        <div id="truths">
          <ThreeTruths />
        </div>
        <div id="demo">
          <VisualDemo />
        </div>
        <Waitlist />
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
