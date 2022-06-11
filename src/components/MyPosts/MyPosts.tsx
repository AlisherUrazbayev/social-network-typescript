import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My Posts</div>
            <textarea name="post" id="" cols={30} rows={10}></textarea>
            <button>Add post</button>
            <Post message="Hello this my first post"
                  likeCount={5}/>
            <Post message="This is how props work"
                  likeCount={52}/>
            <Post message="Got my first React project set up"
                  likeCount={18}/>
        </div>
    );
}

export default MyPosts;