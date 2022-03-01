import { createSlice} from '@reduxjs/toolkit';
import { LOADING, SUCCESS, ERROR, IDLE } from "../../components/Constants";


export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    status: IDLE,
    error: null,
  },
  reducers: {
    getProductList: (state) => {
      state.status = LOADING;
    },
    getProductListSuccess: (state, action) => {
      state.status = SUCCESS;
      state.productList = action.payload;
      state.error = null;
    },
    // handle error message when fetch data failed
    getDataError: (state, action) => {
      state.status = ERROR;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProductList, getProductListSuccess, getDataError } = productSlice.actions;



export default productSlice.reducer;