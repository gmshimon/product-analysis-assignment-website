import { useEffect, useState } from "react"

const UseRatings = () =>{
    const[ratings,setRatings] = useState([]);

    useEffect(()=>{
        fetch('ratings.json')
        .then(res=>res.json())
        .then(data=>setRatings(data))
    },[])

    return [ratings,setRatings];
}

export default UseRatings;