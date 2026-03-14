import './ThankYouGrimm.css';

const GRIMM_PDF_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/aAHnHtvszcpYAPVq.pdf";
const GRIMM_COVER = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/XyUePXrrlgJlYkxL.png";
const GRIMM_VIDEO = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/TqFRAEeepFjWgFjS.mp4";

function ThankYouGrimm() {
  return (
    <div className="thankyou-grimm">
      <div className="tg-container">

        {/* Header */}
        <div className="tg-header">
          <div className="tg-emblem">⚔</div>
          <h1>You're In.</h1>
          <p className="tg-subheading">
            Welcome to the world of <strong>The Grimm Forge</strong>. Your prologue is ready to download below.
          </p>
        </div>

        {/* Download Card */}
        <div className="tg-download-card">
          <div className="tg-cover-wrap">
            <img src={GRIMM_COVER} alt="The Grimm Forge cover" className="tg-cover" />
          </div>
          <div className="tg-download-info">
            <p className="tg-book-label">The Grimm Forge</p>
            <h2 className="tg-book-title">Prologue</h2>
            <p className="tg-book-author">by RJ Stenson</p>
            <p className="tg-book-desc">
              He ran through a fortress that had no business existing. A survival dark fantasy that begins where the rules end.
            </p>
            <a
              href={GRIMM_PDF_URL}
              download="TheGrimmForge_Prologue_RJStenson.pdf"
              className="tg-download-btn"
            >
              ⬇ Download the Prologue (PDF)
            </a>
            <p className="tg-note">Free to read and share. No strings attached.</p>
          </div>
        </div>

        {/* Narrated Video */}
        <div className="tg-video-section">
          <h3>Or watch the narrated version</h3>
          <p>Prefer to experience it? Watch the full narrated prologue right here.</p>
          <div className="tg-video-wrapper">
            <video controls playsInline poster={GRIMM_COVER} className="tg-video">
              <source src={GRIMM_VIDEO} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>

        {/* Social CTAs */}
        <div className="tg-social-section">
          <h3>Stay in the loop</h3>
          <p>
            The Grimm Forge is coming. Follow along for updates, exclusive content, and early access opportunities.
          </p>
          <div className="tg-social-links">
            <a
              href="https://www.tiktok.com/@alt_tales_books"
              target="_blank"
              rel="noopener noreferrer"
              className="tg-social-btn tg-social-btn--tiktok"
            >
              Follow @Alt_Tales_Books on TikTok
            </a>
            <a
              href="mailto:theshadowindexbook@gmail.com"
              className="tg-social-btn tg-social-btn--email"
            >
              Email the Author
            </a>
          </div>
        </div>

        {/* Next Steps */}
        <div className="tg-next-section">
          <h3>While you wait</h3>
          <div className="tg-next-grid">
            <a href="/series" className="tg-next-card">
              <span className="tg-next-icon">📚</span>
              <span className="tg-next-label">Explore Both Books</span>
              <span className="tg-next-desc">Learn more about The Shadow Index and The Grimm Forge universe.</span>
            </a>
            <a href="/faq" className="tg-next-card">
              <span className="tg-next-icon">❓</span>
              <span className="tg-next-label">Read the FAQ</span>
              <span className="tg-next-desc">Deep dive into the world, magic system, and characters of The Shadow Index.</span>
            </a>
            <a href="/music" className="tg-next-card">
              <span className="tg-next-icon">🎵</span>
              <span className="tg-next-label">Resonance Sessions</span>
              <span className="tg-next-desc">Listen to the original music inspired by The Shadow Index.</span>
            </a>
          </div>
        </div>

        {/* Agent Note */}
        <p className="tg-agent-note">
          RJ Stenson is currently seeking agent representation for traditional publishing.
        </p>

      </div>
    </div>
  );
}

export default ThankYouGrimm;
