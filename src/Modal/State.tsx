import s from "./modal.module.css";
import {Modal} from "./Modal";
import {useState} from "react";


export const State = () => {
   const  [modalActive,setModalActive] = useState<boolean>(false)

    return <div>
        <h1>Modal window</h1>
        <button className={s.openBtn} onClick={() => setModalActive(true)}> open modal</button>
            <Modal active={modalActive} setActive={setModalActive}/>
    </div>
}