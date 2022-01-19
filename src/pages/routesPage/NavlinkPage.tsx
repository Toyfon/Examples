import { NavLink } from "react-router-dom"
import s from './nav.module.css'



 export const  NavLinkPage = () => {

    return (
        <div  className={s.nav}>
            <div >Examples</div>
            <NavLink to='/clock'
                     style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'lightslategrey' })}
                     >Clock</NavLink>
            <NavLink to='/modal'
                     style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'lightslategrey' })}
                     >Modal</NavLink>


        </div>
    )
}


