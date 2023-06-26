'use client'

import React from "react";
import styles from "./TicketSection.module.css";
import TicketCard from "../TicketCard/TicketCard";
import { useGetCinemasQuery, useGetMoviesQuery } from "@/redux/store/movieApi";
import { useAppSelector} from "../../../redux/store/hooks";
import { selectCinemaId, selectGenreId, selectMovieTitleQuery } from "@/redux/features/filterSlice";


export default function TicketSection() {
    const {data = [], isLoading} = useGetMoviesQuery();
    const { data: cinemaData = [] } = useGetCinemasQuery();
    const movieTitleQuery = useAppSelector(selectMovieTitleQuery);
    const genreId = useAppSelector(selectGenreId);
    const cinemaId = useAppSelector(selectCinemaId);

    if(isLoading){
        return <div>...isLoading</div>
    }

    const filteredCinema = cinemaData.filter(cinema => cinema.id === cinemaId);

    const filteredMovies = data
        .filter(movie => movie.title.toLowerCase().startsWith(movieTitleQuery.toLowerCase()))
        .filter(movie => {
            if (genreId !== null) {
                return movie.genre === genreId
            }
            return true;
        })
        .filter(movie => {
            if (cinemaId !== null) {
                return filteredCinema[0].movieIds.includes(movie.id);
            }
            return true;
        });

    // console.log(filteredCinema);

    return (
        <div className={styles.ticketSection}>
            {filteredMovies.map(movie => <TicketCard
                key={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                genre={movie.genre}
                id = {movie.id}
            />)}
        </div>
    )
}