import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router";


const Card = styled.div`
    border: 1px solid red; 
    padding: 0 0 0 20px;
    margin:10px; 
`


const PostCard = (props) => {

    const history = useHistory()

    const handleGoToPostDetail = () => {
       
        history.push(`/post/${props.post.id}/comments`)
    }

    return(

    <Card>
        <p><strong>Username:</strong> {props.post.username}</p>
        <p><strong>Text:</strong> {props.post.body}</p>
        <Card>
             <p><button>Like</button>{props.post.voteSum}</p>
             <p>
                 {props.post.commentCount} 
                 <button
                    onClick={handleGoToPostDetail}
                 >Comment
                 </button>
             </p>
        </Card>
    </Card>


    )
}

export default PostCard