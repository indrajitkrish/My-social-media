import { useContext, useState } from "react";
import { BookMarkContext } from "../context/BookMarkProvider";
import { SideBar } from "../Components/SideBar";
//import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { RightSideTab } from "../Components/RightSideTab";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { PostContext } from "../context/PostProvider";

export function BookMarkPage() {
  const { bookMark } = useContext(BookMarkContext);
  const {EditPostHandler} =  useContext(PostContext);
  const { loggedUser } = useContext(AuthContext);
  const [showDrop, setDropdown] = useState(false);
  const { addBookMark,deleteBookMark } = useContext(BookMarkContext);
  const [openDialog, handleDisplay] = useState(false);
  const [editPost, setEditPost] = useState({});
    const [edittedContent, setEdittedContent] = useState("");


  const deletePostHandler = () =>
  {

  };
  const handleClose = () => {
    handleDisplay(false);
  };
  const handleSavePost = () => {
    console.log(edittedContent);
    console.log(editPost);
    EditPostHandler(editPost._id, { ...editPost, content: edittedContent });
    console.log(editPost);

    handleClose();
  };
const unfollowSubmit = () => {};
const handleLike = () => {};
const showDropdown = () => {
  setDropdown(!showDrop);
};
const handleBookMark = (id,flag) => {
  if (flag === "false") addBookMark(id);
    else deleteBookMark(id);
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


  return (
    <>
      <div class="home-grid">
        <div>
          <SideBar />
        </div>
          <div class="main-tab">
          <p class="header-home">Bookmark</p>
          {bookMark.map((user) => (
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
          <RightSideTab/>
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
