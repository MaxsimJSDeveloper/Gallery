import css from "./Welcome.module.css";
import { TbBrandGooglePhotos } from "react-icons/tb";

const Welcome = () => {
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Welcome to the Gallery!</h1>
      <p className={css.text}>Start your search to see amazing images.</p>
      <TbBrandGooglePhotos className={css.icon} />
    </div>
  );
};

export default Welcome;
