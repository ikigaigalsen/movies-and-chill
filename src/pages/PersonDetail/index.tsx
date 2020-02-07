import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import WidgetContainer from "../../components/WidgetContainer";

import styles from "./index.module.scss";
import { IPersonFull, IMoviesList } from "../../store/types";
import { api } from "../../store/api";
import { IMAGE_URL } from "../../constants/api";
import MovieWidget from "../../components/MovieWidget";

const PersonDetail: React.FC<RouteComponentProps<{ personId: string }>> = ({
  match: { params }
}) => {
  const [details, setDetails] = useState<null | IPersonFull>(null);
  const [movies, setMovies] = useState<null | IMoviesList>(null);

  useEffect(() => {
    const fetchData = async () => {
      // ? Empty the old person data
      setDetails(null);
      const { data: details } = await api(`person/${params.personId}`);
      setDetails(details);

      setMovies(null);
      const { data: movies } = await api(
        `person/${params.personId}/movie_credits`
      );
      setMovies(movies);

      // setSimilar(null);
      // const { data: similar } = await api(`movie/${params.movieId}/similar`);
      // setSimilar(similar);
    };

    fetchData();
  }, [params.personId]);

  if (details === null) {
    return <div className={styles.root}>Loading</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.firstRow}>
        <div className={styles.imageCon}>
          <img
            className={styles.image}
            alt={""}
            src={`${IMAGE_URL}/w500/${details.profile_path}`}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.title}>{details.name}</div>
          <div className={styles.subtitle}>{details.biography}</div>

          <div className={styles.subtitle}>
            <span>Birthday:</span> {details.birthday}
          </div>
          <div className={styles.subtitle}>
            <span>Place of Birth:</span> {details.place_of_birth}
          </div>
          <div className={styles.subtitle}>
            <span>Known for:</span> {details.known_for_department}
          </div>
        </div>
      </div>
      <WidgetContainer title={"Movies"}>
        {movies?.cast?.map(movie => (
          <MovieWidget key={movie.id} movie={movie} />
        ))}
      </WidgetContainer>
    </div>
  );
};

export default PersonDetail;
