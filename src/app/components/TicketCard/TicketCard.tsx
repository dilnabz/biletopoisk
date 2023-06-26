import React, { FunctionComponent } from "react";
import styles from "./TicketCard.module.css";
import { Roboto } from "next/font/google";
import Counter from "../Counter/Counter";
import Link from "next/link";
import { genres, Genre } from "../GenreAndCinemaPresentation/GenreAndCinema";

interface Ticket {
    id: string;
    title: string;
    posterUrl: string;
    genre: Genre;
    withRemoveButton?: boolean;
}

const roboto = Roboto({
    weight: "700",
    subsets: ["cyrillic"]
})
const TicketCard: FunctionComponent<Ticket> = ({
    title,
    posterUrl,
    genre,
    id,
    withRemoveButton,
}) => {
    return(
       
            <div className={styles.ticketCard}>
                <div className={styles.moviePoster}>
                    <Link href={`/movies/${id}`}><img src={posterUrl} alt="Poster" width={100} height={120} /></Link>
                </div>
                <div className={`${styles.ticketInfo} ${roboto.className}`}>
                    <div className={styles.movieInfo}>
                        <div className={styles.movieTitle}>
                        <Link href={`/movies/${id}`}>{title}</Link>
                        </div>
                        <div className={styles.movieGenre}>
                            {genres[genre]}
                        </div>
                    </div>
                    <Counter id={id} withRemoveButton={withRemoveButton} />
                </div>
            </div>
     
    )
}

export default TicketCard;