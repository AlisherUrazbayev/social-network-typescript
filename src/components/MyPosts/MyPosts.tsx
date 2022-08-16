import React, {ChangeEvent, useState} from "react";
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (post: string) => void
}

export type PostType = {
    id: number
    message: string
    likeCount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    const [postMessage, setPostMessage] = useState<string>("");

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setPostMessage(event.currentTarget.value);
    }

    const onClickHandler = () => {
        props.addPost(postMessage);
    }

    return (
        <div>
            <div>My Posts</div>
            <textarea onChange={onChangeHandler} value={postMessage}  name="post" id="" cols={30} rows={10}></textarea>
            <button onClick={onClickHandler}>Add post</button>
            {props.posts.map((post) => {
                return <Post message={post.message} likeCount={post.likeCount} />
            })}
        </div>
    );
}

export default MyPosts;