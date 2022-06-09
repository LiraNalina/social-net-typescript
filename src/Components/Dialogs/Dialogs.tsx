import React from "react";
import { DialogsPageType } from "../../redux/state";
import { UsersItem } from "./UsersItem/UsersItem";
import s from './Dialogs.module.css'
import { Messages } from "./Messsages/Messages";

export const Dialogs = (props: DialogsPageType) => {

    let usersElements = props.users
        .map((u) => {
            return <UsersItem name={u.name} id={u.id} />
        })

    let messageElements = props.messages.map((m) => {
        return <Messages id={m.id} message={m.message} />
    })

    return (
        <div>
            <div className={s.head}>
                <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className={s.dialogs}>

                <div className={s.usersimg}>
                    <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="dss" />
                </div>

                <div className={s.dialogsItems}>{usersElements}</div>
                <div>{messageElements}</div>


            </div>
        </div>
    )
}
