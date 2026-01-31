export default function Footer() {
  return (
    <footer
      className="w-full py-8 px-6 transition-colors duration-300"
      style={{ 
        backgroundColor: 'var(--void)',
        borderTop: '1px solid var(--hairline)'
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p 
          className="text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          © 2026 MinuteAI
        </p>
        
        <p 
          className="text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          Privacy First
        </p>
        
        <p 
          className="text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          Built with care
        </p>
      </div>
    </footer>
  );
}
