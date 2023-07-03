import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import { PopUpProvider } from "./context/PopUpContext";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Wishlist from "./pages/wishlist/Wishlist";
import UpdateProductForm from "./components/products/updateProductForm/UpdateProductForm";
import Header from "./components/header/Header";
import UseConditions from "./components/useConditions/UseConditions";
import Privacy from "./components/privacy/Privacy";
import Legal from "./components/legal/Legal";
import Cookies from "./components/cookies/Cookies";
import useApp from "./hooks/useApp";
import NotFound from "./pages/notFound/NotFound";
import SingleProduct from "./pages/singleProduct/SingleProduct";
//import ThemeProvider from "./context/ThemeContext";
import BestSellers from "./pages/bestsellers/BestSellers";
import AcceptCookies from "./pages/cookiesPopUp/CookiesPopUp";
import CookiesPopUp from "./pages/cookiesPopUp/CookiesPopUp";
import MuiNewProductForm from "./components/mui/muiNewProductForm/muiNewProductForm";
import SearchResult from "./pages/searchResult/SearchResult";
import Chat from "./components/chat/Chat";
import ValidateEmail from "./pages/validateEmail/ValidateEmail";
import SingleDeal from "./pages/SingleDeal/SingleDeal";
import ProductDetail from "./components/products/ProductDetail/ProductDetail";
import ErrorProvider from "./context/ErrorContext";

function App() {
  const {
    isAuthenticated,
    userInfo,
    setUserInfo,
    selectedField,
    setSelectedField,
    wishlist,
    wishlistArray,
    handleAddRemoveFromWishlist,
    handleProductChanges,
    locationLat,
    locationLong,
  } = useApp();
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
              wishlistArray={wishlistArray}
              handleProductChanges={handleProductChanges}
              locationLat={locationLat}
              locationLong={locationLong}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <SingleProduct
              handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
              wishlistArray={wishlistArray}
            />
          }
        />

        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/editproduct" element={<UpdateProductForm />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              wishlistArray={wishlistArray}
              handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
            />
          }
        />
        <Route path="/validate/:code" element={<ValidateEmail />} />
        {
          <Route
            path="/profile"
            element={
              isAuthenticated && (
                <ProfilePage
                  userInfo={userInfo}
                  setSelectedField={setSelectedField}
                  selectedField={selectedField}
                  setUserInfo={setUserInfo}
                />
              )
            }
          />
        }
        <Route
          path="/newproduct"
          element={<MuiNewProductForm userInfo={userInfo} />}
        />
        <Route
          path="/deals/:idDeal"
          element={<SingleDeal userInfo={userInfo} setUserInfo={setUserInfo} />}
        />

        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/editproduct" element={<UpdateProductForm />} />
        <Route path="/useConditions" element={<UseConditions />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route exact path="/search" element={<SearchResult />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
