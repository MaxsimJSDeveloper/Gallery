export interface ImageCardProps {
  url: string;
  alt: string;
  likes: number | null;
  onClick: (url: string) => void;
}
