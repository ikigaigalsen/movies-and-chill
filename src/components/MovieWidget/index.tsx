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
      <div className={styles.movieTitle}>{movie.title}</div>
      <div className={styles.movieYear}>{movie.release_date.split('-')[0]}</div>
      <div className={styles.movieRating}>{movie.vote_average}</div>
      <img
        className={styles.poster}
        src={`${IMAGE_URL}/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieWidget;
