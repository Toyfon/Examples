import s from './modal.module.css'
import React from "react";


type PropsType =  {
    active:boolean
    setActive: (active:boolean) => void
}

export const Modal:React.FC<PropsType> = ({active, setActive, children}) => {
    return (
        <div className={active? `${s.modal} ${s.active}` : s.modal} onClick={()=> setActive(false)}>
            <div role={"presentation"} className={active? s.modal__content_active : s.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>

        </div>
    )
}