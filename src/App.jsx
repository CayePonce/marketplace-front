import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import UpdateUserForm from "./components/users/updateUserForm/UpdateUserForm";
import { PopUpProvider } from "./context/popUpContext";
import ProfilePage from "./pages/profilePage/ProfilePage";
//import NewProductPage from "./pages/newProductPage/NewProductPage";

function App() {
  return (
    <PopUpProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editprofile" element={<UpdateUserForm />} />

        {/* <Route path="/wishlist" element={<WishList />} /> */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Route path="/newproduct" element={NewProductPage}  />} /> */}
      </Routes>

      <Footer />
    </PopUpProvider>
  );
}

export default App;
