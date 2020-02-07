export interface IMovie {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface ITreadingMovies {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMovie[];
}

interface IPersonKnownFor {
  original_name: string;
  vote_count: number;
  poster_path: string;
  media_type: string;
  name: string;
  vote_average: number;
  id: number;
  first_air_date: string;
  original_language: string;
  genre_ids: number[];
  backdrop_path: string;
  overview: string;
  origin_country: string[];
}
export interface IPerson {
  name: string;
  popularity: number;
  known_for_department: "Acting";
  gender: number;
  id: number;
  profile_path: null | string;
  adult: boolean;
  known_for: IPersonKnownFor[];
}

export interface ITreadingPeople {
  page: 1;
  total_results: 10000;
  total_pages: 500;
  results: IPerson[];
}
