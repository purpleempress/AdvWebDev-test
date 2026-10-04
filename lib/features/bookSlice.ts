import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../app/data";
import type { VolumeItem } from "../../app/data";

// 1. Define the State interface
export interface State {
  books: VolumeItem[];
}

const initialState: State = {
  books: []
} as any;

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearList: (state: State) => {
      state.books = [];
    },
    resetList: (state) => {
      state.books = data.items;
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book: VolumeItem) => book.id !== id);
    }
  },
  extraReducers: (buider) => {}
});

export const { clearList, resetList, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
