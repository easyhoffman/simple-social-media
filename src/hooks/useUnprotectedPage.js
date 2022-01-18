import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToLoginPage } from "../routes/coordinator";


const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token");
        if(token) {
            
            history.push('/feed')
        }
    }, [])
}

export default useUnprotectedPage
