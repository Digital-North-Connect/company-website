import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isDark = !scrolled && isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/50'
          : isHomePage
          ? 'bg-transparent'
          : 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50'
      }`}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
          paddingLeft: '4%',
          paddingRight: '4%',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)',
            }}
          >
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>DN</span>
          </div>
          <span
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: isDark ? 'white' : '#0f172a',
            }}
            className="hidden sm:block"
          >
            Digital North Connect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
          <a
            href={isHomePage ? '#services' : '/#services'}
            className="transition-all duration-200"
            style={{
              fontSize: '16px',
              fontWeight: '500',
              color: isDark ? 'white' : '#334155',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.15)' : '#f1f5f9';
              e.currentTarget.style.color = isDark ? 'white' : '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = isDark ? 'white' : '#334155';
            }}
          >
            Services
          </a>
          <Link
            to="/about"
            className="transition-all duration-200"
            style={{
              fontSize: '16px',
              fontWeight: '500',
              color: isDark ? 'white' : '#334155',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.15)' : '#f1f5f9';
              e.currentTarget.style.color = isDark ? 'white' : '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = isDark ? 'white' : '#334155';
            }}
          >
            About
          </Link>
          <a
            href="mailto:matt@digitalnorthconnect.com"
            className="transition-all duration-200"
            style={{
              fontSize: '16px',
              fontWeight: '500',
              color: isDark ? 'white' : '#334155',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.15)' : '#f1f5f9';
              e.currentTarget.style.color = isDark ? 'white' : '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = isDark ? 'white' : '#334155';
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{
            padding: '8px',
            borderRadius: '8px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: isDark ? 'white' : '#475569',
          }}
        >
          <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ padding: '16px 4%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a
              href={isHomePage ? '#services' : '/#services'}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                color: '#334155',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Services
            </a>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                color: '#334155',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              About
            </Link>
            <a
              href="mailto:matt@digitalnorthconnect.com"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                marginTop: '8px',
                padding: '12px 16px',
                borderRadius: '12px',
                background: '#0f172a',
                color: 'white',
                fontWeight: '500',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
