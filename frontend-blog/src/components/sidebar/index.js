import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoBranch from "@assets/logo.png";
import MenuIcon from "@assets/menu.png";
import "./index.scss";
import { routePath } from "@routes/routes";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className={isOpen ? "sidebar openSidebar" : "sidebar"}>
        <div className="logo-content">
          <img src={LogoBranch} alt="logo-branch" width="70%" />
        </div>
        <div className="sub-menu">
          <NavLink activeClassName="active" exact to={routePath.user}>
            User
          </NavLink>
          <NavLink activeClassName="active" exact to="">
            Post
          </NavLink>
        </div>
      </div>

      <div
        className={isOpen ? "btn-openSidebar openBtn" : "btn-openSidebar"}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <img src={MenuIcon} alt="icon-menu" />
      </div>
    </div>
  );
};

export { SideBar };
