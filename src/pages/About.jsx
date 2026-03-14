import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About RJ Stenson</h1>
        <p className="about-hero-sub">Author &middot; Dark Fantasy &middot; Alt Tales Universe</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <p>
            RJ Stenson is a dark fantasy author writing across two distinct but interconnected worlds.
            His work blends grounded characters with high-stakes genre fiction, spanning from the magic-soaked
            streets of modern Boston to the blood-and-stone survival of an ancient fortress that shouldn't exist.
          </p>
          <p>
            His debut novel, <strong>The Shadow Index</strong>, is a dark academia urban fantasy set in
            present-day Boston, where magic flows through sound and music becomes a weapon. When former
            operative Oliver &ldquo;Oz&rdquo; Cross investigates a series of ritualistic murders, he uncovers
            a conspiracy reaching into the highest levels of power, both human and otherworldly.
            Think noir detective fiction with a hidden magical underbelly.
          </p>
          <p>
            His second project, <strong>The Grimm Forge</strong>, takes a sharp turn into survival dark fantasy.
            When a group of contestants on a televised medieval competition wake up in a world that shouldn't
            exist, the rules disappear and the stakes become permanent. It's a siege story wrapped in a
            LitRPG-adjacent story. Brutal, character-driven, and relentlessly escalating.
          </p>
          <p>
            Both novels exist within the Alt Tales Universe, a shared world where the line between
            reality and myth is thinner than anyone wants to admit, and the people caught in between rarely
            come out unchanged.
          </p>
          <p>
            RJ is currently seeking agent representation for traditional publishing.
          </p>
          <p className="about-personal">
            When not writing, RJ can be found exploring abandoned buildings, collecting vintage vinyl,
            or composing resonance tracks that capture the essence of the Alt Tales universe.
          </p>
        </div>

        <div className="about-books">
          <h2>Current Projects</h2>
          <div className="about-book-list">
            <div className="about-book-item about-book-item--shadow">
              <div className="about-book-accent" />
              <div className="about-book-details">
                <span className="about-book-genre">Urban Fantasy Noir</span>
                <h3>The Shadow Index</h3>
                <p>Alt Tales Universe &middot; Book One</p>
                <p className="about-book-status">Coming Soon &middot; Seeking Agent Representation</p>
                <a href="/series" className="about-book-link">Learn More &rarr;</a>
              </div>
            </div>
            <div className="about-book-item about-book-item--grimm">
              <div className="about-book-accent" />
              <div className="about-book-details">
                <span className="about-book-genre">Survival Dark Fantasy</span>
                <h3>The Grimm Forge</h3>
                <p>Alt Tales Universe &middot; Book Two</p>
                <p className="about-book-status">Coming Soon &middot; Seeking Agent Representation</p>
                <a href="/series" className="about-book-link">Learn More &rarr;</a>
              </div>
            </div>
          </div>
        </div>

        <div className="about-connect">
          <h2>Connect</h2>
          <p>Follow along for exclusive content, resonance sessions, narrated excerpts, and updates on both books.</p>
          <div className="about-connect-links">
            <a href="https://www.tiktok.com/@alt_tales_books" target="_blank" rel="noopener noreferrer" className="about-social-btn">
              TikTok: @Alt_Tales_Books
            </a>
            <a href="/contact" className="about-social-btn about-social-btn--outline">
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
