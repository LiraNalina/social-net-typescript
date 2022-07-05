import React from "react";
import {PostPageType} from "../../../redux/state";
import SuperButton from "../SuperButton/SuperButton";
import {Post} from "./Post";
import a from './../Profile.module.css'

export const MyPosts = (props: PostPageType) => {

    let postElement = props.posts.map((p) => {
        return <Post key={p.id} id={p.id} post={p.post} likesCount={p.likesCount}/>
    })

    let postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (postMessageRef.current) {
            props.addPostCallback()
            // props.updateNewPostText('')
        }
    }

    let onChangeNew = () => {
        if (postMessageRef.current?.value) {
            let text = postMessageRef.current.value
            if (text !== undefined) {
                props.updateNewPostText(text)
            }
        }
    }

    return (
        <div>
            <div>
                <div>
                    <textarea
                        ref={postMessageRef}
                        onChange={onChangeNew}
                        value={props.newPostText}/>
                </div>

                <div>
                    <SuperButton onClick={addPost}>Add post</SuperButton>
                </div>
            </div>

            <div className={a.posts}>
                {postElement}
                <button>x</button>
            </div>

        </div>
    )
}
