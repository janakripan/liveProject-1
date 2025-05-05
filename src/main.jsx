import { StrictMode, Suspense, lazy } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router"; 
import "./index.css";
import { SidebarProvider } from "./contexts/admin/SidebarContext.jsx";

import App from "./App.jsx";






const AssignedProjectDetails = lazy(()=>import("./Routes/AdminPanel/Assign Project/AssignedProjectDetails.jsx"))
const UserProjectDetails = lazy(()=>import("./Routes/Dashboard/DtailedProjectPage/UserProjectDetails.jsx"))
const DeveloperDetailsPage = lazy(()=>import("./Routes/AdminPanel/DeveloperPage/DeveloperDetailsPage.jsx"))
const AssignProjectPage = lazy(()=>import("./Routes/AdminPanel/Assign Project/AssignProjectPage.jsx"))
const EditSubModule = lazy(()=>import("./Routes/AdminPanel/ProjectManagement.jsx/components/EditSubModule.jsx"))
const ModuleDetails = lazy(()=>import("./Routes/AdminPanel/ProjectManagement.jsx/ModuleDetails.jsx"))
const AuthHome = lazy(() => import("./Routes/Authentication/AuthHome.jsx"));
const LoginPage = lazy(() => import("./Routes/Authentication/LoginPage.jsx"));
const Dashboard = lazy(() => import("./Routes/Dashboard/Dashboard.jsx"));
const UserDashboard = lazy(() => import("./Routes/Dashboard/userDashboard/UserDashboard.jsx"));
const AdminLayout = lazy(() => import("./Routes/AdminPanel/AdminLayout.jsx"));
const AdminDashboard = lazy(() => import("./Routes/AdminPanel/AdminDashboard/AdminDashboard.jsx"));
const ProjectPage = lazy(() => import("./Routes/AdminPanel/ProjectManagement.jsx/ProjectPage.jsx"));
const AdminProjectDetails = lazy(() => import("./Routes/AdminPanel/ProjectManagement.jsx/AdminProjectDetails.jsx"));
const AddSubModule = lazy(() => import("./Routes/AdminPanel/ProjectManagement.jsx/AddSubModule.jsx"));
const SubModulePreview = lazy(() => import("./Routes/AdminPanel/ProjectManagement.jsx/SubModulePreview.jsx"));
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
              <Route path="/user/:projectId" element={<UserProjectDetails/>} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="project" element={<ProjectPage />} />
              <Route path="project/:projectId" element={<AdminProjectDetails />} />
              <Route path="project/:projectId/modules/:moduleId" element={<ModuleDetails/>} />
              <Route path="project/:projectId/modules/:moduleId/add-submodule" element={<AddSubModule/>}/>
              <Route path="project/:projectId/preview" element={<SubModulePreview/>} />
              <Route path="project/:projectId/preview/module/:moduleId/submodule/:subModuleId/edit" element={<EditSubModule />} />

              <Route path="developer" element={<DeveloperPage />} />
              <Route path="developer/:developerId" element={<DeveloperDetailsPage/>}/>

              <Route path="assign" element={<AssignProjectPage/>}/>
              <Route path="assign/:projectId" element={<AssignedProjectDetails/>}/>

              <Route path="account" element={<Account />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
);