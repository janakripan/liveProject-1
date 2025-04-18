import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./Routes/Dashboard/Dashboard.jsx";
import AuthHome from "./Routes/Authentication/AuthHome.jsx";
import LoginPage from "./Routes/Authentication/LoginPage.jsx";
import Home from "./Routes/Home/Home.jsx";
import AdminLayout from "./Routes/AdminPanel/AdminLayout.jsx";
import AdminDashboard from "./Routes/AdminPanel/AdminDashboard/AdminDashboard.jsx";
import { SidebarProvider } from "./contexts/admin/SidebarContext.jsx";
import ProjectPage from "./Routes/AdminPanel/ProjectManagement.jsx/ProjectPage.jsx";
import DeveloperPage from "./Routes/AdminPanel/DeveloperPage/DeveloperPage.jsx";
import Account from "./Routes/AdminPanel/Account/Account.jsx";
import UserDashboard from "./Routes/Dashboard/userDashboard/UserDashboard.jsx";
import DetailedProject from "./Routes/Dashboard/DtailedProjectPage/DetailedProject.jsx";
import AdminProjectDetails from "./Routes/AdminPanel/ProjectManagement.jsx/AdminProjectDetails.jsx";
import AddModule from "./Routes/AdminPanel/ProjectManagement.jsx/AddModule.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthHome />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="user" element={<Dashboard />}>
          <Route index element={<UserDashboard />} />
          <Route path="/user/:projectId" element={<DetailedProject />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="project" element={<ProjectPage/>}/>
          <Route path="project/:projectId" element={<AdminProjectDetails />} />
          <Route path="project/:projectId/add-module" element={<AddModule />} />
          <Route path="developer" element={<DeveloperPage/>}/>
          <Route path="account" element={<Account/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
);
