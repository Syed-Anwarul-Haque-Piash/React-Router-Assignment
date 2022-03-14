import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

const PostDetails = () => {
    const{id}=useParams()
    const[info,setInfo]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>res.json())
        .then(data=>{
             setInfo(data)
        })
    },[])
    return (
        <div>
            {/* <h1>Coming Soon {id}</h1> */}
            <h2>User Id: {info.userId}</h2>
            <h3>ID: {info.id}</h3>
            <h5>Title: {info.title}</h5>
            <p>Description: {info.body}</p>
            <Comments id={id}></Comments>
        </div>
    );
};

export default PostDetails;