import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import { MenuMobileSlice } from "../slice/menuMobile";
const store = configureStore({
  reducer: {
    menuMobile: MenuMobileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
