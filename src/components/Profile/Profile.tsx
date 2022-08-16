import React, {useState} from "react";
import MyPosts, {PostType} from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {

    const [posts, setPosts] = useState<PostType[]>([
        {id:1, message: "Some text here", likeCount: 2},
        {id:2, message: "Post info aaaa", likeCount: 23},
        {id:3, message: "Strings are immutable", likeCount: 1112},
        {id:4, message: "May the 4th", likeCount: 11},
        {id:5, message: "Last post", likeCount: 12},
    ]);

    const addPost = (post: string) => {
        setPosts([...posts, {id:6, message: post, likeCount: 0}]);
    }

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
}

export default Profile;