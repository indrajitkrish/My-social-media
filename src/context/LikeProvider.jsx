import { createContext, useContext } from "react";
import { PostContext } from "./PostProvider";

export const LikeContext = createContext();
export function LikeProvider({children})
{
const {userFeed,setUserFeed,userFeed1,setUserFeed1} = useContext(PostContext);
    const likeHandler = async(id) =>
    {
   
        try{
            const response = await fetch(`/api/posts/like/${id}`,{
              method: 'POST',
              headers : {authorization : localStorage.getItem('encodedToken')},
            })
      console.log(JSON.parse(response._bodyInit).posts)
   setUserFeed(JSON.parse(response._bodyInit).posts);
   setUserFeed1(JSON.parse(response._bodyInit).posts);
   console.log(userFeed1);
          } 
          catch(error)
          {
            console.log(error);
          } 
      setUserFeed((data)=> data.map((post)=>{
        if(post._id === id)
        {
          console.log(post);
         return{...post,like:true};
        }
         return {...post};
      })
      )
      setUserFeed1((data)=> data.map((post)=>{
        if(post._id === id)
        {
          console.log(post);
         return{...post,like:true};
        }
         return {...post};
      })
      )

          //console.log(userFeed1);
    }
    const disLikeHandler = async(id)=>
    {
        
        try{
            const response = await fetch(`/api/posts/dislike/${id}`,{
              method: 'POST',
              headers : {authorization : localStorage.getItem('encodedToken')},
            })
       console.log(JSON.parse(response._bodyInit).posts)
       setUserFeed(JSON.parse(response._bodyInit).posts);
       setUserFeed1(JSON.parse(response._bodyInit).posts);
       //console.log(getCart);
          } 
          catch(error)
          {
            console.log(error);
          }
          setUserFeed((data)=> data.map((post)=>{
            if(post._id === id)
            {
              console.log(post);
             return{...post,like:false};
            }
             return {...post};
          })
          )
          setUserFeed1((data)=> data.map((post)=>{
            if(post._id === id)
            {
              console.log(post);
             return{...post,like:false};
            }
             return {...post};
          })
          )
    }

    return(
        <LikeContext.Provider value={{likeHandler,disLikeHandler}}>
            {children}
        </LikeContext.Provider>
    )
}