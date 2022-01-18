import React from "react";
import {Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage";



const Router = ({rightButton, setRightButton}) => {
    return(
        
            
            <Switch>
                <Route exact path = "/">
                    
                        <LoginPage rightButton={rightButton} setRightButton={setRightButton}/>
                    
                </Route>

                <Route exact path = "/signup">
                    
                        <SignUpPage rightButton={rightButton} setRightButton={setRightButton} />
                   
                </Route>

                <Route exact path = "/feed">
                    
                        <FeedPage />
                   
                </Route>

                <Route exact path = "/post/:id/comments">
                    
                        <PostDetailsPage />
                   
                </Route>

                <Route >
                   
                        <ErrorPage />
                    
                </Route>

            </Switch>
        

    )
}

export default Router