export interface GalleryItem {
  _type: string;
  _key?: string;
  asset?: {
    _ref?: string;
    _type?: string;
    url?: string;
    _id?: string;
    mimeType?: string;
    originalFilename?: string;
  };
}

export interface HomepageGalleryItem {
  _id: string;
  title?: string;
  alt?: string;
  mediaType?: "image" | "video";
  photo?: { asset: { _ref: string; _type: string } };
  video?: { asset: { url: string } };
  videoPoster?: { asset: { _ref: string; _type: string } };
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  alt?: string;
  posterUrl?: string;
}

type AttractionProps = {
  mainVideo?: { asset: { url: string; _id: string } };
  mainImage?: { asset: { _ref: string; _type: string } };
  gallery?: GalleryItem[];
  items?: never;
  fallback?: never;
};

type HomepageProps = {
  items: HomepageGalleryItem[];
  fallback?: React.ReactNode;
  mainVideo?: never;
  mainImage?: never;
  gallery?: never;
};

export type AttractionMediaSliderProps = AttractionProps | HomepageProps;
