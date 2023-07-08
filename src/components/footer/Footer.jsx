import "./style.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PopUpContext } from "../../context/popUpContext";
import AcceptCookies from "../../pages/cookiesPopUp/CookiesPopUp";
import { useEffect } from "react";

function Footer() {
  const { cookiesActive, showPopUp, setCookiesActive, setShowPopUp } =
    useContext(PopUpContext);

  const [activeIcon, setActiveIcon] = useState(false);

  const handleIconClick = () => {
    setActiveIcon(!activeIcon);
  };

  useEffect(() => {
    const cookies = JSON.parse(localStorage.getItem("cookies"));
    if (!cookies) {
      setCookiesActive(true);
      setShowPopUp(true);
    }
  }, []);

  return (
    <footer>
      {cookiesActive && <div>{showPopUp ? <AcceptCookies /> : null}</div>}

      <nav className="navprincipal">
        <ul className="principal">
          <li>
            <h4>SHOP AND BUY</h4>
            <ul>
              <li>Register</li>
              <li>Upload Item</li>
              <li>All products</li>
            </ul>
          </li>
          <li>
            <h4>RETROTECH</h4>
            <ul>
              <li>About us</li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav className="navRRSS">
        <ul className="social-icon">
          <li>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${activeIcon ? "active" : ""}`}
              onClick={handleIconClick}
            >
              <img
                src="/instagramb.svg"
                alt="instagram"
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${activeIcon ? "active" : ""}`}
              onClick={handleIconClick}
            >
              <img
                src="/twitterb.svg"
                alt="twitter"
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${activeIcon ? "active" : ""}`}
              onClick={handleIconClick}
            >
              <img
                src="/facebookb.svg"
                alt="facebook"
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </Link>
          </li>
          <li>
            <Link
              to="https://api.whatsapp.com/send?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${activeIcon ? "active" : ""}`}
              onClick={handleIconClick}
            >
              <img
                src="/whatsappb.svg"
                alt="whatsapp"
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navTerms">
        <ul className="Terms">
          <li>
            <Link to={"/useConditions"} style={{ color: "black" }}>
              Condiciones de uso
            </Link>
          </li>
          <li>
            <Link to={"/privacy"} style={{ color: "black" }}>
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link to={"/legal"} style={{ color: "black" }}>
              Aviso Legal
            </Link>
          </li>
          <li>
            <Link to={"/cookies"} style={{ color: "black" }}>
              Cookies
            </Link>
          </li>
        </ul>
      </nav>

      <span className="inc"> © 2023, Retrotech.com, Inc. o sus afiliados</span>
      <span className="theend">{""}</span>
    </footer>
  );
}

export default Footer;
