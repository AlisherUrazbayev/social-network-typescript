import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My Posts</div>
            <textarea name="post" id="" cols={30} rows={10}></textarea>
            <button>Add post</button>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default MyPosts;