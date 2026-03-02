import './App.css'

// Sample gallery data
const galleryData = [
  {
    id: 1,
    title: 'Mountain Serenity',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    likes: 234,
  },
  {
    id: 2,
    title: 'Urban Geometry',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    likes: 189,
  },
  {
    id: 3,
    title: 'Ocean Dreams',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
    likes: 312,
  },
  {
    id: 4,
    title: 'Neon Nights',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80',
    likes: 445,
  },
  {
    id: 5,
    title: 'Desert Waves',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
    likes: 278,
  },
  {
    id: 6,
    title: 'Modern Lines',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    likes: 167,
  },
  {
    id: 7,
    title: 'Forest Path',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    likes: 356,
  },
  {
    id: 8,
    title: 'Sky Reflection',
    category: 'City',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    likes: 289,
  },
  {
    id: 9,
    title: 'Abstract Forms',
    category: 'Art',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
    likes: 201,
  },
  {
    id: 10,
    title: 'Coastal Mist',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1439066615861-d1fbced6530b?w=800&q=80',
    likes: 178,
  },
  {
    id: 11,
    title: 'Glass Tower',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e944?w=800&q=80',
    likes: 223,
  },
  {
    id: 12,
    title: 'Color Splash',
    category: 'Art',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80',
    likes: 267,
  },
]

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <div className="logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <span>Gallery</span>
          </div>

          <div className="header-actions">
            <div className="search-container">
              <span className="search-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                className="search-input"
                placeholder="Search images..."
              />
            </div>
          </div>
        </header>

        {/* Filter Section */}
        <section className="filter-section">
          <div className="filter-tabs">
            <button className="filter-tab active">All</button>
            <button className="filter-tab">Nature</button>
            <button className="filter-tab">Architecture</button>
            <button className="filter-tab">City</button>
            <button className="filter-tab">Art</button>
          </div>
        </section>

        {/* Gallery Grid - Bento Layout */}
        <section className="gallery-section">
          <div className="gallery-grid">
            {galleryData.map(image => (
              <div key={image.id} className="gallery-card">
                <img
                  src={image.image}
                  alt={image.title}
                  className="card-image"
                  loading="lazy"
                />

                <div className="card-actions">
                  <button className="action-button" title="Like">
                    <svg width="18" height="18" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  <button className="action-button" title="Share">
                    <svg width="18" height="18" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16 6 12 2 8 6"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                  </button>
                  <button className="action-button" title="More">
                    <svg width="18" height="18" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>

                <div className="card-overlay">
                  <h3 className="card-title">{image.title}</h3>
                  <div className="card-meta">
                    <span className="card-category">{image.category}</span>
                    <span className="card-likes">
                      <svg width="14" height="14" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      {image.likes}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
