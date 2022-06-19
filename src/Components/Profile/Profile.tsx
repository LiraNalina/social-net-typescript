import React from "react";
import { addPost, PostPageType, updateNewPostText} from "../../redux/state";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = (props: PostPageType) => {
    return (
        <div>
            <MyPosts 
                posts={props.posts}
                addPostCallback={addPost}
                newPostText={props.newPostText}   
                updateNewPostText={updateNewPostText} />
        </div>
    )
}
