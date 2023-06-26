import styles from "./page.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight:"700",
    subsets: ["cyrillic"]
})

export default function About() {
    return (
        <div className={`${styles.about} ${roboto.className}`}>
            <div className={styles.title}>О нас</div>
            <div className={styles.text}>
                <div>Мы — крупнейший сервис о кино в рунете. 
                    На нем вы сможете посмотреть фильмы и сериалы, 
                    купить билеты в кино, узнать рейтинги популярных 
                    видео и интересные факты, поставить фильмам оценки, 
                    написать рецензии и дополнить описание фильмов.
                </div>
                <div>
                был запущен в 2003 году. Портал предоставляет пользователям
                информацию о фильмах и их создателях, новости кино, интервью 
                с актерами и другими знаменитостями, рецензии пользователей, 
                расписание сеансов в кинотеатрах, ТВ-программу и другие разделы.
                </div>
                <div>
                Сайт был создан 7 ноября 2003 года, его основатели — 
                Виталий Таций и Дмитрий Суханов. Владельцем проекта являлась
                компания ООО «Билетопоиск», которой принадлежало 60 % акций 
                проекта, 40 % акций принадлежало её совладельцу — французской
                компании ООО AlloCiné. 15 октября 2013 года сервис купила 
                компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд рублей
                на то время).
                </div>
            </div>
        </div>
    )
}