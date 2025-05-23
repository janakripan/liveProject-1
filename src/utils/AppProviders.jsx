import { DeveloperProvider } from "../contexts/admin/DevApiContext";
import { ModuleProvider } from "../contexts/admin/ModulesApiContext";
import { ProjectProvider } from "../contexts/admin/ProjectApiContext";
import { SidebarProvider } from "../contexts/admin/SidebarContext";
import { SubmoduleProvider } from "../contexts/admin/SubmodulesApiContext";
import { UserDataProvider } from "../contexts/auth/UserDataContext";

// AppProviders.jsx
export default function AppProviders({ children }) {
  return (
    <DeveloperProvider>
      <ProjectProvider>
        <UserDataProvider>
          <ModuleProvider>
            <SubmoduleProvider>
              <SidebarProvider>{children}</SidebarProvider>
            </SubmoduleProvider>
          </ModuleProvider>
        </UserDataProvider>
      </ProjectProvider>
    </DeveloperProvider>
  );
}
