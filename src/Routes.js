import React from "react";
import "./routes.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard, Videos, Photos,ErrorPage } from "./Pages/index";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

function RoutesScreen() {
  return (
    <div className="routes-wrapper">
      <BrowserRouter>
        <div className="routes-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main-content">
            <Header />
            <div className="main-screens">
            <Routes>
              <Route expect path="/dashboard" element={<Dashboard />} />
              <Route expect path="/videos" element={<Videos />} />
              <Route expect path="/photos" element={<Photos />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default RoutesScreen;
