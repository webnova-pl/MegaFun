"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import type { AttractionMediaSliderProps, MediaItem } from "./types";
import { safeImageUrl, isGalleryVideo, deduplicateItems } from "./utils";
import ThumbnailSlider from "./ThumbnailSlider";
import ZoomHint from "./ZoomHint";

export type { HomepageGalleryItem } from "./types";

export default function AttractionMediaSlider(
  props: AttractionMediaSliderProps,
) {
  const mediaItems: MediaItem[] = useMemo(() => {
    if (props.items !== undefined) {
      const raw = props.items.flatMap((item, i): MediaItem[] => {
        if (item.mediaType === "video" && item.video?.asset?.url) {
          return [
            {
              id: `hp-vid-${item._id}-${i}`,
              type: "video",
              url: item.video.asset.url,
              alt: item.alt,
              posterUrl: safeImageUrl(item.videoPoster) ?? undefined,
            },
          ];
        }
        if (item.photo) {
          const url = safeImageUrl(item.photo);
          if (url)
            return [{ id: `hp-img-${item._id}-${i}`, type: "image", url, alt: item.alt }];
        }
        return [];
      });
      return deduplicateItems(raw);
    }

    const result: MediaItem[] = [];

    if (props.mainVideo?.asset?.url) {
      result.push({
        id: `main-vid-${props.mainVideo.asset._id}`,
        type: "video",
        url: props.mainVideo.asset.url,
        posterUrl: safeImageUrl(props.mainImage) ?? undefined,
      });
    }

    if (props.mainImage && !props.mainVideo) {
      const url = safeImageUrl(props.mainImage);
      if (url) result.push({ id: "main-image", type: "image", url });
    }

    props.gallery?.forEach((item, i) => {
      if (!item.asset) return;
      if (isGalleryVideo(item)) {
        const videoUrl = item.asset.url;
        if (videoUrl) {
          result.push({
            id: `gal-vid-${item.asset._id ?? item._key ?? i}-${i}`,
            type: "video",
            url: videoUrl,
          });
        }
      } else {
        const url =
          item.asset.url ??
          (item.asset._ref
            ? safeImageUrl(item as unknown as { asset: { _ref: string; _type: string } })
            : null);
        if (url) {
          result.push({
            id: `gal-img-${item.asset._id ?? item._key ?? i}-${i}`,
            type: "image",
            url,
          });
        }
      }
    });

    return deduplicateItems(result);
  }, [props]);

  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoplayEnabled = useRef(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const total = mediaItems.length;
  const isHomepageMode = props.items !== undefined;

  const lightboxSlides = useMemo(
    () =>
      mediaItems.map((item) =>
        item.type === "video"
          ? {
              type: "video" as const,
              poster: item.posterUrl,
              sources: [{ src: item.url, type: "video/mp4" }],
            }
          : { src: item.url, alt: item.alt || "Galeria Mega Fun" },
      ),
    [mediaItems],
  );

  const stopAutoplay = useCallback(() => {
    autoplayEnabled.current = false;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (total <= 1 || !autoplayEnabled.current) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);
  }, [isHomepageMode, total]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === active) video.play().catch(() => {});
      else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [active, isHomepageMode]);

  if (total === 0) {
    if (isHomepageMode && props.fallback) return <>{props.fallback}</>;
    return null;
  }

  const goTo = (index: number) => {
    stopAutoplay();
    setActive(index);
  };
  const prev = () => goTo((active - 1 + total) % total);
  const next = () => goTo((active + 1) % total);
  const openLightbox = (index: number) => {
    stopAutoplay();
    setLightboxIndex(index);
  };

  const lightbox = (
    <Lightbox
      open={lightboxIndex >= 0}
      index={lightboxIndex}
      close={() => setLightboxIndex(-1)}
      slides={lightboxSlides}
      plugins={[Video, Zoom]}
      video={{ autoPlay: true, controls: true }}
      on={{ view: ({ index }) => setActive(index) }}
    />
  );

  const VideoSlide = ({ item, index }: { item: MediaItem; index: number }) => (
    <>
      <video
        ref={(el) => { videoRefs.current[index] = el; }}
        className="h-full w-full object-cover"
        poster={item.posterUrl}
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={item.url} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-red-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
        Video
      </div>
    </>
  );

  if (isHomepageMode) {
    return (
      <>
        {lightbox}
        <div className="w-full">
          <div className="group relative h-full min-h-[480px] w-full overflow-hidden rounded-3xl shadow-2xl drop-shadow-2xl">
            {mediaItems.map((item, index) => {
              const isActive = index === active;
              return (
                <div
                  key={item.id}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    zIndex: isActive ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  aria-hidden={!isActive}
                >
                  <div
                    className="relative h-full w-full cursor-zoom-in"
                    onClick={() => openLightbox(index)}
                  >
                    {item.type === "video" ? (
                      <VideoSlide item={item} index={index} />
                    ) : (
                      <img
                        src={item.url}
                        alt={item.alt || "Galeria Mega Fun"}
                        className="h-full w-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    )}
                    <div className="pointer-events-none absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                      Kliknij aby powiększyć
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              );
            })}

            {total > 1 && (
              <>
                <button onClick={prev} aria-label="Poprzednie" className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg opacity-0 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:opacity-100">
                  <svg className="h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button onClick={next} aria-label="Następne" className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg opacity-0 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:opacity-100">
                  <svg className="h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute right-4 top-4 z-20 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {active + 1} / {total}
                </div>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="mt-3">
              <ThumbnailSlider mediaItems={mediaItems} active={active} goTo={goTo} compact />
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      {lightbox}
      <div className="attraction-media-slider relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-900">
          {mediaItems.map((item, index) => (
            <div
              key={item.id}
              className="absolute inset-0 outline-none"
              style={{
                opacity: index === active ? 1 : 0,
                zIndex: index === active ? 10 : 0,
                pointerEvents: index === active ? "auto" : "none",
                transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div
                className="relative h-full w-full cursor-zoom-in"
                onClick={() => openLightbox(index)}
              >
                {item.type === "video" ? (
                  <VideoSlide item={item} index={index} />
                ) : (
                  <img
                    src={item.url}
                    alt={item.alt || "Galeria Mega Fun"}
                    className="h-full w-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                )}
                <ZoomHint />
              </div>
            </div>
          ))}

          {total > 1 && (
            <>
              <button onClick={prev} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95">
                <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={next} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95">
                <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute right-6 top-6 z-20 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                {active + 1} / {total}
              </div>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="mt-3">
            <ThumbnailSlider mediaItems={mediaItems} active={active} goTo={goTo} />
          </div>
        )}
      </div>
    </>
  );
}
