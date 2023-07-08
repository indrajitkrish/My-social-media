import { Link } from "react-router-dom"

export function SideBar()
{
    return(
        <>
        <div class="side-tab">
          <Link to="/home"><p>Home</p></Link>
          <Link to="/explore"><p>Explore</p></Link>
          <Link to="/bookmark"><p>Bookmarks</p></Link>
          <Link to="/profile">
            <p>Profile</p>
          </Link>
        </div>
        </>
    )
}