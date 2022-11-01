import React, { useState } from "react";
import "./header.scss";
import { CgMenuRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);
  let location = useLocation();
  const CURRENT_WB_NAME = location.pathname.split("/")[1];
  return (
    <div className={menu ? "header-wrapper menu" : "header-wrapper"}>
      <div className="top-sec">
        <span>
          {CURRENT_WB_NAME === "dashboard"
            ? "Dashboard"
            : CURRENT_WB_NAME === "videos"
            ? "videos"
            : CURRENT_WB_NAME === "photos"
            ? "Photos"
            : null}
        </span>
        <div
          className="menu-section"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <CgMenuRight className="icon" />
        </div>
      </div>
      <ul>
        <li
          className={CURRENT_WB_NAME === "dashboard" && "active"}
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link to={"./dashboard"} className="list-item">
            Dashboard
          </Link>
        </li>
        <li
          className={CURRENT_WB_NAME === "videos" && "active"}
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link to={"./videos"} className="list-item">
            Videos
          </Link>
        </li>
        <li
          className={CURRENT_WB_NAME === "photos" && "active"}
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link to={"./photos"} className="list-item">
            Photos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
