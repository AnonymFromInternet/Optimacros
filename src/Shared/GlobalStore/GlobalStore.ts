import { configureStore } from "@reduxjs/toolkit";

// Reducers
import data from "../../Modules/Data/Store/Data.slice";
import { getDataListener } from "../../Modules/Data/Listeners/GetData.listener";
// Reducers

export const store = configureStore({
  reducer: { data: data },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([getDataListener.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
