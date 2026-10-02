# 📸 PhotoSphere — React Photo Gallery Application

A responsive, high-performance Photo Gallery web application built with **React**, **Vite**, and **Tailwind CSS (v4)**. The application fetches image records using the native JavaScript `fetch()` API from JSONPlaceholder and presents the first 100 photos in a clean, modern card grid.

---

## 🚀 Features

- **Native Fetch API Integration**: Consumes API data directly using native `fetch()` within `useEffect` without external HTTP clients (no Axios).
- **First 100 Photos Display**: Automatically slices and renders the first 100 items from the endpoint.
- **Component-Driven Architecture**: Fully modular design divided into distinct components:
  - `Header` (with live controls & counters)
  - `PhotoGallery` (grid container with state handling)
  - `PhotoCard` (individual card display)
  - `Footer` (summary metadata)
- **Detailed Card Metadata**: Displays Photo Thumbnail, Photo ID, Album ID, and Title on every card.
- **Responsive Layout**: Fluid breakpoints covering Mobile, Tablet, Laptop, and Ultra-wide Desktop displays.
- **Image Fallback Handling**: Automatically switches to an auxiliary placeholder (`Picsum`) if a remote image fails to load.
- **Bonus Capabilities**:
  - 🔍 **Live Search**: Instant case-insensitive filtering by photo title.
  - 🗂️ **Album Filter**: Filter items by specific album numbers or display all.
  - 🌙 **Dark & Light Mode**: Seamless theme switching with localStorage persistence, optimized for Tailwind v4.
  - 🪟 **Details Modal**: High-resolution image preview with full metadata overlay upon clicking "View Details".

---

## 🛠️ Tech Stack

- **Framework**: React 18 / 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **API**: [JSONPlaceholder Photos Endpoint](https://jsonplaceholder.typicode.com/photos)

---

## 📁 Project Structure

```text
my-photo-gallery/
├── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation bar, search, filter, and theme toggle
│   │   ├── PhotoGallery.jsx   # Grid wrapper, loading & error states
│   │   ├── PhotoCard.jsx      # Individual card component with badges
│   │   └── Footer.jsx         # Footer showing active count & links
│   ├── App.jsx                # Main application state & API fetch logic
│   ├── App.css                # Tailwind import & custom dark-mode variant
│   └── main.jsx               # React DOM root entry
├── package.json
├── vite.config.js             # Vite configuration with Tailwind CSS plugin
└── README.md