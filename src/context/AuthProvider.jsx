import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
//import { users } from "../backend/db/users";

export const AuthContext = createContext();
export function AuthProvider({children})
{
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [loggedUserId,setLoggedUserId] =  useState("");
    const [loggedUser,setLoggedUser] =  useState("");
    const [currentUser,setCurrentUser] = useState([]);
    //this is to get unfolowed user
    

    const handleSubmit = async(myusername,myPassword) =>
    {
        //console.log(myusername+myPassword);
        try{
            const creds={
                username : myusername,
                password: myPassword
            }
const res = await fetch("/api/auth/login",{
    method: 'POST',
body: JSON.stringify(creds)
})
console.log(res);
const {encodedToken} = await res.json()
setLoggedUserId(JSON.parse(res._bodyInit).foundUser._id)
setLoggedUser(JSON.parse(res._bodyInit).foundUser.username)
localStorage.setItem("encodedToken",encodedToken)
if(!(localStorage.getItem("encodedToken")==="undefined"))
{
    //console.log("token coming");
setIsLoggedIn(true);
navigate("/home");
}
else{
    /*if(myusername.length <=0)
    toast.error("Please enter valid Email Id" );
    else if(myPassword.length <=0)
    toast.error("Please enter Password");*/
    console.log("please enter input");
}

        }
        catch(error)
        {
            //toast.error("Please enter valid Email and password");
            console.log(error);
        }
    }
    
    const handleSignUp = async(uname,password,fname,lname) =>
    {
        try {
            const creds={
                username : uname,
                password: password, 
                firstName: fname,
                lastName: lname
            }
            const res = await fetch("/api/auth/signup",{
                method: 'POST',
            body: JSON.stringify(creds)
            })
            const {encodedToken} = await res.json()
            console.log(encodedToken);
            console.log(JSON.parse(res._bodyInit));
            setLoggedUserId(JSON.parse(res._bodyInit).createdUser._id)
             setLoggedUser(JSON.parse(res._bodyInit).createdUser.username)
if(encodedToken!=="")
{
setIsLoggedIn(true);
navigate("/home");
}

localStorage.setItem("encodedToken",encodedToken)

        }
        catch(error)
        {
            //toast.error("Please fill all the required fields");
            console.log(error);
        }
    }

    const handleFollow = async(id) =>
    {
        try{
            const response = await fetch(`/api/users/follow/${id}`,{
              method: 'POST',
              headers : {authorization : localStorage.getItem('encodedToken')},
            })
      console.log(JSON.parse(response._bodyInit));
   //setUserFeed(JSON.parse(response._bodyInit).posts);
          } 
          catch(error)
          {
            console.log(error);
          } 
    }

    const getUser = async (id) => {
        try {
          const response = await fetch(`/api/users/${id}`);
          setCurrentUser(JSON.parse(response._bodyInit).user);
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <AuthContext.Provider value={{handleSubmit, isLoggedIn, isSignUp,setIsLoggedIn,setIsSignUp,
        handleSignUp,loggedUserId,handleFollow,currentUser,getUser,loggedUser}}>
            {children}
        </AuthContext.Provider>
    )
}