"use client"

import React, {FunctionComponent, useState} from "react";
import styles from "./page.module.css";

const questions = [
    {id: "question1", value: "Что такое Билетопоиск?"},
    {id: "question2", value:"Какой компании принадлежит Билетопоиск?"},
    {id: "question3", value:"Как купить билет на Билетопоиск?"},
    {id: "question4", value:"Как оставить отзыв на Билетопоиск?"}
]

interface isOpen {
    [key: string] : boolean;
}

export default function Faq() {
    const [isOpen, setIsOpen] = useState<isOpen>({});

    const handleClick = (id:string) => {
        setIsOpen((prevState) => ({
          ...prevState,
          [id]: !prevState[id]
        }));
      };
    return (
        <div className={styles.questions}>
            <div className={styles.questionsAnswers}>Вопросы-Ответы</div>
            {questions.map(question => {
                return(
                <div key={question.id} className={styles.question}>
                    <div 
                        className={styles.questionTitle}
                        onClick={() => handleClick(question.id)}
                    >
                        {question.value}
                    </div>
                    {isOpen[question.id] && <div className={styles.questionText}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Incidunt, distinctio blanditiis eos neque dolores excepturi cupiditate, 
                        id natus iusto obcaecati vero ab eius facilis sapiente deserunt, reiciendis odit inventore unde!
                        Eligendi ad saepe nostrum laudantium, aspernatur aperiam sed quidem sequi unde dolores eius 
                        corporis numquam alias laboriosam? Eaque esse commodi quibusdam quaerat odit labore, beatae non nihil mollitia incidunt nostrum.
                    </div>}
                </div>)
            })}
        </div>
    )
}