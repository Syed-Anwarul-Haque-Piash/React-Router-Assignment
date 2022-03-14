import React, { useEffect, useState } from 'react';
import Posts from './Posts';

const Home = () => {
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPosts(data)
        })
    },[])
    return (
        <div>
            {/* <h1>This is home: {posts.name}</h1> */}
            {
                posts.map(post=><Posts post={post}></Posts>)
            }
        </div>
    );
};

export default Home;