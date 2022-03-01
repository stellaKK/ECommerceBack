import { createSlice} from '@reduxjs/toolkit';
import { LOADING, SUCCESS, ERROR, IDLE } from "../../components/Constants";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetail: { username: localStorage.getItem("username") },
    status: IDLE,
    error: null,
    isAuthUser: !!localStorage.getItem("username"),
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    signIn: (state) => {
      // state.status = LOADING;

      /*--- below is for local test only --*/
      state.status = SUCCESS;
      state.error = null;
      state.isAuthUser = true;
      localStorage.setItem('username', "Maimi");
    },
    signInSuccess: (state, action) => {
      state.status = SUCCESS;
      state.userDetail = action.payload;
      state.error = null;
      state.isAuthUser = true;
      // once login successfully, save username in local storage with expired time
      localStorage.setItem('username', action.payload.username);
    },
    // handle error message when fetch data failed
    signInError: (state, action) => {
      state.status = ERROR;
      state.error = action.payload;
      state.isAuthUser = false;
    },
    signOut: (state) => {
      // state.status = LOADING;

      /*--- below is for local test only --*/
      state.status = SUCCESS;
      state.userDetail = {};
      state.error = null;
      state.isAuthUser = false;
      localStorage.removeItem("username");
    },
    signOutSuccess: (state) => {
      state.status = SUCCESS;
      state.userDetail = {};
      state.error = null;
      state.isAuthUser = false;
      localStorage.removeItem("username");
    }
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signInSuccess, signInError,
  signOut, signOutSuccess } = userSlice.actions;



export default userSlice.reducer;