import "./sidebar.css";
import SidebarLink from "./SidebarLink";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Create from "@material-ui/icons/Create";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Publish from "@material-ui/icons/CloudUploadOutlined";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/ExitToAppOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="links">
        <SidebarLink
          text="Dashboard"
          Icon={HomeIcon}
          className={`${
            window.location.pathname == "/dashboard" ? "active" : "notActive"
          }`}
          href="/dashboard"
        />
        <SidebarLink
          text="Search"
          Icon={SearchIcon}
          className={`${
            window.location.pathname == "/search" ? "active" : "notActive"
          }`}
          href="/search"
        />
        <SidebarLink
          text="Write Article"
          Icon={Publish}
          className={`${
            window.location.pathname == "/create" ? "active" : "notActive"
          }`}
          href="/create"
        />
        <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SidebarLink
          text="My Articles"
          Icon={ListAltIcon}
          className={`${
            window.location.pathname == "/myArticles" ? "active" : "notActive"
          }`}
          href="/myArticles"
        />
        <SidebarLink text="My Profile" Icon={PermIdentityIcon} />
        <SidebarLink text="Log Out" Icon={MoreHorizIcon} />
      </div>
    </div>
  );
}
export default Sidebar;
