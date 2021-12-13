import {useEffect, useState} from "react";
import s from './Clock.module.css'

export const ModernClock = () => {

    const [date, setDate] = useState<Date>(new Date())
    const deg = 6
    const hours = date.getHours() * 30;
    const minutes = date.getMinutes() * deg
    const seconds = date.getSeconds() * deg

    useEffect(() => {
        setTimeout(() => {
            setDate(new Date())
        }, 1000)
    }, [date])

    return (
        <div className={s.clock}>
            <div className={s.hour}>
                <div style={{transform: `rotate(${hours + minutes / 12}deg)`}} className={s.hours}></div>
            </div>

            <div className={s.minute}>
                <div style={{transform: `rotate(${minutes}deg)`}} className={s.minutes}></div>
            </div>
            <div className={s.second}>
                <div style={{transform: `rotate(${seconds}deg)`}} className={s.seconds}></div>
            </div>


        </div>
    );
}