import { useEffect, useState } from "react"

export const useReviews = ()=>{
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('fakedata/review-data.json')
        .then(res=> res.json())
        .then(data=>setReviews(data))
    },[])
    return [reviews,setReviews];
}