import { createContext, useContext, useState } from "react"
import { PostContext } from "./PostProvider";
//import { posts } from "../backend/db/posts";


export const BookMarkContext = createContext();
export function BookMarkProvider({children})
{
    const {setUserFeed} = useContext(PostContext);
    const [bookMark,setBookMark] = useState([]);
    const addBookMark = async(id) =>
    {
        try{
            const response = await fetch(`/api/users/bookmark/${id}`,{
              method: 'POST',
              headers : {authorization : localStorage.getItem('encodedToken')},
            })
            console.log("addbookmark")

            //console.log(response);
            //console.log(JSON.parse(response._bodyInit).bookmarks);
      //const bookMarksId = JSON.parse(response._bodyInit).bookmarks;
      handlegetPost1(id);
          } 
          catch(error)
          {
            console.log(error);
          } 
    }
    
    const deleteBookMark = async(id) =>
    {
      try{
        const response = await fetch(`/api/users/remove-bookmark/${id}`,{
          method: 'POST',
          headers : {authorization : localStorage.getItem('encodedToken')},
        })
        console.log("deletepost");
  handlegetPost2(id);
      } 
      catch(error)
      {
        console.log(error);
      } 

    }
    const handlegetPost1 = async(id) =>
    {
        try{
            const response = await fetch("/api/users/bookmark/",{
              method: 'GET',
              headers : {authorization : localStorage.getItem('encodedToken')},
            }) 
            //console.log(JSON.parse(response._bodyInit).bookmarks); 
            setBookMark(JSON.parse(response._bodyInit).bookmarks);
            console.log(bookMark);
          } 
          catch(error)
          {
            console.log(error);
          }
          setUserFeed((data)=> data.map((post)=>{
            if(post._id === id)
            {
              console.log(post);
             return{...post,bookmark:true};
            }
             return {...post};
          })
          )
          setBookMark((data)=> data.map((post)=>{
            if(post._id === id)
            {
              console.log(post);
             return{...post,bookmark:true};
            }
             return {...post};
          })
          )
          console.log(bookMark)
    }
    const handlegetPost2 = async(id) =>
    {
        try{
            const response = await fetch("/api/users/bookmark/",{
              method: 'GET',
              headers : {authorization : localStorage.getItem('encodedToken')},
            }) 
            console.log(JSON.parse(response._bodyInit).bookmarks); 
            setBookMark(JSON.parse(response._bodyInit).bookmarks);
            console.log(bookMark);
          } 
          catch(error)
          {
            console.log(error);
          }
          setUserFeed((data)=> data.map((post)=>{
            if(post._id === id)
            {
              console.log(post);
             return{...post,bookmark:false};
            }
             return {...post};
          })
          )
          setBookMark((data)=> data.map((post)=>{
            if(post._id === id)
            {
              console.log(post);
             return{...post,bookmark:false};
            }
             return {...post};
          })
          )
          console.log(bookMark)
    }
    return(
        <BookMarkContext.Provider value={{addBookMark,bookMark,deleteBookMark}}>
          {children}
        </BookMarkContext.Provider>
        
    )
}