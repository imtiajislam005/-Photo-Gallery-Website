import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Footer from './components/Footer/Footer';

function App() {
const [photos, setPhotos] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Load theme from localStorage
const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('theme') === 'dark';
});

const [searchQuery, setSearchQuery] = useState('');
const [selectedAlbum, setSelectedAlbum] = useState('all');
const [selectedPhoto, setSelectedPhoto] = useState(null);

// Directly apply or remove the 'dark' class on <html>
useEffect(() => {
  const root = document.documentElement;
  if (darkMode) {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [darkMode]);

// Fetch photos
useEffect(() => {
  const fetchPhotos = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
      const data = await response.json();
      setPhotos(data.slice(0, 100));
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch photos.');
    } finally {
      setLoading(false);
    }
  };
  fetchPhotos();
}, []);

const filteredPhotos = photos.filter((photo) => {
  const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesAlbum = selectedAlbum === 'all' || photo.albumId.toString() === selectedAlbum;
  return matchesSearch && matchesAlbum;
});

return (
  <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans">
  <Header
    darkMode={darkMode}
    setDarkMode={setDarkMode}
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
    selectedAlbum={selectedAlbum}
    setSelectedAlbum={setSelectedAlbum}
    totalFound={filteredPhotos.length}
  />

  <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
  <div>
  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
    Gallery Showcase
  </h2>
  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
    Browse photos by album and click cards to preview high-resolution images.
  </p>
  </div>
  <div className="flex items-center gap-2 self-start sm:self-auto">
  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
    Total: {filteredPhotos.length} / 100
  </span>
  </div>
  </div>

  <PhotoGallery
  photos={filteredPhotos}
  loading={loading}
  error={error}
  onSelectPhoto={(photo) => setSelectedPhoto(photo)}
  />
  </main>

  {selectedPhoto && (
  <div 
  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-all"
  onClick={() => setSelectedPhoto(null)}
  >
  <div 
  className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
  onClick={(e) => e.stopPropagation()}
  >
  <button
    onClick={() => setSelectedPhoto(null)}
    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center text-sm transition"
  >
    ✕
  </button>
  <div className="aspect-square sm:aspect-video w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
    <img
      src={selectedPhoto.url || `https://picsum.photos/seed/${selectedPhoto.id}/600/400`}
      alt={selectedPhoto.title}
      onError={(e) => {
        e.target.src = `https://picsum.photos/seed/${selectedPhoto.id}/600/400`;
      }}
      className="w-full h-full object-cover"
    />
  </div>
<div className="p-5 sm:p-6 space-y-3">
  <div className="flex items-center gap-2">
    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
      Album #{selectedPhoto.albumId}
    </span>
    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
      Photo ID: {selectedPhoto.id}
    </span>
  </div>
  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white capitalize">
    {selectedPhoto.title}
  </h3>
  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 break-all pt-2 border-t border-slate-100 dark:border-slate-800">
    <strong>Raw URL:</strong>{' '}
    <a 
      href={selectedPhoto.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-indigo-600 dark:text-indigo-400 hover:underline"
    >
      {selectedPhoto.url}
    </a>
  </p>
</div>
</div>
</div>
    )}

    <Footer totalCount={filteredPhotos.length} />
  </div>
);
}

export default App;