import axios from "axios";
import React, { useEffect, useState } from "react";
import useProtectedPage from "./useProtectedPage";

const useRequestData = (initialData, url)=>{

    const [data,setData] = useState(initialData)




    useEffect(()=>{

        axios.get(url , {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        } )
        .then((res)=>setData(res.data))
        .catch((err)=>{console.log(err)})


    
    }, [url])

    return(data)
}

export default useRequestData