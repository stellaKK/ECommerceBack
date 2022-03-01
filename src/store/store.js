import { configureStore } from '@reduxjs/toolkit';
import clientReducer from "./reducers/clientSlice";
import userReducer from "./reducers/userSlice";
import productReducer from "./reducers/productSlice";

export default configureStore({
  reducer: {
    client: clientReducer, // customers
    user: userReducer, // website management team members
    product: productReducer,
  },
})