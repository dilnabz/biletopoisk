import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Genre } from "@/app/components/GenreAndCinemaPresentation/GenreAndCinema";

interface FilterState {
    movieTitleQuery: string;
    genreId: Genre | null;
    cinemaId: string | null;
}

const initialState: FilterState = {
    movieTitleQuery: "",
    genreId: null,
    cinemaId: null
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setMovieTitleQuery(state, action) {
            state.movieTitleQuery = action.payload;
        },
        setGenreId(state, action) {
            state.genreId = action.payload;
        },
        setCinemaId(state, action) {
            state.cinemaId = action.payload;
        },
    }
})

// filterSlice.actions.setMovieTitleQuery("qwe");

export const { setMovieTitleQuery, setGenreId, setCinemaId } = filterSlice.actions;

// export const selectFilteredMovies = ({ movies, filter }: RootState) =>
//   movies.filter(movie => movie.title.toLowerCase().startsWith(filter.movieTitleQuery.toLowerCase()));

export const selectMovieTitleQuery = (state: RootState) => state.filter.movieTitleQuery;
export const selectGenreId = (state: RootState) => state.filter.genreId;
export const selectCinemaId = (state: RootState) => state.filter.cinemaId;
