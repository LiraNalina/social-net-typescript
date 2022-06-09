import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.link}>
            <div className={s.navlinks}>
               <div className={s.navlink}><NavLink to="/profile">Profile</NavLink></div>
               <div className={s.navlink}><NavLink to="/users">Users</NavLink></div>

               <div className={s.navlink}><NavLink to="/dialogs">Dialogs</NavLink></div> 
               <div className={s.navlink}><NavLink to="/music">Music</NavLink></div> 
               <div className={s.navlink}><NavLink to="/news">News</NavLink></div> 
               <div className={s.navlink}><NavLink to="/friends">Friends</NavLink></div> 
               <div className={s.navlink}><NavLink to="/contacts">Contact Us</NavLink></div>
               <div className={s.navlink}><NavLink to="/contacts">Gallery</NavLink></div>
               <div className={s.navlink}><NavLink to="/contacts">Map</NavLink></div>
            
            </div>
            

        </nav>
    )
}
