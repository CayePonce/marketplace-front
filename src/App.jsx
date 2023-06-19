import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import { PopUpProvider } from "./context/popUpContext";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Wishlist from "./pages/wislist/Wishlist";
import UpdateProductForm from "./components/products/updateProductForm/UpdateProductForm";
import Header from "./components/Header/Header";
import { useAuth } from "./context/AuthContext";
import { getOwnProfile } from "./services";

function App() {
  const { isAuthenticated } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [selectedField, setSelectedField] = useState("");
  useEffect(() => {
    if (isAuthenticated) {
      const getInfo = async () => {
        try {
          const response = await getOwnProfile();
          response.status === "ok" && setUserInfo(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getInfo();
    } else setUserInfo({});
    console.log("hola");
  }, [isAuthenticated]);
  return (
    <PopUpProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/wishlist" element={<Wishlist />} />

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
        <Route path="/editproduct" element={<UpdateProductForm />} />
      </Routes>

      <Footer />
    </PopUpProvider>
  );
}

export default App;
