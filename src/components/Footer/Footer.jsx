import React from 'react';

const Footer = ({ totalCount }) => {
return (
    <footer className="w-full mt-auto bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
    
<div>
    <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">
        📸 PhotoSphere
    </span>
    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
        Live display of the first 100 curated photos from JSONPlaceholder API.
    </p>
</div>

<div className="flex items-center gap-3">
 <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700">
        Showing: <strong className="text-indigo-600 dark:text-indigo-400">{totalCount}</strong> items
    </span>
</div>

    <p className="text-xs text-slate-400 dark:text-slate-500">
    © {new Date().getFullYear()} PhotoSphere. Built with React + Vite + Tailwind CSS.
    </p>

</div>
</div>
</footer>
);
};

export default Footer;