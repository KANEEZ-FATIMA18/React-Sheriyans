import { useState, useEffect } from "react";
import "./App.css";

// Icon Components
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const NoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
  </svg>
);

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Initialize state with localStorage data immediately
  const getInitialNotes = () => {
    const savedNotes = localStorage.getItem("notes-2026") || localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  };
  
  const [allNotes, setAllNotes] = useState(getInitialNotes);

  // Save notes to localStorage only when notes actually change
  useEffect(() => {
    localStorage.setItem("notes-2026", JSON.stringify(allNotes));
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      details: details.trim(),
      createdAt: new Date().toISOString(),
      color: getRandomColor(),
    };

    setAllNotes([newNote, ...allNotes]);
    setTitle("");
    setDetails("");
  };

  const handleDeleteNote = (id) => {
    setAllNotes(allNotes.filter((note) => note.id !== id));
  };

  const getRandomColor = () => {
    const colors = [
      "coral",
      "violet", 
      "mint",
      "peach",
      "sky",
      "blush"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const filteredNotes = allNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getColorClass = (color) => {
    const colorMap = {
      coral: "note-coral",
      violet: "note-violet",
      mint: "note-mint",
      peach: "note-peach",
      sky: "note-sky",
      blush: "note-blush",
    };
    return colorMap[color] || "note-coral";
  };

  return (
    <div className="app-wrapper">
      {/* Decorative Background Elements */}
      <div className="bg-decoration">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="app-container">
        {/* Top Navigation Bar */}
        <nav className="top-nav">
          <div className="nav-content">
            <div className="nav-brand">
              <div className="brand-icon">
                <SparkleIcon />
              </div>
              <span className="brand-name">Notes</span>
            </div>
            
            <div className="nav-actions">
              <div className="search-wrapper">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search your notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-bar"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="main-area">
          <div className="content-max">
            {/* Hero Section with Stats */}
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="title-word">Your</span>
                  <span className="title-word gradient-text">Thoughts</span>
                  <span className="title-word">Deserve</span>
                  <span className="title-word gradient-text">Space</span>
                </h1>
                <p className="hero-subtitle">
                  Capture ideas, organize tasks, and let your creativity flow
                </p>
              </div>
              
              <div className="stats-row">
                <div className="stat-card">
                  <span className="stat-value">{allNotes.length}</span>
                  <span className="stat-label">Total Notes</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">
                    {allNotes.filter(n => {
                      const today = new Date().toDateString();
                      return new Date(n.createdAt).toDateString() === today;
                    }).length}
                  </span>
                  <span className="stat-label">Today</span>
                </div>
                <div className="stat-card">
                  <span className="stat-value">
                    {new Set(allNotes.map(n => n.color)).size}
                  </span>
                  <span className="stat-label">Colors</span>
                </div>
              </div>
            </section>

            {/* Create Note Card - Bento Style */}
            <section className="create-section">
              <div className="create-card">
                <form onSubmit={handleSubmit}>
                  <div className="create-header">
                    <div className="create-icon-wrapper">
                      <div className="create-icon-bg">
                        <PlusIcon />
                      </div>
                    </div>
                    <div className="create-text">
                      <h2 className="create-title">New Note</h2>
                      <p className="create-subtitle">Add your thoughts below</p>
                    </div>
                  </div>

                  <div className="create-body">
                    <input
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="input-title"
                      autoComplete="off"
                    />
                    <textarea
                      placeholder="What's on your mind?"
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="input-details"
                    />
                  </div>

                  <div className="create-footer">
                    <div className="color-hints">
                      <span className="hint-dot hint-coral"></span>
                      <span className="hint-dot hint-violet"></span>
                      <span className="hint-dot hint-mint"></span>
                      <span className="hint-dot hint-peach"></span>
                      <span className="hint-dot hint-sky"></span>
                      <span className="hint-dot hint-blush"></span>
                    </div>
                    <button type="submit" className="btn-create" disabled={!title.trim() || !details.trim()}>
                      <PlusIcon />
                      <span>Create Note</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>

            {/* Notes Display */}
            <section className="notes-section">
              <div className="notes-header">
                <h3 className="notes-title">
                  <NoteIcon />
                  <span>{searchQuery ? "Search Results" : "All Notes"}</span>
                </h3>
                <span className="notes-count">{filteredNotes.length} notes</span>
              </div>

              {filteredNotes.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-illustration">
                    <div className="illustration-circle">
                      <NoteIcon />
                    </div>
                  </div>
                  <h3 className="empty-title">
                    {searchQuery ? "No matches found" : "Start your collection"}
                  </h3>
                  <p className="empty-description">
                    {searchQuery 
                      ? "Try a different search term" 
                      : "Create your first note above and watch it appear here"}
                  </p>
                </div>
              ) : (
                <div className="notes-display">
                  {filteredNotes.map((note, index) => (
                    <article
                      key={note.id}
                      className={`note-item ${getColorClass(note.color)}`}
                      style={{ animationDelay: `${index * 0.04}s` }}
                    >
                      <div className="note-content">
                        <div className="note-top">
                          <h4 className="note-heading">{note.title}</h4>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="btn-delete"
                            aria-label="Delete note"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                        <p className="note-body">{note.details}</p>
                        <div className="note-meta">
                          <span className="note-time">{formatDate(note.createdAt)}</span>
                          <span className="note-color-dot"></span>
                        </div>
                      </div>
                      <div className="note-accent"></div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
