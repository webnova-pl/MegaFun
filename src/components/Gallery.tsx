"use client";
// app/galeria/GalleryClient.tsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { urlFor } from "@/lib/sanity";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GalleryImage {
  _id: string;
  title?: string;
  alt?: string;
  description?: string;
  category?: string;
  mediaType?: "image" | "video";
  photo?: { asset: { _ref: string; _type: string } };
  video?: { asset: { url: string } };
  videoPoster?: { asset: { _ref: string; _type: string } };
}

type GalleryClientProps = {
  images: GalleryImage[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getMediaType(item: GalleryImage): "image" | "video" {
  if (item.mediaType === "video") return "video";
  if (item.video?.asset?.url) return "video";
  return "image";
}

function getImageUrl(image: GalleryImage): string {
  try {
    if (!image.photo) return "/placeholder-image.jpg";
    return urlFor(image.photo).url();
  } catch (error) {
    console.error("Błąd podczas generowania URL obrazu:", error);
    return "/placeholder-image.jpg";
  }
}

function getPosterUrl(image: GalleryImage): string | undefined {
  try {
    if (image.videoPoster) return urlFor(image.videoPoster).url();
    if (image.photo) return urlFor(image.photo).url();
    return undefined;
  } catch {
    return undefined;
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("wszystkie");
  const [mediaFilter, setMediaFilter] = useState<"all" | "image" | "video">("all");
  const [isLoading, setIsLoading] = useState(true);
  const [layout, setLayout] = useState<"grid" | "masonry">("masonry");
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  const validImages = images.filter(
    (image) => image && (image.photo || (image.video?.asset?.url))
  );

  // Extract unique categories
  const categories = [
    "wszystkie",
    ...new Set(validImages.map((img) => img.category || "").filter(Boolean)),
  ];

  // Filter by category and media type
  const filteredImages = validImages.filter((img) => {
    const categoryMatch =
      selectedCategory === "wszystkie" || img.category === selectedCategory;
    const mediaMatch =
      mediaFilter === "all" || getMediaType(img) === mediaFilter;
    return categoryMatch && mediaMatch;
  });

  // Check if there are any videos in the gallery
  const hasVideos = validImages.some((img) => getMediaType(img) === "video");

  // Build lightbox slides from filtered images
  const lightboxSlides = filteredImages.map((item) => {
    if (getMediaType(item) === "video") {
      return {
        type: "video" as const,
        poster: getPosterUrl(item),
        sources: [{ src: item.video!.asset.url, type: "video/mp4" }],
      };
    }
    return {
      src: getImageUrl(item),
      alt: item.alt || item.title || "Galeria",
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  // Pause all videos when lightbox opens
  useEffect(() => {
    if (lightboxIndex >= 0) {
      videoRefs.current.forEach((video) => {
        video.pause();
      });
    }
  }, [lightboxIndex]);

  const handleVideoRef = useCallback((id: string, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(id, el);
    } else {
      videoRefs.current.delete(id);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-20">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full border-4 border-t-transparent border-primaryc animate-spin" />
          <p className="mt-4 text-gray-600">Ładowanie galerii...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      {/* ── Lightbox (images + videos) ── */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
        plugins={[Video, Zoom]}
        video={{ autoPlay: true, controls: true }}
      />

      {/* ── Filters & Layout Toggle ── */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Category filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
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

          {/* Media type filter */}
          {hasVideos && (
            <div className="flex gap-2">
              <button
                onClick={() => setMediaFilter("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  mediaFilter === "all"
                    ? "bg-primaryc text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Wszystko
              </button>
              <button
                onClick={() => setMediaFilter("image")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1 ${
                  mediaFilter === "image"
                    ? "bg-primaryc text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2" />
                  <polyline points="21 15 16 10 5 21" strokeWidth="2" />
                </svg>
                Zdjęcia
              </button>
              <button
                onClick={() => setMediaFilter("video")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1 ${
                  mediaFilter === "video"
                    ? "bg-primaryc text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Wideo
              </button>
            </div>
          )}
        </div>

        {/* Layout toggle */}
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

      {/* ── Gallery Grid ── */}
      <div
        className={
          layout === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            : "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6"
        }
      >
        {filteredImages.map((image, index) => {
          const isVideo = getMediaType(image) === "video";
          const imageUrl = getImageUrl(image);
          const posterUrl = getPosterUrl(image);

          return (
            <div
              key={image._id || index}
              className={`group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                layout === "masonry" ? "mb-6 break-inside-avoid" : ""
              }`}
            >
              <div
                className={`relative cursor-pointer overflow-hidden ${
                  layout === "grid" ? "h-64 w-full" : ""
                }`}
                onClick={() => setLightboxIndex(index)}
              >
                {isVideo ? (
                  /* ── Video Card ── */
                  <div className="relative h-full w-full bg-gray-900">
                    {layout === "grid" ? (
                      /* Grid: fixed-height video thumbnail */
                      <>
                        {posterUrl ? (
                          <Image
                            src={posterUrl}
                            alt={image.alt || image.title || "Miniatura wideo"}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            ref={(el) => handleVideoRef(image._id, el)}
                            className="pointer-events-none h-full w-full object-cover"
                            muted
                            preload="metadata"
                          >
                            <source src={`${image.video!.asset.url}#t=0.5`} type="video/mp4" />
                          </video>
                        )}
                      </>
                    ) : (
                      /* Masonry: natural aspect ratio */
                      <>
                        {posterUrl ? (
                          <img
                            src={posterUrl}
                            alt={image.alt || image.title || "Miniatura wideo"}
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            ref={(el) => handleVideoRef(image._id, el)}
                            className="pointer-events-none w-full h-auto"
                            muted
                            preload="metadata"
                          >
                            <source src={`${image.video!.asset.url}#t=0.5`} type="video/mp4" />
                          </video>
                        )}
                      </>
                    )}

                    {/* Video badge */}
                    <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-red-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                      Video
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white/25 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <svg className="h-8 w-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── Image Card ── */
                  <>
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
                      <img
                        src={imageUrl}
                        alt={image.alt || image.title || "Zdjęcie dmuchańca"}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}

                    {/* Zoom hint on hover */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                      Powiększ
                    </div>
                  </>
                )}

                {/* Title overlay on hover */}
                {image.title && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium text-lg">{image.title}</h3>
                    {image.description && (
                      <p className="text-white/80 text-sm">{image.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Empty State ── */}
      {filteredImages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p className="mt-4">Brak mediów w wybranej kategorii</p>
          <button
            onClick={() => {
              setSelectedCategory("wszystkie");
              setMediaFilter("all");
            }}
            className="mt-2 text-blue-500 hover:underline"
          >
            Pokaż wszystkie media
          </button>
        </div>
      )}

      {/* Fade-in animation */}
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