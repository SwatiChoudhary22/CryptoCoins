import { configureStore } from "@reduxjs/toolkit";
import { cryptoCoinsAPI } from "../../API/crpyptoCoinsAPI";

export const store = configureStore({
  reducer: {
    [cryptoCoinsAPI.reducerPath]: cryptoCoinsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoCoinsAPI.middleware),
});
