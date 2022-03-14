import React, { useEffect, useState } from 'react'

const Comments = () => {
    //const{id}=props.id;
    const[comments,setComments]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setComments(data)
        })
    },[])
  return (
    <div>
        <h2>No of comments: {comments.length}</h2>
        {
            comments.map(comment=><p>Email: {comment.email}</p>)
        }
        

    </div>
  )
}

export default Comments;