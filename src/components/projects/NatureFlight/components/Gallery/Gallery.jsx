import './Gallery.css'

function Gallery() {
  const galleryItems = [
    { id: 1, title: "Eagle in Flight", location: "Rocky Mountains", species: "Golden Eagle" },
    { id: 2, title: "Morning Song", location: "Amazon Rainforest", species: "Toucan" },
    { id: 3, title: "Arctic Wanderer", location: "North Pole", species: "Arctic Tern" },
    { id: 4, title: "Desert Soarer", location: "Sahara Desert", species: "Falcon" },
    { id: 5, title: "Ocean Glider", location: "Pacific Ocean", species: "Albatross" },
    { id: 6, title: "Forest Dancer", location: "Boreal Forest", species: "Owl" }
  ]

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Nature's Gallery</h2>
          <p>Capturing the essence of flight across the globe</p>
        </div>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <div className="placeholder-image">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.species}</p>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
