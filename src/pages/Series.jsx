import './Series.css';

const SHADOW_COVER = '/images/shadow_index_book_cover.webp';
const GRIMM_COVER = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/XyUePXrrlgJlYkxL.png";
const GRIMM_VIDEO = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663026701779/TqFRAEeepFjWgFjS.mp4";

function Series() {
  return (
    <div className="series">
      <section className="series-header">
        <h1>The Books</h1>
        <p className="series-subtitle">Two worlds. Two stories. One author.</p>
        <p className="series-agent-note">RJ Stenson is currently seeking agent representation for traditional publishing.</p>
      </section>

      {/* THE SHADOW INDEX */}
      <section className="book-section book-section--shadow">
        <div className="book-inner">
          <div className="book-cover-col">
            <img src={SHADOW_COVER} alt="The Shadow Index book cover" className="book-cover" />
            <div className="book-badges">
              <span className="badge badge--genre">Urban Fantasy Noir</span>
              <span className="badge badge--status">Coming Soon</span>
            </div>
          </div>
          <div className="book-info-col">
            <p className="book-series-label">Alt Tales Universe &middot; Book One</p>
            <h2 className="book-title book-title--shadow">The Shadow Index</h2>
            <p className="book-author">by RJ Stenson</p>
            <p className="book-pitch">
              <em>In rain-soaked Boston, where magic hums beneath the streets and secrets hide in plain sight, a former operative must confront the shadows of his past before they consume the city's soul.</em>
            </p>
            <div className="book-blurb">
              <p>Oliver &ldquo;Oz&rdquo; Cross has spent years keeping the peace between two worlds. The one people can see, and the one they cannot. As a former Concordat operative, he knows how to stay invisible. How to keep the Veil intact. How to make sure the magic that flows through sound and music never spills into the wrong hands.</p>
              <p>Then a series of ritualistic murders starts unraveling everything he has worked to protect. The victims share one thing: they were all resonance users. And the killer knows exactly how to silence them.</p>
              <p>Forced into an uneasy alliance with Elara Draegor Voss, an operative from the very faction he has spent his career opposing, Oz must navigate a conspiracy that reaches into the highest levels of power, both human and otherworldly.</p>
            </div>
            <div className="book-details">
              <div className="book-detail">
                <span className="detail-label">Genre</span>
                <span className="detail-value">Urban Fantasy / Dark Academia</span>
              </div>
              <div className="book-detail">
                <span className="detail-label">Setting</span>
                <span className="detail-value">Modern-day Boston</span>
              </div>
              <div className="book-detail">
                <span className="detail-label">Comp Titles</span>
                <span className="detail-value">Rivers of London &middot; The Dresden Files &middot; Ninth House</span>
              </div>
              <div className="book-detail">
                <span className="detail-label">Status</span>
                <span className="detail-value">Coming Soon &middot; Seeking Agent Representation</span>
              </div>
            </div>
            <div className="book-ctas">
              <a href="/" className="btn btn--primary btn--shadow">Get First Chapter Free</a>
              <a href="/faq" className="btn btn--outline">Read the FAQ</a>
              <a href="/music" className="btn btn--outline">Resonance Sessions</a>
            </div>
          </div>
        </div>
      </section>

      {/* THE GRIMM FORGE */}
      <section className="book-section book-section--grimm">
        <div className="book-inner book-inner--reversed">
          <div className="book-cover-col">
            <img src={GRIMM_COVER} alt="The Grimm Forge book cover" className="book-cover" />
            <div className="book-badges">
              <span className="badge badge--genre badge--grimm-genre">Survival Dark Fantasy</span>
              <span className="badge badge--status">Coming Soon</span>
            </div>
          </div>
          <div className="book-info-col">
            <p className="book-series-label">Alt Tales Universe &middot; Book Two</p>
            <h2 className="book-title book-title--grimm">The Grimm Forge</h2>
            <p className="book-author">by RJ Stenson</p>
            <p className="book-pitch">
              <em>A high stakes medieval reality show turns into a nightmare when its contestants awaken in a world warped by time and shadow, forced to kill to live as strange powers stir inside them. The truth emerges that they may never have been meant to leave.</em>
            </p>
            <div className="book-blurb">
              <p>Peter Grimm is a man adrift, barely holding his life together when the Cirrus Corporation offers him a chance to compete in a televised medieval survival competition. A structured game. Clear rules. A payout big enough to change everything.</p>
              <p>Then everything goes black.</p>
              <p>He wakes to blood, fire, and a world that should not exist. London is gone. The rules are gone. The only shelter is an ancient keep clawing up from the wilderness.</p>
              <p>Inside, the truth is simple. Monsters are real. Death is permanent. No one is coming to save them. To live, Peter and the others will cross lines they cannot come back from, while something ancient begins to stir. The real question is whether Peter and his team were ever meant to leave.</p>
            </div>
            <div className="book-details">
              <div className="book-detail">
                <span className="detail-label">Genre</span>
                <span className="detail-value">Survival Dark Fantasy / Portal Fantasy</span>
              </div>
              <div className="book-detail">
                <span className="detail-label">Setting</span>
                <span className="detail-value">Modern-day London to Ancient Fortress</span>
              </div>
              <div className="book-detail">
                <span className="detail-label">Themes</span>
                <span className="detail-value">Survival &middot; Ancient Powers &middot; Identity &middot; Sacrifice</span>
              </div>
              <div className="book-detail">
                <span className="detail-label">Status</span>
                <span className="detail-value">Coming Soon &middot; Seeking Agent Representation</span>
              </div>
            </div>

            <div className="grimm-comp-titles">
              <p className="comp-titles-label">Comp Titles</p>
              <ul className="comp-titles-list">
                <li><strong>The Will of the Many</strong> <span>(James Islington)</span> &ndash; high stakes selection &amp; competition energy</li>
                <li><strong>Witch King</strong> <span>(Martha Wells)</span> &ndash; conspiracy plus &ldquo;why is the world like this&rdquo; under pressure</li>
                <li><strong>Dungeon Crawler Carl</strong> <span>(Matt Dinniman)</span> &ndash; brutal survival and dark, reactive humor</li>
                <li><strong>Red Rising</strong> <span>(Pierce Brown)</span> &ndash; escalating stakes and competitive pressure</li>
              </ul>
            </div>

            <div className="grimm-pitch">
              <p>If you like survival fantasy with a modern edge, this is for you. <em>The Grimm Forge</em> hits the sweet spot between a deadly competition and a siege story, with a pragmatic lead, dark humor under pressure, and a mystery that keeps tightening the screws. It&rsquo;s LitRPG-adjacent in energy, but more grounded and character-first.</p>
            </div>

            <div className="book-ctas">
              <a href="/thank-you-grimm" className="btn btn--primary btn--grimm">Get the Prologue Free</a>
            </div>
          </div>
        </div>

        {/* Narrated Prologue Video */}
        <div className="grimm-video-section">
          <h3 className="video-heading">Narrated Prologue</h3>
          <p className="video-subheading">Hear the opening of The Grimm Forge, narrated and brought to life.</p>
          <div className="video-wrapper">
            <video controls playsInline poster={GRIMM_COVER} className="grimm-video">
              <source src={GRIMM_VIDEO} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
          <p className="video-tiktok-note">
            Follow{' '}
            <a href="https://www.tiktok.com/@alt_tales_books" target="_blank" rel="noopener noreferrer">
              @Alt_Tales_Books on TikTok
            </a>{' '}
            for more exclusive content.
          </p>
        </div>
      </section>

      {/* UNIVERSE FOOTER */}
      <section className="series-universe">
        <h2>The Alt Tales Universe</h2>
        <p>Both series exist within the same expansive universe. Magic is real, rules are fragile, and the line between worlds is thinner than anyone wants to admit.</p>
        <div className="series-social">
          <a href="https://www.tiktok.com/@alt_tales_books" target="_blank" rel="noopener noreferrer" className="social-btn">
            TikTok: @Alt_Tales_Books
          </a>
          <a href="mailto:theshadowindexbook@gmail.com" className="social-btn">
            Contact the Author
          </a>
        </div>
      </section>
    </div>
  );
}

export default Series;
