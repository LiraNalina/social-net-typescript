import React from "react";
import { PostType } from "../../../redux/state";
import s from "./../Profile.module.css"

export const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.post}>
                <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg" alt="" />
                post: {props.post}
            </div>
            <div>
               <span>likes: {props.likesCount}</span> 
            </div>
        </div>
    )
}