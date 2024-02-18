import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './authOperation';

const initialState = {
  user: { name: null, email: null, avatarURL: null, phone: null },
  token: null,
  isLoggedIn: false,
  //   isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAvatarURL: (state, action) => {
      state.user.avatarURL = action.payload;
    },
    uploadUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
    // .addCase(refreshUser.pending, state => {
    //   state.isRefreshing = true;
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // })
    // .addCase(refreshUser.rejected, state => {
    //   state.isRefreshing = false;
    // });
  },
});

export const authReducer = authSlice.reducer;
export const { setAvatarURL, uploadUser } = authSlice.actions;
