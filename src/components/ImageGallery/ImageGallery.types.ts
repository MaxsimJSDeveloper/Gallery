export interface ImageItem {
  id: string;
  alt: string;
  dscr: string | null;
  likes: number | null;
  urls: {
    small: string;
  };
}

export interface ImageGalleryProps {
  items: ImageItem[];
  onImageClick: (id: string) => void;
}
