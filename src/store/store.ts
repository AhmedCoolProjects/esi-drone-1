import { configureStore } from "@reduxjs/toolkit";
import { coordsReducer } from "./reducers";

export const appStore = configureStore({
  reducer: {
    coords: coordsReducer,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
