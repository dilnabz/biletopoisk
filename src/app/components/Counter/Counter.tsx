import React, { FunctionComponent, useState } from "react";
import Image from "next/image";
import plusIcon from "../../../../public/plus.png";
import minusIcon from "../../../../public/minus.png";
import closeIcon from "../../../../public/close.png";
import styles from "./Counter.module.css";
import { useAppSelector, useAppDispatch } from "@/redux/store/hooks";
import { increment, decrement, removeCounts } from "@/redux/features/counterSlice";
import Modal from "../Modal/Modal";

interface Counter {
    id: string;
    withRemoveButton?: boolean;
}

const Counter: FunctionComponent<Counter> = ({id, withRemoveButton}) => {
    const counter = useAppSelector(state => state.counter.values[id] || 0);
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    return (
        <div className={styles.basketInfo}>
            <button disabled={counter <= 0} className={styles.decreaseBtn} onClick={() => dispatch(decrement(id))}>
                <Image src = {minusIcon} alt="minus"/>
            </button>
                    {counter}
            <button disabled={counter >= 30} className={styles.increaseBtn} onClick={() => dispatch(increment(id))}>
                <Image src = {plusIcon} alt="plus" />
            </button>
            {withRemoveButton && <div onClick={() => setShowModal(true)}><Image src={closeIcon} alt="close" /></div>}
            {showModal && (
                <Modal>
                    <div className={styles.ticketDelete}>
                        <div>Удаление билета</div>
                        <div onClick={() => setShowModal(false)}>
                        <Image src={closeIcon} alt="close" />
                    </div>
                    </div>
                    <div>Вы уверены, что хотите удалить билет?</div>
                    <div>
                        <button onClick={() => {
                            dispatch(removeCounts(id));
                            setShowModal(false);
                        }}>
                            Да
                        </button>
                        <button onClick={() => setShowModal(false)}>
                            Нет
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default Counter;