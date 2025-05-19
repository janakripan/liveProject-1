import React, { Suspense, lazy } from "react";
import { SidebarProvider } from "./contexts/admin/SidebarContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import loader from "./assets/loding animation/Dual Ball@1x-1.0s-200px-200px.svg";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import AutoLogin from "./utils/AutoLogin.jsx";
import { UserDataProvider } from "./contexts/auth/UserDataContext.jsx";
import { DeveloperProvider } from "./contexts/admin/DevApiContext.jsx";
import { ProjectProvider } from "./contexts/admin/ProjectApiContext.jsx";

const AssignedProjectDetails = lazy(() =>
  import("./pages/Admin/assignedProjectDetails/AssignedProjectDetails.jsx")
);
const UserProjectDetails = lazy(() =>
  import("./pages/user/userProjectDetails/UserProjectDetails.jsx")
);
const DeveloperDetailsPage = lazy(() =>
  import("./pages/Admin/Developer Details Page/DeveloperDetailsPage.jsx")
);
const AssignProjectPage = lazy(() =>
  import("./pages/Admin/Assign project/AssignProjectPage.jsx")
);
const EditSubModule = lazy(() =>
  import("./pages/Admin/Edit subModules/EditSubModule.jsx")
);
const ModuleDetails = lazy(() =>
  import("./pages/Admin/module details/ModuleDetails.jsx")
);
const AuthLayout = lazy(() => import("./layouts/auth/AuthLayout.jsx"));
const LoginPage = lazy(() => import("./pages/Auth/LoginPage/LoginPage.jsx"));
const UserDashboardLayout = lazy(() =>
  import("./layouts/user/UserDashboardLayout.jsx")
);
const UserDashboard = lazy(() =>
  import("./pages/user/userDashboard/UserDashboard.jsx")
);
const AdminLayout = lazy(() => import("./layouts/Admin/AdminLayout.jsx"));
const AdminDashboard = lazy(() =>
  import("./pages/Admin/dashboard/AdminDashboard.jsx")
);
const ProjectPage = lazy(() =>
  import("./pages/Admin/projects/ProjectPage.jsx")
);
const AdminProjectDetails = lazy(() =>
  import("./pages/Admin/project details/AdminProjectDetails.jsx")
);
const AddSubModule = lazy(() =>
  import("./pages/Admin/AddSubModule/AddSubModule.jsx")
);
const SubModulePreview = lazy(() =>
  import("./pages/Admin/ModulePreview/SubModulePreview.jsx")
);
const DeveloperPage = lazy(() =>
  import("./pages/Admin/Developer page/DeveloperPage.jsx")
);
const Account = lazy(() => import("./pages/Admin/Account/Account.jsx"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <DeveloperProvider>
          <ProjectProvider>
            <UserDataProvider>
              <SidebarProvider>
                <Suspense
                  fallback={
                    <div className="text-center w-full h-screen bg-Bgprimary flex items-center justify-center ">
                      <img
                        src={loader}
                        alt="loading animation"
                        className="w-20 h-20"
                      />
                    </div>
                  }
                >
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <AutoLogin />
                          <AuthLayout />
                        </>
                      }
                    >
                      <Route index element={<LoginPage />} />
                    </Route>
                    <Route element={<PrivateRoute allowedRoles={["User"]} />}>
                      <Route path="user" element={<UserDashboardLayout />}>
                        <Route index element={<UserDashboard />} />
                        <Route
                          path="/user/:projectId"
                          element={<UserProjectDetails />}
                        />
                      </Route>
                    </Route>

                    <Route
                      element={
                        <PrivateRoute allowedRoles={["Admin", "Manager"]} />
                      }
                    >
                      <Route path="admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="project" element={<ProjectPage />} />
                        <Route
                          path="project/:projectId"
                          element={<AdminProjectDetails />}
                        />
                        <Route
                          path="project/:projectId/modules/:moduleId"
                          element={<ModuleDetails />}
                        />
                        <Route
                          path="project/:projectId/modules/:moduleId/add-submodule"
                          element={<AddSubModule />}
                        />
                        <Route
                          path="project/:projectId/preview"
                          element={<SubModulePreview />}
                        />
                        <Route
                          path="project/:projectId/preview/module/:moduleId/submodule/:subModuleId/edit"
                          element={<EditSubModule />}
                        />

                        <Route path="developer" element={<DeveloperPage />} />
                        <Route
                          path="developer/:developerId"
                          element={<DeveloperDetailsPage />}
                        />

                        <Route path="assign" element={<AssignProjectPage />} />
                        <Route
                          path="assign/:projectId"
                          element={<AssignedProjectDetails />}
                        />

                        <Route path="account" element={<Account />} />
                      </Route>
                    </Route>
                  </Routes>
                </Suspense>
              </SidebarProvider>
            </UserDataProvider>
          </ProjectProvider>
        </DeveloperProvider>
      </BrowserRouter>
    </>
  );
}
