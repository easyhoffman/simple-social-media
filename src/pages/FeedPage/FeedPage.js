import { TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostCard from "../../components/Header/PostCard";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

const FeedCards = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 400px;
    align-content: center;
    margin:auto;

`

const FeedPage = () => {

    useProtectedPage()
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
   
    

  
    const posts = useRequestData([], `${BASE_URL}/posts`)

   


    const handleCreateNewPost = () => {

        const auth = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        const body = {
            title: title,
            body: text
        }

        axios.post(`${BASE_URL}/posts`, body, auth)
        .then((res)=>{
            setText("")
            setTitle("")
            alert("Post created successfully")
        })
        .catch((error)=>{
            
            alert("There was a problem creating the post. Pleasy try again")
           })

    }

    return(
        <FeedCards>
            <TextField
                placeholder={"Post title"}
                value={title}   
                onChange={(event)=>{setTitle(event.target.value)}}            

            />
            <TextField
                placeholder={"Post text"}
                value={text}
                onChange={(event)=>{setText(event.target.value)}}  
            />  
            <button
                onClick={handleCreateNewPost}
            >Create New Post</button>
           
            {posts.map((post)=>{
               return(
                   <PostCard post={post}/>
                   
               )  
            })}
        </FeedCards>
    )
}

export default  FeedPage