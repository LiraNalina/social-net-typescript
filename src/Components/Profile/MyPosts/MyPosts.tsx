import React, { ChangeEvent, useState } from "react";
import { PostPageType, PostType } from "../../../redux/state";
import SuperButton from "../SuperButton/SuperButton";
import { Post } from "./Post";
import s from './../SuperButton/SuperButton.module.css'
import a from './../Profile.module.css'

export const MyPosts = (props: PostPageType) => {

    let postElement = props.posts.map((p) => {
        return <Post key={p.id} id={p.id} post={p.post} likesCount={p.likesCount} />
    })

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (postMessageRef.current) {
            props.addPostCallback(postMessageRef.current.value)
            // postMessageRef.current.value = ''
        }
    }

    let onChangeNew = () => {
        let text = postMessageRef.current?.value
        if (text !== undefined) {

            props.updateNewPostText(text)
        }
    }

    return (
        <div>
            <div>
                <div><textarea ref={postMessageRef}
                    onChange={onChangeNew}
                    value={props.newPostText}
                /></div>
                <div><SuperButton onClick={addPost}>Add post</SuperButton></div>
            </div>
            <div className={a.posts}>
                {postElement}
                <button>x</button>
            </div>
        </div>
    )
}
