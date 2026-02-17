import { useState } from 'react';
import './Home.css';

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/wGgrpBOKZUgnkwRw.png";

function Home() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'homepage_hero'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setMessage('Success! Check your email for the first chapter.');
        setEmail('');
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <img src={LOGO_URL} alt="Alt Tales Logo" className="hero-logo" />
            <h1>The Shadow Index</h1>
            <p className="author">by RJ Stenson</p>
            <p className="tagline">
              In rain-soaked Boston, where magic hums beneath the streets and secrets hide in plain sight, 
              a former operative must confront the shadows of his past before they consume the city's soul.
            </p>
            <form onSubmit={handleSubscribe} className="email-form">
              <input
                type="email"
                placeholder="Enter your email for the first chapter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Get First Chapter'}
              </button>
            </form>
            {message && <p className="form-message">{message}</p>}
          </div>
          <div className="hero-image">
            <img src="/images/shadow_index_book_cover.webp" alt="The Shadow Index book cover" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-grid">
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
        </div>
      </section>

      <section className="universe">
        <h2>Part of the Alt Tales Universe</h2>
        <p>The Shadow Index is the first book in a series exploring the hidden corners of a world where magic and reality intertwine.</p>
      </section>
    </div>
  );
}

export default Home;
