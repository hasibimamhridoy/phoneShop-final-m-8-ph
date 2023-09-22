import { useEffect, useState } from "react";


const useGetPhones = () => {

    const [phones,setPhones] = useState()

    useEffect(()=>{

        fetch('/phones.json')
        .then(res=>res.json())
        .then(data => setPhones(data))

    },[])
    

    return [phones]

};

export default useGetPhones;