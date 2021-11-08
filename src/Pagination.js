import React from 'react'
import {useState,useEffect} from "react"
import PaginationList from "./component/PaginationList"
import queryString from "query-string"
const Pagination = () => {
    const [posts,setPosts]=useState([])
    const [pagination, setPagination]=useState({
        _page:1,
        _limit:10,
        _totalRows:1
    })
    const [filter,setFilter]=useState({
        _page:1,
        _limit:10
        
    })
    const fetchPosts=async ()=>{
        try {
                const string=queryString.stringify(filter)
                const res=await fetch(`https://js-post-api.herokuapp.com/api/posts?${string}`);
                const resJson=await res.json();
                return resJson;
                /*
                const {data,pagination}=resJson;
                console.log(resJson)
                setPosts(data)
                setPagination(pagination)
                */
                
            }
         catch (error) {
            console.log("Failed fetching data:",error.message)
            
        }
    } 
    useEffect(()=>{
       const getData=async ()=>{
           const resJson=await fetchPosts()
           const {data,pagination}=resJson;
           setPosts(data)
           setPagination(pagination)

           
       }
        getData();

    },[filter])

    const onHanldeChange=(newPage)=>{
        setFilter({
            ...filter,
            _page:newPage
        })
        
    }
    return (

        <PaginationList posts={posts} onHanldeChange={onHanldeChange} filter={filter}/>
        
    )
}



export default Pagination
