import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight:"500",
    subsets: ["cyrillic"]
})

interface Modal {
    children: React.ReactNode;
}

const Modal: FunctionComponent<Modal> = ({children}) => {
    return createPortal(<div className={`${styles.modal} ${roboto.className}`}>
        {children}
    </div>, document.body)
}

export default Modal;