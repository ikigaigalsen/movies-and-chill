import React from "react";
import ReactCarousel from "@brainhubeu/react-carousel";
import { IMoviesList } from "../../store/types";
import { IMAGE_URL } from "../../constants/api";

import styles from "./index.module.scss";

interface ICarouselProps {
  treadingMovies: IMoviesList;
}

const Carousel: React.FC<ICarouselProps> = ({ treadingMovies }) => {
  return (
    <ReactCarousel autoPlay={5000} dots>
      {treadingMovies.results?.slice(0, 5).map(movie => (
        <div key={movie.id} className={styles.root}>
          <img
            src={`${IMAGE_URL}/w1280/${movie.backdrop_path}`}
            alt={movie.title}
            className={styles.image}
          />
        </div>
      ))}
    </ReactCarousel>
  );
};

export default Carousel;
