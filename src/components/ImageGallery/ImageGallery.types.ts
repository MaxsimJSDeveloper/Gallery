export interface ImageItem {
  id: string;
  alt: string;
  dscr: string | null;
  likes: number | null;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}

export interface ImageGalleryProps {
  items: ImageItem[];
  onImageClick: (id: string) => void;
}
