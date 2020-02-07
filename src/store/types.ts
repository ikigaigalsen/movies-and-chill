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

export interface IMovieFull {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMoviesList {
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

export interface IPeopleList {
  page: number;
  total_results: number;
  total_pages: number;
  results: IPerson[];
}

export interface IUserReview {
  author: string;
  content: string;
  id: string;
  url: string;
}

export interface IUserReviewsResponse {
  id: number;
  page: number;
  results: IUserReview[];
}
