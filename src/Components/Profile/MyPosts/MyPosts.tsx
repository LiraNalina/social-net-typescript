import React, { useState } from "react";
import { PostPageType } from "../../../redux/state";
import SuperButton from "../SuperButton/SuperButton";
import { Post } from "./Post";
import s from './../SuperButton/SuperButton.module.css'

export const MyPosts = (props: PostPageType) => {

    let postElement = props.posts.map((p) => {
        return <Post key={p.id} id={p.id} post={p.post} likesCount={p.likesCount} />
    })

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (postMessageRef.current) {
            props.addPostCallback(postMessageRef.current.value)
        }
    }

    return (
        <div>
            <div>
                <div><textarea ref={postMessageRef}></textarea></div>
                <div><SuperButton onClick={addPost}>Add post</SuperButton></div>
            </div>
            <div>
                {postElement}

            </div>
        </div>
    )
}