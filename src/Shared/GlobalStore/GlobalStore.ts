import { configureStore } from "@reduxjs/toolkit";

// Reducers
import data from "../../Modules/Data/Store/Data.slice";
import description from "../../Modules/Description/Store/Description.slice";
// Reducers

import { getDataListener } from "../../Modules/Data/Listeners/GetData.listener";

export const store = configureStore({
  reducer: { data, description },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([getDataListener.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
