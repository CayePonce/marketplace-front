import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import {
  addRevomveFromWishlist,
  getOwnProfile,
  getWishlist,
} from "../services";

function useApp() {
  const { isAuthenticated } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const [selectedField, setSelectedField] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [wishlistArray, setWishlistArray] = useState([]);
  useEffect(() => {
    if (isAuthenticated) {
      const getInfo = async () => {
        try {
          const response = await getOwnProfile();
          response?.status === "ok" && setUserInfo(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      getInfo();
    } else setUserInfo({});
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) setWishlist([]);
    else {
      const getInfo = async () => {
        try {
          const { data } = await getWishlist();
          console.log(data);
          setWishlist(data);
        } catch (error) {
          console.error(error);
        }
      };
      getInfo();
    }
  }, [isAuthenticated]);
  useEffect(() => {
    if (!isAuthenticated) {
      setWishlistArray([]);
    } else {
      const arr = wishlist.map((item) => {
        return item.id;
      });
      console.log(arr);
      setWishlistArray(arr);
    }
  }, [wishlist, isAuthenticated]);
  const handleAddRevomveFromWishlist = async (idProduct) => {
    try {
      await addRevomveFromWishlist(idProduct);
      const { data } = await getWishlist();
      setWishlist(data);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    isAuthenticated,
    userInfo,
    setUserInfo,
    selectedField,
    setSelectedField,
    wishlist,
    setWishlist,
    wishlistArray,
    setWishlistArray,
    handleAddRevomveFromWishlist,
  };
}

export default useApp;
