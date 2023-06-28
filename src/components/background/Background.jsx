import { AiOutlineSearch } from "react-icons/ai";
import recording from "../../assets/Recording.mp4";
import "./styles.css";
import { useContext } from "react";
import { PopUpContext } from "../../context/PopUpContext";
import Filter from "../filter/Filter";

function Background() {
  const { filterActive, setFilterActive, showPopUp, setShowPopUp } =
    useContext(PopUpContext);
  const handleButtonClick = () => {
    setFilterActive(true);
    setShowPopUp(true);
  };
  return (
    <div className="carousel-container">
      <div className="video-container">
        <video
          className="w-full h-full object-cover"
          src={recording}
          autoPlay
          muted
        />
      </div>
      {filterActive && <div>{showPopUp ? <Filter /> : null}</div>}
      <div className="form-container">
        <form className="search-bar" size={12000}>
          <input
            className="search-input"
            type="text"
            placeholder="Search products"
          />
          <button className="search-icon">
            <AiOutlineSearch size={30} className="icon" />
          </button>
        </form>
        <div>
          <button onClick={handleButtonClick}>Filtrar</button>
        </div>
      </div>
    </div>
  );
}

export default Background;
