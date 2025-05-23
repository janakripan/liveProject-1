import { createContext, useContext, useEffect, useState } from "react";
import { useGetSubModules } from "../../api/admin/hooks";

const SubmoduleContext = createContext();

export const SubmoduleProvider = ({ children }) => {
  const [submodules, setSubmodules] = useState([]);
  const { data, isLoading, error, refetch } = useGetSubModules([]);

  const safeParseJSON = (value) => {
  try {
    return JSON.parse(value);
  } catch {
    return value; // use raw string if JSON is invalid
  }
};

  useEffect(() => {
    if (data?.data) {
    setSubmodules(
      data.data.map((mod) => ({
        ...mod,
        subModuleDescription: safeParseJSON(mod.subModuleDescription),
        customAttributes: safeParseJSON(mod.customAttributes),
      }))
    );
  }
  }, [data]);

  return (
    <SubmoduleContext.Provider value={{ submodules, isLoading, error, refetch }}>
      {children}
    </SubmoduleContext.Provider>
  );
};

export const useSubmodule = () => useContext(SubmoduleContext);
