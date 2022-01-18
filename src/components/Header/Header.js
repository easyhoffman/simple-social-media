import { AppBar, Button, Toolbar } from "@material-ui/core";
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator";
import { StyledToolbar } from "./styled";
import { useHistory } from "react-router";
import { useState } from "react";

const Header = ({rightButton, setRightButton}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()
  

  const logout = () => {
    localStorage.removeItem("token")
  }


  const rightButtonAction = () => {
    if(token){
      logout()
      setRightButton("Login")
      goToLoginPage(history)
    }else{
      goToLoginPage(history)
    }

  }

  const leftButtonAction = () => {
      goToLoginPage(history)

  }

  return (
    <AppBar position = "static">
      <StyledToolbar>
        <Button onClick={leftButtonAction}color="inherit">LabEddit</Button>
        <Button onClick={rightButtonAction}color="inherit">{rightButton}</Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;