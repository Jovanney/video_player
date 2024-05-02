import { configureStore, createSlice } from "@reduxjs/toolkit";
import { UseSelector, TypedUseSelectorHook, useSelector } from "react-redux";
import { player } from "./slices/player";

export const store = configureStore({
  reducer: {
    player,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
