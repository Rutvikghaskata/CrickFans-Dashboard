import React from "react";
import "./sidebar.scss";
import Logo from "../../assets/sidebar-logo.png";
import { Link ,useLocation} from "react-router-dom";

function SideBar() {
  let location = useLocation();
  const CURRENT_WB_NAME = location.pathname.split('/')[1];
  return (
    <div className="sidebar-wrapper">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <ul>
        <li className={CURRENT_WB_NAME  === 'dashboard' && 'active'}>
          <Link to={'./dashboard'} className="list-item">Dashboard</Link>
        </li>
        <li className={CURRENT_WB_NAME  === 'videos' && 'active'}>
          <Link to={'./videos'} className="list-item">Videos</Link>
        </li>
        <li className={CURRENT_WB_NAME  === 'photos' && 'active'}>
          <Link to={'./photos'} className="list-item">Photos</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
