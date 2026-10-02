import React from 'react';

const Header = ({ 
  darkMode, 
  setDarkMode, 
  searchQuery, 
  setSearchQuery, 
  selectedAlbum, 
  setSelectedAlbum,
  totalFound
}) => {
return (
<header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
    
    {/* Logo & Mobile Mode Toggle */}
    <div className="flex items-center justify-between w-full md:w-auto">
    <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 text-xl font-bold">
        📷
        </div>
        <div>
        <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 leading-tight">
            PhotoSphere
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {totalFound} photos loaded
        </p>
        </div>
    </div>

    {/* Dark mode button for mobile viewport */}
    <button
        onClick={() => setDarkMode(!darkMode)}
        className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
        aria-label="Toggle Theme"
    >
        {darkMode ? '☀️' : '🌙'}
    </button>
    </div>

    {/* Search, Filter & Theme Switcher */}
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
    
    {/* Search Box */}
    <div className="relative w-full sm:w-64">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
        🔍
        </span>
        <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title..."
        className="w-full pl-9 pr-8 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
        />
        {searchQuery && (
        <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
        >
            ✕
        </button>
        )}
    </div>

    {/* Album Filter */}
    <div className="w-full sm:w-auto flex items-center gap-2">
        <select
        value={selectedAlbum}
        onChange={(e) => setSelectedAlbum(e.target.value)}
        className="w-full sm:w-auto py-2 px-3.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition"
        >
        <option value="all">All Albums</option>
        <option value="1">Album 1</option>
        <option value="2">Album 2</option>
        <option value="3">Album 3</option>
        </select>

        {/* Desktop Theme Toggle Button */}
        <button
        onClick={() => setDarkMode(!darkMode)}
        className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition text-sm font-semibold whitespace-nowrap"
        >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
    </div>

    </div>

</div>
</div>
</header>
);
};

export default Header;