import React from "react";
import ReactCarousel from "@brainhubeu/react-carousel";
import { IMoviesList } from "../../store/types";
import { IMAGE_URL } from "../../constants/api";

import styles from "./index.module.scss";
import { Link } from "react-router-dom";

interface ICarouselProps {
  treadingMovies: IMoviesList;
}

const Carousel: React.FC<ICarouselProps> = ({ treadingMovies }) => {
  return (
    <ReactCarousel autoPlay={5000} dots>
      {treadingMovies.results?.slice(0, 5).map(movie => (
        <div key={movie.id} className={styles.root}>
          <div className={styles.imageWrap}>
            <img
              src={`${IMAGE_URL}/w1280/${movie.backdrop_path}`}
              alt={movie.title}
              className={styles.image}
            />
          </div>
          <Link to={`/movies/${movie.id}`}>
            <div className={styles.text}>
              <div className={styles.movieTitle}>
                {movie.title} ({movie.release_date.split("-")[0]})
              </div>
              <div className={styles.rating}>Rating: {movie.vote_average}</div>
              <div>{movie.overview}</div>
            </div>
          </Link>
        </div>
      ))}
    </ReactCarousel>
  );
};

export default Carousel;
