import { useContext, useState} from "react";
import { users } from "../backend/db/users";
import { AuthContext } from "../context/AuthProvider";


export function RightSideTab()
{
    const {loggedUser,handleFollow} = useContext(AuthContext);
    const getloggeduser = users.find((obj) => obj.username === loggedUser);
    //console.log(getloggeduser);
    const followedUser = getloggeduser.following.map((obj) => obj.username);
    //console.log(followedUser);
      const unfollowedUser = users.filter((obj)=> {
          return !followedUser.find((user)=> user === obj.username)
      } )
  const [unfol,setUnfol] = useState(unfollowedUser.filter((fol)=> fol.username!== loggedUser))

  const handleFollowUser = (id) =>
  {
    setUnfol(unfol.filter((fol)=> fol._id !== id))
    handleFollow(id)
  }
    
  //console.log(unfol);   
    return(
        <>
        <div class="right-container">
        <div>
          <input type="search" />
          <div>
            {unfol.map((newUs) => {
              return (
                <div>
                  <span>
                    <img
                      src={newUs.picture}
                      alt="profile"
                      class="profile-picture"
                    />
                    {newUs.username}
                  </span>
                  <button onClick={() => handleFollowUser(newUs._id)}>
                    Follow+
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        </>
    )
}