"use client"

import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import basketIcon from "../../../../public/basket.png";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useAppSelector } from "@/redux/store/hooks";


const roboto = Roboto({
    weight:"700",
    subsets: ["cyrillic"]
})

export default function Header() {
    const totalNumberOfTickets = useAppSelector(state => Object.values(state.counter.values).reduce((sum, cur) => sum+cur, 0));
    return (
        <header className={`${styles.header} ${roboto.className}`}>
            <div className={styles.title}>
                <Link href="/">Билетопоиск</Link>
            </div>
            <div className={styles.basketIcon}>
                {totalNumberOfTickets > 0 ? <div className={`${styles.sumTickets} ${roboto.className}`}>{totalNumberOfTickets}</div> : ""}
                <Link href="/cart"><Image src={basketIcon} alt="basket"/></Link>
            </div>
        </header>
    )
}