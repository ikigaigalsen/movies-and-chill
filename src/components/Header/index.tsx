import React from "react";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h3>Movies and Chill</h3>
      </div>
      <div className={styles.navigation}>
        <Link className={styles.links} to="/">
          Home
        </Link>
        <Link className={styles.links} to="/movies">
          Movies
        </Link>
        <Link className={styles.links} to="/actors">
          Actors
        </Link>
        {
          // TODO add search bar
        }
      </div>
    </div>
  );
};

export default Header;
