import { USER_INFO } from "../utils/constants";
import { postChatMessage, postDealReview, postNewDeal } from "./dealsService";
import {
  getProducts,
  postNewProduct,
  editProduct,
  uploadProductPictures,
  getProductsByName,
  getProductsByCategotry,
  getProductsByLocation,
  getProductsByPrice,
  getProductDetails,
} from "./productsService";

import axios from "axios";
import {
  addRevomveFromWishlist,
  editOwnProfile,
  getAnyUserProfile,
  getOwnProfile,
  getWishlist,
  loginUser,
  registerUser,
} from "./userService";

const savedUserData = USER_INFO;
const token = savedUserData?.accessToken;

const isBearerTokenRequired = (url) => {
  const parsedUrl = new URL(url);
  const publicRoutes = [
    "/api/v1/users/login",
    "/api/v1/users/:username",
    "/api/v1/users/register",
    "/api/v1/products/search/?",
    "/api/v1/products",
  ];

  if (publicRoutes.includes(parsedUrl.pathname)) {
    return false;
  } else {
    return true;
  }
};

axios.interceptors.request.use(
  function (config) {
    if (token && isBearerTokenRequired(config.url)) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    const {
      data: { data },
    } = response;
    if (data?.accessToken) {
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export {
  getProducts,
  postNewProduct,
  editProduct,
  uploadProductPictures,
  getProductsByName,
  getProductsByCategotry,
  getProductsByLocation,
  getProductsByPrice,
  getProductDetails,
  postNewDeal,
  postChatMessage,
  postDealReview,
  loginUser,
  registerUser,
  getOwnProfile,
  getAnyUserProfile,
  editOwnProfile,
  addRevomveFromWishlist,
  getWishlist,
};
