import { urlForImage } from "@/lib/imageUrlBuilder";
import type { GalleryItem, MediaItem } from "./types";

export function safeImageUrl(
  ref: { asset: { _ref: string; _type: string } } | undefined,
  width = 900,
  height = 600,
): string | null {
  if (!ref) return null;
  try {
    return urlForImage(ref).width(width).height(height).fit("crop").url();
  } catch {
    return null;
  }
}

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".avi", ".m4v", ".ogv"];

export function isGalleryVideo(item: GalleryItem): boolean {
  if (item._type === "file") return true;
  if (item.asset?.mimeType?.startsWith("video/")) return true;
  if (item.asset?.originalFilename) {
    const lower = item.asset.originalFilename.toLowerCase();
    if (VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext))) return true;
  }
  return false;
}

export function deduplicateItems(items: MediaItem[]): MediaItem[] {
  const seen = new Set<string>();
  return items
    .filter((item) => {
      if (seen.has(item.url)) return false;
      seen.add(item.url);
      return true;
    })
    .map((item, i) => ({ ...item, id: `${item.id}--${i}` }));
}
