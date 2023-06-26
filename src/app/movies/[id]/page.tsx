'use client'

import React from "react";
import { useGetMovieQuery, useGetMovieReviewQuery } from "@/redux/store/movieApi";
import styles from "./page.module.css";
import Counter from "@/app/components/Counter/Counter";
import Image from "next/image";
import photoIcon from "../../../../public/photo.png";
import { Roboto } from "next/font/google";
import { genres } from "@/app/components/GenreAndCinemaPresentation/GenreAndCinema";

const roboto = Roboto({
    weight:"700",
    subsets: ["cyrillic"]
})

export default function MoviePage({params } :  {params: {id: string}}) {
    const { data: movie } = useGetMovieQuery(params.id);
    const { data: review = [] } = useGetMovieReviewQuery(params.id)
    
    if (!movie) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className={styles.movieInfo}>
                <div className={styles.poster}>
                    <img src={movie.posterUrl} alt="poster"/>
                </div>
                <div className={styles.description}>
                    <div className={styles.mainInfo}>
                        <div className={`${styles.title} ${roboto.className}`}>
                            {movie.title}
                            <Counter id={movie.id} />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.detail}><h4>Жанр:</h4> {genres[movie.genre]}</div>
                            <div className={styles.detail}><h4>Год выпуска:</h4> {movie.releaseYear}</div>
                            <div className={styles.detail}><h4>Рейтинг:</h4> {movie.rating}</div>
                            <div className={styles.detail}><h4>Режиссер:</h4> {movie.director}</div>
                        </div>
                    </div>
                    <div className={styles.movieDescription}>
                        <h4>Описание</h4>
                        {movie.description}
                    </div>
                </div>
                
            </div>
            <div className={styles.reviews}>
            {review.map(item => {
                return(<div key={item.id} className={styles.review}>
                    <div className={styles.avatar}>
                        <Image src={photoIcon} alt="photo" />
                    </div>
                    <div className={styles.reviewInfo}>
                        <div className={styles.reviewerInfo}>
                            <div>{item.name}</div>
                            <div>Оценка: {item.rating}</div>
                        </div>
                        <div className={styles.reviewtext}>
                            {item.text}
                        </div>
                    </div>    
                </div>)
            })}
            </div>
        </div>
    )
}