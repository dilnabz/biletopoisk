import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight:"400",
    subsets: ["cyrillic"]
})

export default function Footer() {
    return(
        <footer className={`${styles.footer} ${roboto.className}`}>
            <div className={styles.faq}>
                <Link href="/faq">Вопросы-ответы</Link>
            </div>
            <div className={styles.about}>
                <Link href="/about">О нас</Link>
            </div>
        </footer>
    )
}