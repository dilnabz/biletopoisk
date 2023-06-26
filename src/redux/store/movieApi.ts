import { Genre } from "@/app/components/GenreAndCinemaPresentation/GenreAndCinema";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Movie {
    title: string;
    posterUrl: string;
    releaseYear: string;
    description: string;
    genre: Genre;
    id: string;
    rating: number;
    director: string;
    reviewIds: string[];
};

interface Cinema {
    id: string;
    name: string;
    movieIds: string[];
}

interface Review {
    id: string;
    name: string;
    rating: number;
    text: string;
}

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl:"http://localhost:3001/api" }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], void>({ query: () => "movies" }),
        getMovie: builder.query<Movie, string>({ query: (movieId) => `movie?movieId=${movieId}`}),
        getCinemas: builder.query<Cinema[], void>({ query: () => "cinemas" }),
        getMoviesInCinema: builder.query<Movie[], void>({query: (cinemaId) => `movies?cinemaId=${cinemaId}`}),
        getReviews: builder.query<Review[], void>({query: () => "reviews"}),
        getMovieReview: builder.query<Review[], string>({query: (movieId) => `reviews?movieId=${movieId}`})
    })
})

export const { useGetMoviesQuery, useGetMovieQuery, useGetCinemasQuery, useGetMoviesInCinemaQuery, useGetReviewsQuery, useGetMovieReviewQuery} = movieApi
