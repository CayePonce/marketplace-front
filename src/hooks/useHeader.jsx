import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PopUpContext } from "../context/popUpContext";
import LoginPopUp from "../pages/loginPopUp/LoginPopUp";

function useHeader() {
  const navigate = useNavigate();
  const { showPopUp, setShowPopUp } = useContext(PopUpContext);

  window.addEventListener("click", ({ target }) => {
    if (target.className === "popup") setShowPopUp(false);
  });

  const returnHome = () => {
    navigate("/");
  };
  const userLog = () => {
    const user = localStorage.getItem("userInfo");
    user ? navigate("/profile") : setShowPopUp(true);
    showPopUp ? LoginPopUp : null;
  };
  const wishList = () => {
    navigate("/wishlist");
  };
  const messages = () => {};
  const search = () => {};
  const addNewProduct = () => {
    navigate("/newproduct");
  };
  return { returnHome, userLog, wishList, messages, search, addNewProduct };
}
export default useHeader;
