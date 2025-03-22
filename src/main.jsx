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
import AdminLayout from "./Routes/AdminPanel/AdminLayout.jsx";
import AdminDashboard from "./Routes/AdminPanel/AdminDashboard/AdminDashboard.jsx";
import { SidebarProvider } from "./contexts/admin/SidebarContext.jsx";
import ProjectPage from "./Routes/AdminPanel/ProjectManagement.jsx/ProjectPage.jsx";
import DeveloperPage from "./Routes/AdminPanel/DeveloperPage/DeveloperPage.jsx";
import Account from "./Routes/AdminPanel/Account/Account.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthHome />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="details" element={<DetailedDashboard />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="project" element={<ProjectPage/>}/>
          <Route path="developer" element={<DeveloperPage/>}/>
          <Route path="account" element={<Account/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
);
