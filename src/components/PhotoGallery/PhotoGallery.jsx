import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const PhotoGallery = ({ photos, loading, error, onSelectPhoto }) => {
  // Loading Skeleton State
  if (loading) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-slate-200 dark:border-slate-700 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse text-sm sm:text-base">
          Fetching the first 100 photos from API...
        </p>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="w-full py-16 px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 text-3xl mb-4">
          ⚠️
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
          Unable to Load Photos
        </h3>
        <p className="text-sm text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow-md transition"
        >
          Reload Page
        </button>
      </div>
    );
  }

  // Empty State
  if (photos.length === 0) {
    return (
      <div className="w-full py-20 text-center">
        <div className="text-5xl mb-3">🔍</div>
        <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
          No Photos Found
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Please adjust your search keywords or album filter and try again.
        </p>
      </div>
    );
  }

  // Responsive Grid (1 col on Mobile, 2 on Small tablets, 3 on Medium screens, 4 on Large desktop)
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          onSelectPhoto={onSelectPhoto}
        />
      ))}
    </section>
  );
};

export default PhotoGallery;