import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import loader from "../assets/loding animation/Dual Ball@1x-1.0s-200px-200px.svg";

function AutoLogin() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const role = localStorage.getItem("token");

    if (userData && role) {
      if (role === "User") navigate("/user");
      else if (role === "admin" || role === "manager") navigate("/admin");
      else navigate("/");
    } else {
      setChecking(false);
    }
  }, [navigate]);

  if (checking)
    return (
      <div className="text-center w-full h-screen bg-Bgprimary flex items-center justify-center ">
        <img src={loader} alt="loading animation" className="w-20 h-20" />
      </div>
    );

  return null;
}

export default AutoLogin;
