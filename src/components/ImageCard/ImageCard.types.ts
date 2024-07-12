export interface ImageCardProps {
  bigUrl: string;
  url: string;
  alt: string;
  likes: number | null;
  onClick: (bigUrl: string) => void;
}
