import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {

    const posts = [
        {id:1, message: "Some text here", likeCount: 2},
        {id:2, message: "Post info aaaa", likeCount: 23},
        {id:3, message: "Strings are immutable", likeCount: 1112},
        {id:4, message: "May the 4th", likeCount: 11},
        {id:5, message: "Last post", likeCount: 12},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;