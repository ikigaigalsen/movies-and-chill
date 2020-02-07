import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TDispatch, TRootState } from "../../store";

import styles from "./index.module.scss";
import MovieWidget from "../../components/MovieWidget";
import { IMoviesList, ITreadingPeople } from "../../store/types";
import PersonWidget from "../../components/PersonWidget";
import WidgetContainer from "../../components/WidgetContainer";

const Home: React.FC = () => {
  const treadingMovies = useSelector<TRootState, IMoviesList>(
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
      <WidgetContainer title={"Treading Movies"}>
        {treadingMovies.results.map(movie => (
          <MovieWidget key={movie.id} movie={movie} />
        ))}
      </WidgetContainer>

      <WidgetContainer title={"Treading People"}>
        {treadingPeople.results.map(person => (
          <PersonWidget key={person.id} person={person} />
        ))}
      </WidgetContainer>
    </div>
  );
};

export default Home;
