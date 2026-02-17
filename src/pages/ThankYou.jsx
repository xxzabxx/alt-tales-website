import './ThankYou.css';

const PDF_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/mAOaasWTEYdLPzOk.pdf";

function ThankYou() {
  return (
    <div className="thank-you">
      <section className="thank-you-content">
        <div className="thank-you-card">
          <h1>Thank You!</h1>
          <p className="subtitle">Your journey into the shadows begins now.</p>
          
          <div className="download-section">
            <p>Click below to download Chapter 1 of <strong>The Shadow Index</strong>:</p>
            <a 
              href={PDF_URL} 
              download="The-Shadow-Index-Chapter-1.pdf"
              className="download-button"
            >
              📥 Download Chapter 1 (PDF)
            </a>
          </div>

          <div className="social-section">
            <h2>Stay Connected</h2>
            <p>Follow us for exclusive content, behind-the-scenes insights, and updates on The Shadow Index:</p>
            
            <div className="social-links">
              <a 
                href="https://www.tiktok.com/@the.shadow.index" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link tiktok"
              >
                <span className="social-icon">📱</span>
                <span>TikTok: @The.Shadow.Index</span>
              </a>
              
              <a 
                href="mailto:theshadowindexbook@gmail.com"
                className="social-link email"
              >
                <span className="social-icon">✉️</span>
                <span>Email: theshadowindexbook@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="next-steps">
            <h3>What's Next?</h3>
            <ul>
              <li>📖 Read Chapter 1 and dive into the world of resonance</li>
              <li>🎵 Listen to the <a href="/music">Resonance Sessions</a> for an immersive experience</li>
              <li>❓ Explore the <a href="/faq">FAQ</a> to learn more about the magic system and world</li>
              <li>📬 Watch your inbox for exclusive updates and early access opportunities</li>
            </ul>
          </div>

          <div className="back-link">
            <a href="/">← Back to Homepage</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ThankYou;
