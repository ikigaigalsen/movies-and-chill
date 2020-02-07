import React, { useEffect } from "react";
import WidgetContainer from "../../components/WidgetContainer";
import { useSelector, useDispatch } from "react-redux";
import { TRootState, TDispatch } from "../../store";
import { IMoviesList } from "../../store/types";
import MovieWidget from "../../components/MovieWidget";

const Movies: React.FC = () => {
  const treadingMovies = useSelector<TRootState, IMoviesList>(
    state => state.movies.treading
  );

  const nowPlayingMovies = useSelector<TRootState, IMoviesList>(
    state => state.movies.nowPlaying
  );

  const upComingMovies = useSelector<TRootState, IMoviesList>(
    state => state.movies.upComing
  );

  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {
    if (treadingMovies.total_results === 0)
      dispatch.movies.fetchTrendingMovies();

    if (nowPlayingMovies.total_results === 0)
      dispatch.movies.fetchNowPlayingMovies();

    if (upComingMovies.total_results === 0)
      dispatch.movies.fetchUpComingMovies();
  }, [dispatch.movies, treadingMovies, nowPlayingMovies, upComingMovies]);

  return (
    <div>
      <WidgetContainer title={"Treading Movies"}>
        {treadingMovies.results.map(movie => (
          <MovieWidget key={movie.id} movie={movie} />
        ))}
      </WidgetContainer>

      <WidgetContainer title={"Now Playing"}>
        {nowPlayingMovies.results.map(movie => (
          <MovieWidget key={movie.id} movie={movie} />
        ))}
      </WidgetContainer>

      <WidgetContainer title={"Upcoming Movies"}>
        {upComingMovies.results.map(movie => (
          <MovieWidget key={movie.id} movie={movie} />
        ))}
      </WidgetContainer>
    </div>
  );
};

export default Movies;
