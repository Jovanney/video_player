import { configureStore, createSlice } from "@reduxjs/toolkit";
import { UseSelector, TypedUseSelectorHook, useSelector } from "react-redux";

const todoSlide = createSlice({
  name: "todo",
  initialState: [
    "Estudar redux toolkit",
    "Estudar next.js",
    "estudar typescript",
  ],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlide.reducer,
  },
});

export const { add } = todoSlide.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
