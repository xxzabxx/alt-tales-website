import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/wGgrpBOKZUgnkwRw.png";
const GRIMM_COVER_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/XyUePXrrlgJlYkxL.png";

const BOOKS = [
  {
    id: 'shadow',
    title: 'The Shadow Index',
    genre: 'Urban Fantasy Noir',
    tagline: 'In rain-soaked Boston, where magic hums beneath the streets and secrets hide in plain sight, a former operative must confront the shadows of his past before they consume the city\'s soul.',
    coverSrc: '/images/shadow_index_book_cover.webp',
    coverAlt: 'The Shadow Index book cover',
    ctaLabel: 'Get First Chapter Free',
    ctaSource: 'homepage_hero_shadow',
    thankYouPath: '/thank-you',
    accentColor: '#10B981',
    accentGlow: 'rgba(16, 185, 129, 0.3)',
    bgGradient: 'linear-gradient(135deg, #0A1628 0%, #050C13 100%)',
    radialGlow: 'radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.12) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 55%)',
  },
  {
    id: 'grimm',
    title: 'The Grimm Forge',
    genre: 'Survival Dark Fantasy',
    tagline: 'A high stakes medieval reality show turns into a nightmare when its contestants awaken in a world warped by time and shadow, forced to kill to live as strange powers stir inside them.',
    coverSrc: GRIMM_COVER_URL,
    coverAlt: 'The Grimm Forge book cover',
    ctaLabel: 'Get the Prologue Free',
    ctaSource: 'homepage_hero_grimm',
    thankYouPath: '/thank-you-grimm',
    accentColor: '#D97706',
    accentGlow: 'rgba(217, 119, 6, 0.3)',
    bgGradient: 'linear-gradient(135deg, #1A0E05 0%, #0D0804 100%)',
    radialGlow: 'radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.12) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(180, 83, 9, 0.1) 0%, transparent 55%)',
  },
];

function Home() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const book = BOOKS[activeIndex];
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Parallax mouse tracking
  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const goToSlide = useCallback((index) => {
    if (index === activeIndex || transitioning) return;
    setTransitioning(true);
    setMessage('');
    setEmail('');
    setTimeout(() => {
      setActiveIndex(index);
      setTransitioning(false);
    }, 400);
  }, [activeIndex, transitioning]);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((activeIndex + 1) % BOOKS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex, goToSlide]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Fire and forget : always redirect regardless of outcome
    try {
      await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: book.ctaSource }),
      });
    } catch {
      // Silently ignore errors : user still gets the content
    }

    // Always redirect to the thank-you/download page
    navigate(book.thankYouPath);
  };

  return (
    <div className="home">
      {/* HERO CAROUSEL */}
      <section
        ref={heroRef}
        className={`hero hero--${book.id}${transitioning ? ' hero--fade' : ''}`}
        style={{ '--accent': book.accentColor, '--accent-glow': book.accentGlow }}
        onMouseMove={handleMouseMove}
      >
        {/* Ghosted parallax book cover background */}
        <div
          className="hero-bg-cover"
          style={{
            backgroundImage: `url(${book.coverSrc})`,
            transform: `translate(${(mousePos.x - 0.5) * -18}px, ${(mousePos.y - 0.5) * -12}px) scale(1.08)`,
          }}
        />
        {/* Atmospheric overlay */}
        <div className={`hero-bg-overlay hero-bg-overlay--${book.id}`} />
        <div
          className="hero-radial"
          style={{ backgroundImage: book.radialGlow }}
        />

        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-genre-badge" style={{ borderColor: book.accentColor, color: book.accentColor }}>
              {book.genre}
            </span>

            <h1 style={{ color: book.accentColor, textShadow: `0 0 30px ${book.accentGlow}` }}>
              {book.title}
            </h1>
            <p className="author">by RJ Stenson</p>
            <p className="tagline">{book.tagline}</p>
            <p className="agent-note">Currently seeking agent representation for traditional publishing</p>

            <form onSubmit={handleSubscribe} className="email-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                style={{ backgroundColor: book.accentColor }}
              >
                {loading ? 'Sending...' : book.ctaLabel}
              </button>
            </form>
            {message && <p className="form-message">{message}</p>}
          </div>

          <div className="hero-image">
            <img
              src={book.coverSrc}
              alt={book.coverAlt}
              style={{ boxShadow: `0 10px 40px ${book.accentGlow}, 0 0 0 1px rgba(255,255,255,0.05)` }}
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          {BOOKS.map((b, i) => (
            <button
              key={b.id}
              className={`carousel-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`View ${b.title}`}
              style={i === activeIndex ? { backgroundColor: book.accentColor } : {}}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={() => goToSlide((activeIndex - 1 + BOOKS.length) % BOOKS.length)}
          aria-label="Previous book"
        >
          ‹
        </button>
        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={() => goToSlide((activeIndex + 1) % BOOKS.length)}
          aria-label="Next book"
        >
          ›
        </button>
      </section>

      {/* FEATURES - adapt per book */}
      <section className="features">
        <div className="feature-grid">
          {activeIndex === 0 ? (
            <>
              <div className="feature">
                <h3>Urban Fantasy Noir</h3>
                <p>A gritty blend of detective mystery and magical intrigue set in a rain-soaked Boston where two realities collide.</p>
              </div>
              <div className="feature">
                <h3>Music as Magic</h3>
                <p>Experience resonance, where magic flows through sound and music becomes a weapon, a shield, and a path to truth.</p>
              </div>
              <div className="feature">
                <h3>Enemies to Lovers</h3>
                <p>Two operatives from opposing sides of the Veil, forced into proximity, bound by necessity, and drawn together by something neither can control.</p>
              </div>
            </>
          ) : (
            <>
              <div className="feature">
                <h3>Survival at Any Cost</h3>
                <p>Ripped from the modern world into a medieval nightmare, contestants must kill to survive while the rules of reality collapse around them.</p>
              </div>
              <div className="feature">
                <h3>Ancient Powers Awakening</h3>
                <p>Strange abilities stir inside the survivors. Something ancient chose them. The question is whether they were ever meant to leave.</p>
              </div>
              <div className="feature">
                <h3>Reality TV Gone Wrong</h3>
                <p>What began as a televised competition becomes a desperate fight for survival in a world warped by time and shadow.</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* UNIVERSE SECTION */}
      <section className="universe">
        <h2>The Alt Tales Universe</h2>
        <p>Two worlds. Two stories. One author exploring the hidden corners where magic, survival, and the human spirit collide.</p>
        <div className="universe-books">
          {BOOKS.map((b, i) => (
            <div
              key={b.id}
              className={`universe-book${i === activeIndex ? ' active' : ''}`}
              onClick={() => goToSlide(i)}
              style={i === activeIndex ? { borderColor: b.accentColor } : {}}
            >
              <img src={b.coverSrc} alt={b.coverAlt} />
              <span style={i === activeIndex ? { color: b.accentColor } : {}}>{b.title}</span>
              <small>{b.genre}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
