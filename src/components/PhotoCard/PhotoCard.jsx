import React, { useState } from 'react';

const PhotoCard = ({ photo, onSelectPhoto }) => {
  const [imgError, setImgError] = useState(false);

  // Fallback image using Picsum in case placeholder URL fails to load
  const imageUrl = imgError 
    ? `https://picsum.photos/seed/${photo.id}/400/400`
    : photo.thumbnailUrl;

  return (
<div className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
    
    {/* Image Thumbnail Container */}
    <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
    <img
        src={imageUrl}
        alt={photo.title}
        loading="lazy"
        onError={() => setImgError(true)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    
    {/* Album Badge */}
    <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-lg backdrop-blur-md bg-black/60 text-white shadow-sm">
        Album #{photo.albumId}
    </span>

    {/* Photo ID Badge */}
    <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-lg backdrop-blur-md bg-indigo-600/90 text-white shadow-sm">
        ID: {photo.id}
    </span>
    </div>

    {/* Card Content & Details */}
    <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-4">
    <div>
        <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-1">
        <span>● Item #{photo.id}</span>
        </div>
        <h3 
        className="text-slate-800 dark:text-slate-100 font-semibold text-sm sm:text-base capitalize line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
        title={photo.title}
        >
        {photo.title}
        </h3>
    </div>

    {/* Action Button */}
    <button
        onClick={() => onSelectPhoto(photo)}
        className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group/btn"
    >
        <span>View Details</span>
        <span className="transition-transform group-hover/btn:translate-x-1">→</span>
    </button>
    </div>

</div>
);
};

export default PhotoCard;