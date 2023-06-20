import "./style.css";
import { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetail = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleMessageClick = () => {
    // Lógica para enviar mensaje al vendedor
    alert("Mensaje enviado al vendedor");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-detail">
      <h2>{product?.name}</h2>
      <div className="product-rating">
        {}
        Valoración: {}
      </div>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
      <button onClick={handleMessageClick}>Enviar Mensaje al Vendedor</button>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
      </button>
      <div className="product-carousel">
        {/* Carrusel con fotos del producto */}
        <Slider {...settings}>
          {product?.images?.map((image, index) => {
            return (
              <div key={index}>
                <img src={image} alt={product?.name} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="related-products">
        <h3>You may also like</h3>
        <ul>
          {/* Lista de productos relacionados */}
          <li>Producto relacionado 1</li>
          <li>Producto relacionado 2</li>
          <li>Producto relacionado 3</li>
        </ul>
      </div>
      <div className="seller-ratings">
        <h3>Valoraciones del Vendedor</h3>
        <ul>
          {/* Lista de valoraciones del vendedor */}
          <li>Valoración 1</li>
          <li>Valoración 2</li>
          <li>Valoración 3</li>
        </ul>
      </div>
    </div>
  );
};
ProductDetail.propTypes = { product: PropTypes.object };
export default ProductDetail;
