import React from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import debounce from "debounce-promise";
import { api } from "../../store/api";

import styles from "./index.module.scss";
import { IMovie } from "../../store/types";
import { IMAGE_URL } from "../../constants/api";
import { Link } from "react-router-dom";

const Search: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <AsyncSelect
        isClearable
        className="basic-single"
        classNamePrefix="select"
        placeholder="Search for Movies"
        name="search"
        components={{ Option }}
        loadOptions={inputValue => debouncedLoadOptions(inputValue)}
      />
    </div>
  );
};

const loadOptions = (inputValue: string) => getAsyncOptions(inputValue);
const debouncedLoadOptions = debounce(loadOptions, 500, {
  leading: true
});

const getAsyncOptions = async (inputValue: string) => {
  console.log("in here");
  const { data } = await api("/search/movie", { query: inputValue });
  console.log(data);
  return data.results.map((movie: IMovie) => ({
    ...movie,
    value: movie.id,
    label: movie.title
  }));
};

interface IMovieOptions extends IMovie {
  value: number;
  label: string;
}

const Option = (props: any) => {
  console.log(props);
  return (
    <Link to={`/movies/${props.data.id}`}>
      <components.Option {...props}>
        <div className={styles.searchOption}>
          <img
            alt=""
            src={`${IMAGE_URL}/w92/${props.data.poster_path}`}
            className={styles.image}
          />
          <div className={styles.text}>
            <div className={styles.title}>{props.data.title}</div>
            <div className={styles.year}>{props.data.release_date.split('-')[0]}</div>
          </div>
        </div>
      </components.Option>
    </Link>
  );
};

export default Search;
