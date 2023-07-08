import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Link } from "react-router-dom";
import { PostContext } from "../context/PostProvider";
import { SideBar } from "../Components/SideBar";
import { RightSideTab } from "../Components/RightSideTab";
import { BookMarkContext } from "../context/BookMarkProvider";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { LikeContext } from "../context/LikeProvider";
//import { useState } from "react";
//import { users } from "../backend/db/users";


export function UserProfile()
{
    const {loggedUserId,getUser,currentUser,loggedUser, setIsLoggedIn} = useContext(AuthContext);
    const {userFeed,getUserPost,myPost,EditPostHandler,deletePostHandler} = useContext(PostContext);
    const {addBookMark} = useContext(BookMarkContext);
    const { likeHandler, disLikeHandler } = useContext(LikeContext);
    const [openDialog, handleDisplay] = useState(false);
    const [showDrop, setDropdown] = useState(false);
    const [editPost, setEditPost] = useState({});
    const [edittedContent, setEdittedContent] = useState("");
   // const [currentUser,setCurrentUser] = useState([users.find((user)=> user.username === loggedUser)])
   // const [myPost,setMyPost] = useState(userFeed.filter((user)=> user._id === loggedUserId));1


    console.log(userFeed);

    

    useEffect(()=>
    {
       getUser(loggedUserId);
       getUserPost(loggedUser);
    },[])
    

    console.log(currentUser);
    console.log(myPost);
    function unfollowSubmit(id) {}
    const handleClose = () => {
      handleDisplay(false);
    };
    const showDropdown = () => {
      setDropdown(!showDrop);
    };
    const handleSavePost = () => {
      console.log(edittedContent);
      console.log(editPost);
      EditPostHandler(editPost._id, { ...editPost, content: edittedContent });
      console.log(editPost);
  
      handleClose();
    };
    const handleEdit = (user) => {
      setEditPost(user);
      setEdittedContent(editPost.content);
      openDialogBox();
    };
    const openDialogBox = () => {
      handleDisplay(true);
    };
    const dialogStyle = {
      padding: "20px",
    };
    function handleLike(id, flag) {
      if (flag === "false") likeHandler(id);
      else disLikeHandler(id);
    }
    const handleLogout = () =>
    {
      setIsLoggedIn(false);
    }
    const handleBookMark = (id) => {
      addBookMark(id);
    };

    return(
        <>
        <div class="home-grid">
        <div>
            <SideBar />
          </div>
          <div class="main-tab">
            <div>
            <div class="username-profile">
                <h3 ><Link to="/home"><span>&#x2190;</span></Link>{currentUser.username}</h3><span>{myPost.length} Post</span>
            </div>
            <div>
<div class="feed-container">
<div>
              <img src={currentUser.picture} alt="profile" class="profile-picture" />
              </div>
            <div >
            <div class="username-and-edit">
              <div class="userAt">
                 <span class="boldFont">{currentUser.username}</span>
                 <span>@{currentUser.username}</span>
                 </div>
                 <div>
                 <button>Edit Profile</button>
                <button onClick={()=>handleLogout()}><Link to="/">Logout</Link></button>
                </div>
                </div>
                <div>
                 <p>{currentUser.bio}</p>
                 <a href={currentUser.github}>{currentUser.github}</a>
                 </div>
                 <div>
                 <p>{currentUser.followers} Followers || {currentUser.following} Following</p>
                 </div>
            
            <div>
                
            </div>
            </div>
</div>
            </div>
            </div>
          <div>
            {
                myPost.map((post)=>
                {
                    return(<div class="feed-container">
                        <div>
              <img src={post.picture} alt="profile" class="profile-picture" />
              </div><div>
                <div className="user-data-container">
                <div>
              <span>{post.username}</span>
              </div><div>
              <span>{post.createdAt}</span>
              </div>
              <div class="container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  onClick={() => showDropdown()}
                >
                  <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                </svg>
                {showDrop && (
                  <div>
                    {post.username === loggedUser ? (
                      <div class="dropdown">
                        <ul>
                          <li onClick={() => handleEdit(post)}>Edit Post</li>
                          <li onClick={() => deletePostHandler(post._id)}>
                            Delete Post
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div class="dropdown">
                        <ul>
                          <li onClick={() => unfollowSubmit(post.id)}>
                            Unfollow
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
              </div>
              <p class="user-content">{post.content}</p>

              <div class="likeandbookmark-container">
                <div>
                  <button class="cursor-pointer bg-dark rounded-full ">
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-primary css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="FavoriteIcon"
                      onClick={
                        post.like
                          ? () => handleLike(post._id, "true")
                          : () => handleLike(post._id, "false")
                      }
                    >
                      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                  </button>
                  <span class="ml-1">{post.likes.likeCount}</span>
                </div>
                <div>
                  <svg
                    onClick={() => handleBookMark(post._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                  </svg>
                </div>
              </div>
              </div>
                      </div>

                    )
                })
            }
          </div>
          </div>
          <div>
          <RightSideTab/>
        </div>
        </div>
        <Dialog style={dialogStyle} onClose={handleClose} open={openDialog}>
        <DialogTitle> Edit post </DialogTitle>
        <br></br>
        <span>
          <img src={editPost.picture} alt="profile" class="profile-picture" />
          {editPost.username}
        </span>
        <textarea
          value={edittedContent}
          contentEditable="true"
          onChange={(e) => setEdittedContent(e.target.value)}
        ></textarea>
        <button onClick={() => handleSavePost()}>Save Post</button>
      </Dialog>
        </>
    )
}