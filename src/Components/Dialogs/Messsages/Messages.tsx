import React from "react";
import { MessageType } from "../../../redux/state";
import s from "./../Dialogs.module.css"

export const Messages = (props: MessageType) => {

    return (
        <div>
            <div className={s.messages}>{props.message}</div>
        </div>
    )
}