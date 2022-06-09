import React from "react";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../../redux/state";
import s from './../Dialogs.module.css'

export const UsersItem = (props: UsersType) => {

    let path = "/users/" + props.id

    return <div className={s.users}>
        <NavLink to={"path"} >{props.name}</NavLink>
    </div>
}