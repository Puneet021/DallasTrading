import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu/menuSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
