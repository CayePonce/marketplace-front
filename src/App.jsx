import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
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
  } = useApp();
  return (
    <PopUpProvider>
      {/*<Themeprovider>*/}
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                wishlistArray={wishlistArray}
                handleAddRemoveFromWishlist={handleAddRemoveFromWishlist}
              />
            }
          />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/editproduct" element={<UpdateProductForm />} />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                handleAddRevomveFromWishlist={handleAddRemoveFromWishlist}
              />
            }
          />
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
            path="/pruebas"
            element={<MuiNewProductForm userInfo={userInfo} />}
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
        <Footer />
      </div>
      {/*</Themeprovider>*/}
    </PopUpProvider>
  );
}

export default App;
