import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./Routes/Dashboard/Dashboard.jsx";
import DashboardHome from "./Routes/Dashboard/DashboardHome.jsx";
import AuthHome from "./Routes/Authentication/AuthHome.jsx";
import LoginPage from "./Routes/Authentication/LoginPage.jsx";
import Home from "./Routes/Home/Home.jsx";
import DetailedDashboard from "./Routes/Dashboard/Details page parts/DetailedDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthHome />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="details" element={<DetailedDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
