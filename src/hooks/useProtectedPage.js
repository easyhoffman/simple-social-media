import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToLoginPage } from "../routes/coordinator";


const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token");
        if(token === null) {
            console.log("User isn't logged")
            history.push('/')
        }
    }, [])
}

export default useProtectedPage
