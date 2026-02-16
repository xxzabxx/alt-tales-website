import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Series from './pages/Series';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="logo">Alt Tales</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/series">Series</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/series" element={<Series />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Alt Tales</h3>
              <p>Dark academia urban fantasy by RJ Stenson. Where magic flows through sound and music becomes a weapon.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <Link to="/about">About the Author</Link>
              <Link to="/series">Book Series</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="https://www.tiktok.com/@The.Shadow.index" target="_blank" rel="noopener noreferrer">
                @The.Shadow.index
              </a>
              <p className="footer-note">Follow for behind-the-scenes content, resonance sessions, and book updates.</p>
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
