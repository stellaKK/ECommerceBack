import { createSlice} from '@reduxjs/toolkit';
import { LOADING, SUCCESS, ERROR, IDLE } from "../../components/Constants";


export const clientSlice = createSlice({
  name: 'client',
  initialState: {
    clientList: [],
    clientDetail: {},
    clientId: "",
    status: IDLE,
    uploadStatus: IDLE,
    error: null,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    getClientList: (state) => {
      state.status = LOADING;
      state.clientId = "";
    },
    getClientListSuccess: (state, action) => {
      state.status = SUCCESS;
      state.clientList = action.payload;
    },
    getClientDetail: (state) => {
      state.status = LOADING;
      state.error = null;
    },
    getClientDetailSuccess: (state, action) => {
      state.status = SUCCESS;
      state.clientDetail = action.payload;
    },
    // handle error message when fetch data failed
    getClientError: (state, action) => {
      state.status = ERROR;
      state.uploadStatus = ERROR;
      state.error = action.payload;
    },
    updateClientDetail: (state) => {
      state.uploadStatus = LOADING;
    },
    updateClientDetailSuccess: (state, action) => {
      state.uploadStatus = SUCCESS;
      state.clientDetail = action.payload;
    },

    // create a new client
    createNewClient: (state) => {
      state.uploadStatus = LOADING;
      state.error = null;
    },
    createNewClientSuccess: (state, action) => {
      state.uploadStatus = SUCCESS;
      state.clientId = action.payload;
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getClientList, getClientListSuccess,
  getClientDetail, getClientDetailSuccess, getClientError,
  updateClientDetail, updateClientDetailSuccess,
  createNewClient, createNewClientSuccess} = clientSlice.actions;



export default clientSlice.reducer;