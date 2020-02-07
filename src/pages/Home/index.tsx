import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TDispatch, TRootState } from "../../store";

import styles from "./index.module.scss";
import MovieWidget from "../../components/MovieWidget";
import { ITreadingMovies, ITreadingPeople } from "../../store/types";
import PersonWidget from "../../components/PersonWidget";

const Home: React.FC = () => {
  const treadingMovies = useSelector<TRootState, ITreadingMovies>(
    state => state.movies.treading
  );
  const treadingPeople = useSelector<TRootState, ITreadingPeople>(
    state => state.people.treading
  );

  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {
    if (treadingMovies.total_results === 0)
      dispatch.movies.fetchTrendingMovies();

    if (treadingPeople.total_results === 0)
      dispatch.people.fetchTrendingPeople();
  }, [dispatch.movies, dispatch.people, treadingMovies, treadingPeople]);

  return (
    <div>
      <div className={styles.moviesContainer}>
        <div className={styles.title}>Treading Movies</div>

        <div className={styles.body}>
          {treadingMovies.results.map(movie => (
            <MovieWidget key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className={styles.moviesContainer}>
        <div className={styles.title}>Treading People</div>

        <div className={styles.body}>
          {treadingPeople.results.map(person => (
            <PersonWidget key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
