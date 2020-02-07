import React from "react";

import styles from "./index.module.scss";
import { IMAGE_URL } from "../../constants/api";
import { IPerson } from "../../store/types";

interface IMovieWidgetProps {
  key: string | number;
  person: IPerson;
}

const PersonWidget: React.FC<IMovieWidgetProps> = ({ person }) => {
  return (
    <div className={styles.movieBox}>
      <div className={styles.movieTitle}>{person.name}</div>
      <div className={styles.movieYear}>
        {person.gender === 1 ? "Female" : "Male"}
      </div>
      <div className={styles.movieRating}>{Math.round(person.popularity)}</div>

      <img
        className={styles.poster}
        src={
          // If profile picture is not available add 
          // a placeholder image
          person.profile_path
            ? `${IMAGE_URL}/w500/${person.profile_path}`
            : "https://imgplaceholder.com/146x220/484848?text=No+Image"
        }
        alt={person.name}
      />
    </div>
  );
};

export default PersonWidget;
