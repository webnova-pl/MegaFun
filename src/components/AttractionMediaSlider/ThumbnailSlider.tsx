"use client";

import { useRef, useEffect } from "react";
import type { MediaItem } from "./types";

interface ThumbnailSliderProps {
  mediaItems: MediaItem[];
  active: number;
  goTo: (i: number) => void;
  compact?: boolean;
}

export default function ThumbnailSlider({
  mediaItems,
  active,
  goTo,
  compact = false,
}: ThumbnailSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbHeight = compact ? 80 : 96;
  const thumbWidth = Math.round(thumbHeight * (16 / 9));

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const thumb = container.children[active] as HTMLElement | undefined;
    if (!thumb) return;
    const left =
      thumb.offsetLeft - container.offsetWidth / 2 + thumb.offsetWidth / 2;
    container.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 overflow-x-auto px-1 py-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      {mediaItems.map((item, index) => {
        const isActive = active === index;
        return (
          <button
            key={item.id}
            onClick={() => goTo(index)}
            className="relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200"
            style={{
              width: thumbWidth,
              height: thumbHeight,
              outline: isActive
                ? "3px solid var(--color-primaryc, #e11d48)"
                : "2px solid transparent",
              outlineOffset: "2px",
              opacity: isActive ? 1 : 0.55,
            }}
          >
            {item.type === "video" ? (
              <div className="relative h-full w-full bg-gray-900">
                {item.posterUrl ? (
                  <img
                    src={item.posterUrl}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    className="pointer-events-none h-full w-full object-cover"
                    muted
                    preload="metadata"
                  >
                    <source src={`${item.url}#t=0.5`} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="rounded-full bg-white/90 p-1">
                    <svg
                      className="h-3 w-3 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={item.url}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
