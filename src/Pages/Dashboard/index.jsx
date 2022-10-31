import React from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import { GrYoutube } from "react-icons/gr";
import { IoIosPhotos } from "react-icons/io";
import { TiNews } from "react-icons/ti";
import { MdSportsCricket } from "react-icons/md";

function index() {
  return (
    <div className="dashboard-wrapper">
      <div className="card-container">
        <div className="top-card">
          <Link className="card videos-card" to={"/videos"}>
            <GrYoutube size={"50%"} className="icon" />
            <span>Videos</span>
          </Link>
          <Link className="card photos-card" to={"/photos"}>
            <IoIosPhotos size={"50%"} className="icon" />
            <span>Photos</span>
          </Link>
        </div>
        <div className="bottom-card">
          <Link className="card videos-card">
            <TiNews size={"50%"} className="icon" />
            <span>News</span>
          </Link>
          <Link className="card photos-card">
            <MdSportsCricket size={"50%"} className="icon" />
            <span>Matches</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
