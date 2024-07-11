import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => (
  <ul className={css["image-gallery"]}>
    {items.map(({ id, urls, alt, likes }) => (
      <li key={id}>
        <ImageCard
          url={urls.small}
          alt={alt}
          likes={likes}
          onClick={onImageClick}
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
