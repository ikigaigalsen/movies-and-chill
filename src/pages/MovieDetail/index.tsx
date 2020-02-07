import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import styles from "./index.module.scss";
import { api } from "../../store/api";
import {
  IMovieFull,
  IUserReviewsResponse,
  IMoviesList
} from "../../store/types";
import { IMAGE_URL } from "../../constants/api";
import WidgetContainer from "../../components/WidgetContainer";
import MovieWidget from "../../components/MovieWidget";

const MovieDetails: React.FC<RouteComponentProps<{
  movieId: string;
}>> = ({ match: { params } }) => {
  const [details, setDetails] = useState<null | IMovieFull>(null);
  const [reviews, setReviews] = useState<null | IUserReviewsResponse>();
  const [similar, setSimilar] = useState<null | IMoviesList>();

  useEffect(() => {
    const fetchData = async () => {
      // ? Empty the old movie data
      setDetails(null);
      const { data: details } = await api(`movie/${params.movieId}`);
      setDetails(details);

      setReviews(null);
      const { data: reviews } = await api(`movie/${params.movieId}/reviews`);
      setReviews(reviews);

      setSimilar(null);
      const { data: similar } = await api(`movie/${params.movieId}/similar`);
      setSimilar(similar);
    };

    fetchData();
  }, [params.movieId]);

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
            src={`${IMAGE_URL}/w500/${details.poster_path}`}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.title}>{details.title}</div>
          <div className={styles.subtitle}>{details.tagline}</div>

          <div className={styles.subtitle}>
            <span>Release Year:</span> {details.release_date.split("-")[0]}
          </div>
          <div className={styles.subtitle}>
            <span>Genres:</span> {details.genres.map(x => x.name).join(", ")}
          </div>
          <div className={styles.subtitle}>
            <span>Overview:</span> {details.overview}
          </div>
          <div className={styles.subtitle}>
            <span>Rating:</span> {details.vote_average}
          </div>
          <div className={styles.subtitle}>
            <span>Status:</span> {details.status}
          </div>
        </div>
      </div>
      {reviews && (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>User Reviews</div>
          {reviews.results.length !== 0 ? (
            reviews.results?.map(review => (
              <div key={review.id} className={styles.reviewBox}>
                <div className={styles.reviewAuthor}>{review.author}</div>
                <div className={styles.reviewContent}>{review.content}</div>
              </div>
            ))
          ) : (
            <div className={styles.reviewBox}>No user reviews</div>
          )}
        </div>
      )}
      <WidgetContainer title={"Similar Movies"}>
        {similar?.results.map(movie => (
          <MovieWidget key={movie.id} movie={movie} />
        ))}
      </WidgetContainer>
    </div>
  );
};

export default MovieDetails;
