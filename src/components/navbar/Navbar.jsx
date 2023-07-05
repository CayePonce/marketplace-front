import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useHeader from "../../hooks/useHeader";
import userLogo from "../../assets/userLogo.svg";
import logInLogo from "../../assets/log-in.svg";
import addProductLogo from "../../assets/plus-square.svg";
import wishListLogo from "../../assets/heart.svg";
import messageLogo from "../../assets/message-circle.svg";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { returnHome, userLog, wishList, messages, addNewProduct } =
    useHeader();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <button onClick={showSidebar}>hhh</button>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              x
            </Link>
          </li>
          <ul>
            <li>
              <button
                className="btn"
                onClick={() => {
                  userLog();
                }}
              >
                <img src={userLogo} alt="user" />{" "}
                {isAuthenticated ? (
                  <p>Perfil</p>
                ) : (
                  <p>Inicia sesión o registrate</p>
                )}
              </button>
            </li>
            {isAuthenticated && (
              <li>
                <button
                  className="btn"
                  onClick={() => {
                    wishList();
                  }}
                >
                  <img src={wishListLogo} alt="wishList" /> Favoritos
                </button>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <button
                  className="btn"
                  onClick={() => {
                    messages();
                  }}
                >
                  <img src={messageLogo} alt="message button" /> Chats
                </button>
              </li>
            )}
            <li>
              <button
                className="btn"
                onClick={() => {
                  addNewProduct();
                }}
              >
                <img src={addProductLogo} alt="Add new product button" /> Sube
                un nuevo producto
              </button>
            </li>
            {isAuthenticated && (
              <li>
                <button
                  className="btn"
                  onClick={() => {
                    logout();
                  }}
                >
                  <img src={logInLogo} alt="Logout button" /> Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
