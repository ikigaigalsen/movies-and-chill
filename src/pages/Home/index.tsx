import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TDispatch, TRootState } from "../../store";

import styles from "./index.module.scss";
import MovieWidget from "../../components/MovieWidget";
import { ITreading } from "../../store/types";

const Home: React.FC = () => {
  const treadingMovies = useSelector<TRootState, ITreading>(
    state => state.movies.treading
  );

  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {
    dispatch.movies.fetchTrendingMovies();
  }, [dispatch.movies]);

  return (
    <div className={styles.moviesContainer}>
      <div className={styles.title}>Treading Movies</div>

      <div className={styles.body}>
        {treadingMovies.results.map(movie => (
          <MovieWidget key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
