import React from "react";
import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./topbar.css"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <span className="logo"> Media App</span>
      </div>

      <div className="topbarcenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input
            placeholder="search for friend feed or posts"
            className="searchBarInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="tobarIcons">
          <div className="topbarIconItem">
            <Person className="Icon"/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat className="Icon"/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications className="Icon"/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
