import React from "react";
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: PostType[]
}

type PostType = {
    id: number
    message: string
    likeCount: number
}

const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div>
            <div>My Posts</div>
            <textarea name="post" id="" cols={30} rows={10}></textarea>
            <button>Add post</button>
            {props.posts.map((post) => {
                return <Post message={post.message} likeCount={post.likeCount} />
            })}
        </div>
    );
}

export default MyPosts;