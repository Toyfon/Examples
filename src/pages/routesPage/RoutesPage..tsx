import {Navigate, Route, Routes} from "react-router-dom";
import {ModernClock} from "../../ModernClock/ModernClock";
import {State} from "../../Modal/State";


export const PATH = {
    CLOCK: '/clock',
    MODAL: '/modal'

}


export const RoutesPage = () =>{
    return (
        <div >
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.CLOCK}/>}/>
                <Route path={PATH.CLOCK} element={<ModernClock/>}/>
                <Route path={PATH.MODAL} element={<State/>}/>
            </Routes>

        </div>

    )
}