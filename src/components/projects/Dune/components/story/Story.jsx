import './Story.css'

function Story() {
  return (
    <section id="story" className="story-section">
      <div className="story-content">
        <h2 className="story-title">The Epic Tale of Dune</h2>
        <div className="story-grid">
          <div className="story-card">
            <h3>The Spice</h3>
            <p>
              Melange, the most valuable substance in the universe, extends life, expands consciousness, 
              and makes interstellar travel possible. It can only be found on the desert planet Arrakis.
            </p>
          </div>
          <div className="story-card">
            <h3>Paul Atreides</h3>
            <p>
              The young heir to House Atreides, Paul discovers his destiny as the Kwisatz Haderach—a being 
              who can see across space and time, destined to change the universe forever.
            </p>
          </div>
          <div className="story-card">
            <h3>The Fremen</h3>
            <p>
              The native people of Arrakis, masters of the desert who have learned to survive in the harshest 
              conditions and ride the mighty sandworms.
            </p>
          </div>
          <div className="story-card">
            <h3>The Desert</h3>
            <p>
              Arrakis—a world of endless sand dunes, where water is more precious than gold and the 
              giant sandworms rule the deep desert.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
