'use client'
import React, {useState, useRef} from "react";
import { createPortal } from "react-dom";
import styles from "./FilterSection.module.css";
import { useAppSelector, useAppDispatch} from "../../../redux/store/hooks";
import { useGetCinemasQuery, useGetMoviesQuery} from "@/redux/store/movieApi";
import { selectGenreId, selectMovieTitleQuery, setMovieTitleQuery, setGenreId, selectCinemaId, setCinemaId } from "@/redux/features/filterSlice";
import { genres, Genre } from '../GenreAndCinemaPresentation/GenreAndCinema'
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight:"700",
    subsets: ["cyrillic"]
})

export default function FilterSection() {
    const { data: cinemaData = [] } = useGetCinemasQuery();
    const { data: movies = [] } = useGetMoviesQuery();
    const movieTitleQuery = useAppSelector(selectMovieTitleQuery);
    const genreId = useAppSelector(selectGenreId);
    const cinemaId = useAppSelector(selectCinemaId);
    const dispatch = useAppDispatch();

    const uniqGenres = Array.from(new Set(movies.map(movie => movie.genre)));

    const [isGenreOpen, setIsGenreOpen] = useState(false);
    const [isCinemaOpen, setIsCinemaOpen] = useState(false);

    const genreContainerRef = useRef<HTMLDivElement>(null);
    const cinemaContainerRef = useRef<HTMLDivElement>(null);
  
    function handleGenreChange(genreId: Genre | null) {
        dispatch(setGenreId(genreId));
        setIsGenreOpen(false);
    }

    function handleCinemaChange(cinemaId: string | null) {
        dispatch(setCinemaId(cinemaId));
        setIsCinemaOpen(false);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setMovieTitleQuery(event.target.value));
    }

    return (
        <div className={styles.filterSection}>
            <div className={`${styles.sectionTitle} ${roboto.className}`}>Фильтр поиска</div>
            <div className={styles.filters}>
                <div className={styles.inputFilterContainer}>
                    <div className={styles.filterTitle}>Название</div>
                    <input 
                        className={styles.inputFilter} 
                        type="text" value={movieTitleQuery} 
                        onChange={handleInputChange} 
                        placeholder="Введите название"
                    />
                </div>
                <div ref={genreContainerRef} className={styles.dropdownContainer}>
                    <div className={styles.filterTitle}>
                        Жанр
                    </div>
                    <div 
                        className={styles.dropdown}
                        onClick={() => setIsGenreOpen(open => !open)}
                    >
                        {genreId === null ? "Выберите жанр" : genres[genreId]}
                    </div>
                    { genreContainerRef.current && isGenreOpen && createPortal(
                        <ul className={styles.dropdownSelect}>
                            <li 
                                className={styles.selectItems}
                                onClick={(() => handleGenreChange(null))}
                            >
                                не выбрано
                            </li>
                            {uniqGenres.map((genre) => {
                                return (
                                    <li 
                                        className={styles.selectItems}
                                        key={genre} 
                                        onClick={(() => handleGenreChange(genre))}
                                    >
                                        {genres[genre]}
                                    </li>
                                )
                            })}
                        </ul>,
                        genreContainerRef.current
                    )}
                </div>
                <div ref={cinemaContainerRef} className={styles.dropdownContainer}>
                    <div className={styles.filterTitle}>Кинотеатр</div>
                    <div 
                        className={styles.dropdown}
                        onClick={() => setIsCinemaOpen(open => !open)}
                    >
                        {cinemaId === null ? "Выберите кинотеатр" : 
                        cinemaData.find(cinema => cinema.id === cinemaId)?.name}
                    </div>
                    { cinemaContainerRef.current && isCinemaOpen && createPortal(
                        <ul className={styles.dropdownSelect}>
                            <li
                                className={styles.selectItems} 
                                onClick={(() => handleCinemaChange(null))}>
                                не выбрано
                            </li>
                            {cinemaData.map((cinema) => {
                                return (
                                    <li
                                        className={styles.selectItems} 
                                        key={cinema.id} 
                                        onClick={(() => handleCinemaChange(cinema.id))}
                                    >
                                        {cinema.name}
                                    </li>
                                )
                            })}
                        </ul>,
                        cinemaContainerRef.current
                    )}
                </div>
            </div>
        </div>
    );
}