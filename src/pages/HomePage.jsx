import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { LikeContext } from "../context/LikeProvider";
import { PostContext } from "../context/PostProvider";
import { AuthContext } from "../context/AuthProvider";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
//import { Link } from "react-router-dom";
import { users } from "../backend/db/users";
import { SideBar } from "../Components/SideBar";
import { BookMarkContext } from "../context/BookMarkProvider";
import { RightSideTab } from "../Components/RightSideTab";
export function HomePage() {
  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);
  const { likeHandler, disLikeHandler } = useContext(LikeContext);
  const {
    userFeed,
    setUserFeed,
    deletePostHandler,
    EditPostHandler,
  } = useContext(PostContext);
  const { loggedUser } = useContext(AuthContext);
  const [openDialog, handleDisplay] = useState(false);
  const [editPost, setEditPost] = useState({});
  const [edittedContent, setEdittedContent] = useState("");
  const { addBookMark, deleteBookMark } = useContext(BookMarkContext);
  const [showDrop, setDropdown] = useState(false);
  const getloggeduser = users.find((obj) => obj.username === loggedUser);
  //console.log(getloggeduser);
  /*const followedUser = getloggeduser.following.map((obj) => obj.username);
  //console.log(followedUser);
    //console.log(unfollowedUser);
    //console.log(userFeed)
    console.log(userFeed);
const loggedUserFeed = posts?.filter((user)=> user.username === loggedUser)
console.log(loggedUserFeed);
    const followingFeed = posts.filter((obj)=> {
      return followedUser.find((user)=> user === obj.username)
    })
    const myUserFeed = [...followingFeed,...loggedUserFeed];
    console.log(myUserFeed);
    setUserFeed1(myUserFeed);*/
    //console.log(newFeed);
//const [unfol,setUnfol] = useState(unfollowedUser.filter((fol)=> fol.username!== loggedUser))
//console.log(unfol);
  //const myfeed = followedUser.map((fol)=> getFollowedUserPost(fol) )
  //console.log(myfeed);
  //console.log(followedPost);
  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };
  const dialogStyle = {
    padding: "20px",
  };

  const handleEdit = (user) => {
    setEditPost(user);
    setEdittedContent(editPost.content);
    openDialogBox();
  };

  const handleSavePost = () => {
    console.log(edittedContent);
    console.log(editPost);
    EditPostHandler(editPost._id, { ...editPost, content: edittedContent });
    console.log(editPost);

    handleClose();
  };
  console.log(loggedUser);
  function handleButton(btnNum) {
    /*const arr = userFeed.map(obj =>
        {
          return {...obj,createdAt: new Date(obj.createdAt) }
        })*/
    const arr = [...userFeed];
    if (btnNum === "1") {
      const newARR = arr.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
      setUserFeed(newARR);
    } else if (btnNum === "3") {
      const newARR = arr.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      console.log(newARR);
      setUserFeed(newARR);
    } else if (btnNum === "2") {
      const newARR = arr.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      console.log(newARR);
      setUserFeed(newARR);
    }
  }
  function handleLike(id, flag) {
    if (flag === "false") likeHandler(id);
    else disLikeHandler(id);
  }
  function unfollowSubmit(id) {}
  function handleSubmit(event) {
    event.preventDefault();
    console.log(newPost);
    setNewPost("");

    const newObj = {
      _id: uuid(),
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      likes: {
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      picture: "../Assets/profile1.jpg",
      username: "adarshbalika",
      createdAt: "15 March,2023",
    };
    const updatecontent = { ...newObj, content: newPost };
    setUserFeed((obj) => [...obj, updatecontent]);
  }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleBookMark = (id,flag) => {
    if (flag === "false") addBookMark(id);
      else deleteBookMark(id);
  };
  const showDropdown = () => {
    setDropdown(!showDrop);
  };
  console.log(editPost);
  return (
    <>
      <div class="home-grid">
        <div>
          <SideBar />
        </div>
        <div class="main-tab">
          <p class="header-home">Home</p>
          <div class="newpost-container">
            <span>
              <img
                src={getloggeduser.picture}
                alt="img"
                class="profile-picture"
              />
            </span>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div class="getnewpost-container">
                <input 
                  style={{ color: "red", border: "none", width:"100%", padding:"10px" }}
                  type="text"
                  placeholder="what's happening"
                  id="newPost"
                  name="newPost"
                  value={newPost}
                  onChange={(event) => setNewPost(event.target.value)}
                />
              </div>
              <div>
                <label>
                  <input
                    type="file"
                    accept="image/*"
                    class="hidden"
                    onChange={onImageChange}
                  />
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    width={"50px"}
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="InsertPhotoIcon"
                  >
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"></path>
                  </svg>
                </label>
                <button
                  type="submit"
                  class="post-button"
                  disabled=""
                >
                  Post
                </button>
              </div>
            </form>
            <h3>{newPost}</h3>
          </div>
          <div class="filter-container">
          <button onClick={() => handleButton("1")}>Trending</button>
          <button onClick={() => handleButton("2")}>Latest</button>
          <button onClick={() => handleButton("3")}>Oldest</button>
          </div>
          {userFeed.map((user) => (
            <div class="feed-container">
              <div>
              <img src={user.picture} alt="profile" class="profile-picture" />
              </div>
              <div>
                <div className="user-data-container">
                <div>
              <span>{user.username}</span>
              </div><div>
              <span>{user.createdAt}</span>
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
                    {user.username === loggedUser ? (
                      <div class="dropdown">
                        <ul>
                          <li onClick={() => handleEdit(user)}>Edit Post</li>
                          <li onClick={() => deletePostHandler(user._id)}>
                            Delete Post
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div class="dropdown">
                        <ul>
                          <li onClick={() => unfollowSubmit(user.id)}>
                            Unfollow
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
              </div>
              <p class="user-content">{user.content}</p>

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
                        user.like
                          ? () => handleLike(user._id, "true")
                          : () => handleLike(user._id, "false")
                      }
                    >
                      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                  </button>
                  <span class="ml-1">{user.likes.likeCount}</span>
                </div>
                <div>
                  <svg
                    onClick={
                      user.bookmark
                        ? () => handleBookMark(user._id, "true")
                        : () => handleBookMark(user._id, "false")
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 384 512"
                    style={{color: user.bookmark? "black" : ""}}
                  >
                    <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                  </svg>
                </div>
              </div>
              </div>
            </div>
          ))}
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
  );
}
