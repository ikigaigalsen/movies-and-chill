import React from "react";

import styles from "./index.module.scss";
import { IMAGE_URL } from "../../constants/api";
import { IMovie } from "../../store/types";

interface IMovieWidgetProps {
  key: string | number;
  movie: IMovie;
}

const MovieWidget: React.FC<IMovieWidgetProps> = ({ movie }) => {
  return (
    <div className={styles.movieBox}>
      <div className={styles.movieText}>{movie.title}</div>
      <img
        className={styles.poster}
        src={`${IMAGE_URL}/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieWidget;
