import { configureStore } from '@reduxjs/toolkit';
import {postReducer} from "../features/todolist/todolistSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
