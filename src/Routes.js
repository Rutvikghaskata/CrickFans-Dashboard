import React from "react";
import "./routes.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard, Videos, Photos } from "./Pages/index";
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
              <Route expect path="/dashboard">
                <Route index element={<Dashboard />} />
              </Route>
              <Route expect path="/videos">
                <Route index element={<Videos />} />
              </Route>
              <Route expect path="/photos">
                <Route index element={<Photos />} />
              </Route>
            </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default RoutesScreen;
