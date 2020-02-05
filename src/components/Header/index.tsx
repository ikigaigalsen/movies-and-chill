import React from "react";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/actors">Actors</Link>
    </div>
  );
};

export default Header;
