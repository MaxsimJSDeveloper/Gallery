import { ImageCardProps } from "./ImageCard.types";
import { FC } from "react";
import { FcLike } from "react-icons/fc";

import css from "./ImageCard.module.css";

const ImageCard: FC<ImageCardProps> = ({
  url,
  bigUrl,
  alt,
  likes,
  onClick,
}) => {
  const handleClick = () => {
    onClick(bigUrl);
  };

  return (
    <div className={css["image-card"]} onClick={handleClick}>
      <img className={css["img"]} src={url} alt={alt} />
      <div className={css["info-box"]}>
        <FcLike className={css["like-icon"]} />
        <p className={css["likes"]}>{likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
