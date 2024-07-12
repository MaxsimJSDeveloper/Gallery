import { Audio } from "react-loader-spinner";
import React from "react";

import css from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={css.wrap}>
    <Audio color="#00BFFF" height={100} width={100} />
  </div>
);

export default Loader;
