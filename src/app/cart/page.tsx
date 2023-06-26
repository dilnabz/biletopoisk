'use client'

import React from "react";
import styles from "./page.module.css";
import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import { useGetMoviesQuery } from "@/redux/store/movieApi";
import TicketCard from "../components/TicketCard/TicketCard";


export default function Cart() {
    const {data = []} = useGetMoviesQuery();
    const items = useAppSelector((state: RootState) =>
        Object.keys(state.counter.values).filter((id) =>state.counter.values[id] > 0));
    const dataForCart = data.filter(movie => items.includes(movie.id));
    const totalNumberOfTickets = useAppSelector(state => Object.values(state.counter.values).reduce((sum, cur) => sum+cur, 0));

    return (
        <div className={styles.cart}>
            {dataForCart.map(movie => <div className={styles.ticketInCart}>
                    <TicketCard 
                        key={movie.id} 
                        id={movie.id} 
                        title={movie.title} 
                        genre={movie.genre} 
                        posterUrl={movie.posterUrl} 
                        withRemoveButton={true}
                    />
                </div>)}
            <div className={styles.summary}>
                <div className={styles.summaryTitle}>Итого билетов: </div>
                <div className={styles.ticketsCount}>{totalNumberOfTickets}</div>
            </div>
        </div>
    )
}
