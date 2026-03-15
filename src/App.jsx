import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Series from './pages/Series';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Music from './pages/Music';
import ThankYou from './pages/ThankYou';
import ThankYouGrimm from './pages/ThankYouGrimm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/wGgrpBOKZUgnkwRw.png"
                alt="Alt Tales"
                className="nav-logo-img"
              />
            </Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/series">Books</Link>
              <Link to="/music">Music</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/series" element={<Series />} />
          <Route path="/music" element={<Music />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/thank-you-grimm" element={<ThankYouGrimm />} />
        </Routes>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Alt Tales</h3>
              <p>Two worlds. Two stories. One author. Dark fantasy by RJ Stenson. Currently seeking agent representation for traditional publishing.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link to="/about">About the Author</Link>
              <Link to="/series">The Books</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/music">Resonance Sessions</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="https://www.tiktok.com/@alt_tales_books" target="_blank" rel="noopener noreferrer">
                @Alt_Tales_Books on TikTok
              </a>
              <p className="footer-note">Follow for behind-the-scenes content, resonance sessions, and book updates.</p>
              <p className="footer-agent-note">Currently seeking agent representation for traditional publishing.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 RJ Stenson. All rights reserved. The Shadow Index and all related characters and concepts are the property of the author.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
