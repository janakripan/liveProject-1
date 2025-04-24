import { StrictMode, Suspense, lazy } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router"; 
import "./index.css";
import { SidebarProvider } from "./contexts/admin/SidebarContext.jsx";

import App from "./App.jsx";



const ModuleDetails = lazy(()=>import("./Routes/AdminPanel/ProjectManagement.jsx/ModuleDetails.jsx"))
const AuthHome = lazy(() => import("./Routes/Authentication/AuthHome.jsx"));
const LoginPage = lazy(() => import("./Routes/Authentication/LoginPage.jsx"));
const Dashboard = lazy(() => import("./Routes/Dashboard/Dashboard.jsx"));
const UserDashboard = lazy(() => import("./Routes/Dashboard/userDashboard/UserDashboard.jsx"));
const DetailedProject = lazy(() => import("./Routes/Dashboard/DtailedProjectPage/DetailedProject.jsx"));
const AdminLayout = lazy(() => import("./Routes/AdminPanel/AdminLayout.jsx"));
const AdminDashboard = lazy(() => import("./Routes/AdminPanel/AdminDashboard/AdminDashboard.jsx"));
const ProjectPage = lazy(() => import("./Routes/AdminPanel/ProjectManagement.jsx/ProjectPage.jsx"));
const AdminProjectDetails = lazy(() => import("./Routes/AdminPanel/ProjectManagement.jsx/AdminProjectDetails.jsx"));
const AddSubModule = lazy(() => import("./Routes/AdminPanel/ProjectManagement.jsx/AddSubModule.jsx"));
const DeveloperPage = lazy(() => import("./Routes/AdminPanel/DeveloperPage/DeveloperPage.jsx"));
const Account = lazy(() => import("./Routes/AdminPanel/Account/Account.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="text-center w-full h-screen mt-20">Loading...</div>}>
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
              <Route path="project" element={<ProjectPage />} />
              <Route path="project/:projectId" element={<AdminProjectDetails />} />
              <Route path="project/:projectId/modules/:moduleId" element={<ModuleDetails/>} />
              <Route path="project/:projectId/modules/:moduleId/add-submodule" element={<AddSubModule/>}/>
              {/* <Route path="project/:projectId/add-module" element={<AddModule />} /> */}
              <Route path="developer" element={<DeveloperPage />} />
              <Route path="account" element={<Account />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
);