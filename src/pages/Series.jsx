import './Series.css';

function Series() {
  return (
    <div className="series">
      <section className="series-hero">
        <h1>The Alt Tales Series</h1>
        <p>Explore the hidden corners of a world where magic and reality intertwine</p>
      </section>

      <section className="series-content">
        <div className="book-card">
          <div className="book-image">
            <img src="/images/shadow_index_book_cover.webp" alt="The Shadow Index" />
          </div>
          <div className="book-info">
            <h2>The Shadow Index</h2>
            <p className="book-status">Available Now</p>
            <p className="book-description">
              In rain-soaked Boston, where magic hums beneath the streets and secrets hide in plain sight, 
              a former operative must confront the shadows of his past before they consume the city's soul.
            </p>
            <p>
              Cade Mercer thought he left the world of resonance behind. But when a series of brutal murders 
              threatens to expose the Veil, the fragile barrier between the mundane and magical worlds, he's 
              pulled back into a conspiracy that reaches the highest levels of power.
            </p>
            <p>
              Forced to work with Lyra Thorne, an operative from the very organization he betrayed, Cade must 
              navigate a treacherous landscape of old enemies, hidden agendas, and a magic system that turns 
              sound into power.
            </p>
            <div className="book-themes">
              <span className="theme-tag">Urban Fantasy Noir</span>
              <span className="theme-tag">Music as Magic</span>
              <span className="theme-tag">Enemies to Lovers</span>
            </div>
          </div>
        </div>

        <div className="book-card coming-soon">
          <div className="book-placeholder">
            <div className="placeholder-text">Coming Soon</div>
          </div>
          <div className="book-info">
            <h2>The Grimm Forge</h2>
            <p className="book-status">In Development</p>
            <p className="book-description">
              The next chapter in the Alt Tales universe. More details coming soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Series;
