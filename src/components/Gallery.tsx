"use client";
// app/galeria/GalleryClient.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { urlFor } from "@/lib/sanity";
import { GalleryImage } from "@/app/galeria/page";

type GalleryClientProps = {
  images: GalleryImage[];
};

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("wszystkie");
  const [isLoading, setIsLoading] = useState(true);
  const [layout, setLayout] = useState<"grid" | "masonry">("masonry");
  
  const validImages = images.filter(image => image && image.photo);
  
  // Extract unique categories from images (if they have categories)
  const categories = ["wszystkie", ...new Set(validImages.map(img => img.category || "").filter(Boolean))];
  
  // Filter images based on selected category
  const filteredImages = selectedCategory === "wszystkie" 
    ? validImages 
    : validImages.filter(img => img.category === selectedCategory);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const getImageUrl = (image: GalleryImage) => {
    try {
      if (!image.photo) return "/placeholder-image.jpg";
      
      return urlFor(image.photo).url();
    } catch (error) {
      console.error("Błąd podczas generowania URL obrazu:", error);
      return "/placeholder-image.jpg";
    }
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full border-4 border-t-transparent border-primaryc animate-spin"></div>
          <p className="mt-4 text-gray-600">Ładowanie galerii...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      {/* Category Filter & Layout Toggle */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="filter-buttons mb-4 sm:mb-0">
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primaryc text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="layout-toggle">
          <div className="flex border rounded-md overflow-hidden">
            <button
              onClick={() => setLayout("grid")}
              className={`px-3 py-2 ${layout === "grid" ? "bg-primaryc text-white" : "bg-gray-100"}`}
              aria-label="Grid layout"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              onClick={() => setLayout("masonry")}
              className={`px-3 py-2 ${layout === "masonry" ? "bg-primaryc text-white" : "bg-gray-100"}`}
              aria-label="Masonry layout"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="9" />
                <rect x="14" y="3" width="7" height="5" />
                <rect x="14" y="12" width="7" height="9" />
                <rect x="3" y="16" width="7" height="5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <PhotoProvider
        maskOpacity={0.8}
        maskClassName="backdrop-blur-sm"
        overlayRender={({ rotate, scale, onRotate, onScale }) => {
          return (
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 text-white">
              <button onClick={() => onRotate(rotate + 90)} className="p-2 bg-black/20 rounded-full backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </button>
              <button onClick={() => onScale(scale + 0.3)} className="p-2 bg-black/20 rounded-full backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </button>
              <button onClick={() => onScale(scale - 0.3)} className="p-2 bg-black/20 rounded-full backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </button>
            </div>
          );
        }}
      >
        <div 
          className={`
            ${layout === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" 
              : "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6"
            }
          `}
        >
          {filteredImages.map((image, index) => {
            const imageUrl = getImageUrl(image);
            
            return (
              <div 
                key={image._id || index}
                className={`
                  group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 
                  ${layout === "masonry" ? "mb-6 break-inside-avoid" : ""}
                `}
              >
                <PhotoView src={imageUrl}>
                  <div 
                    className={`
                      relative cursor-zoom-in overflow-hidden
                      ${layout === "grid" ? "h-64 w-full" : ""}
                    `}
                  >
                    {layout === "grid" ? (
                      <Image
                        src={imageUrl}
                        alt={image.alt || image.title || "Zdjęcie dmuchańca"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      // For masonry layout, use a regular img tag to maintain aspect ratio
                      <img
                        src={imageUrl}
                        alt={image.alt || image.title || "Zdjęcie dmuchańca"}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}
                    
                    {image.title && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-medium text-lg">{image.title}</h3>
                        {image.description && (
                          <p className="text-white/80 text-sm">{image.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                </PhotoView>
              </div>
            );
          })}
        </div>
      </PhotoProvider>

      {/* Empty state */}
      {filteredImages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <p className="mt-4">Brak zdjęć w wybranej kategorii</p>
          <button 
            onClick={() => setSelectedCategory("wszystkie")}
            className="mt-2 text-blue-500 hover:underline"
          >
            Pokaż wszystkie zdjęcia
          </button>
        </div>
      )}

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .gallery-container {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}