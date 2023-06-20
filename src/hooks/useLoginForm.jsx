import { useNavigate } from "react-router";
import { useContext } from "react";
import { PopUpContext } from "../context/popUpContext";
import { useAuth } from "../context/AuthContext";

function useLoginForm() {
  const { user, setUser, login, isAuthenticated } = useAuth();
  const {
    showPopUp,
    setShowPopUp,
    setLoginActive,
    loginActive,
    registerActive,
    setRegisterActive,
  } = useContext(PopUpContext);
  const navigate = useNavigate();
  const submitInfo = async (data) => {
    const { username, password } = data;
    try {
      const response = await login(username, password);
      console.log(response.status);
      if (response.status === "ok") {
        setShowPopUp(false);
        setLoginActive(false);
        // navigate("/profile");
      }
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return {
    showPopUp,
    setShowPopUp,
    setLoginActive,
    loginActive,
    registerActive,
    setRegisterActive,
    submitInfo,
  };
}

export default useLoginForm;
