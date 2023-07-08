import { createContext, useState, useEffect} from "react"

export const PostContext = createContext();
export function PostProvider({children})
{
    const [userFeed,setUserFeed] = useState([]);
    const [myPost,setMyPost] = useState([]);
    const [followedPost,setFollowedPost] = useState([]);
    const [userFeed1,setUserFeed1] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await fetch("/api/posts");
          setUserFeed(JSON.parse(response._bodyInit).posts);
          setUserFeed1(JSON.parse(response._bodyInit).posts);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(()=>
      {
        fetchData()
      },[]);

      const deletePostHandler = async(id) =>
      {
      try{
        const response = await fetch(`/api/posts/${id}`,{
          method: 'DELETE',
          headers : {authorization : localStorage.getItem('encodedToken')},
        })
  console.log(JSON.parse(response._bodyInit).posts)
setUserFeed(JSON.parse(response._bodyInit).posts);
setUserFeed1(JSON.parse(response._bodyInit).posts);
      } 
      catch(error)
      {
        console.log(error);
      } 
    }
    const getUserPost = async (user) => {
      try {
        const response = await fetch(`/api/posts/user/${user}`);
        setMyPost(JSON.parse(response._bodyInit).posts);
      } catch (error) {
        console.log(error);
      }
    };

    const getFollowedUserPost = async(user) => {
      try {
        const response = await fetch(`/api/posts/user/${user}`);
        const newObj = JSON.parse(response._bodyInit).posts;
        console.log(newObj);
        setFollowedPost((obj)=> [...obj,...newObj])
        return 1;
      } catch (error) {
        console.log(error);
      }
    }

    const EditPostHandler = async(id,user) => 
    {
      console.log(user,"we get the user")
  
      try{
        const response = await fetch(`/api/posts/edit/${id}`,{
          method: 'POST',
          headers : {authorization : localStorage.getItem('encodedToken')},
          body: JSON.stringify({postData:user}),
        })
        console.log(JSON.parse(response._bodyInit));
  //console.log(JSON.parse(response._bodyInit))
setUserFeed1(JSON.parse(response._bodyInit).posts);
setUserFeed(JSON.parse(response._bodyInit).posts);
      } 
      catch(error)
      {
        console.log(error);
      } 
    }

    return(
<PostContext.Provider value={{userFeed,userFeed1,setUserFeed1,setUserFeed, deletePostHandler,getUserPost,myPost,EditPostHandler,getFollowedUserPost,followedPost}}>
{children}
</PostContext.Provider>
    )
}