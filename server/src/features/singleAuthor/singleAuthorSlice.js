import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleAuthor = createAsyncThunk(
  "singleAuthor",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/authors/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchAuthorComments = createAsyncThunk(
  "singleAuthorComments",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/authors/${id}/comments`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const fetchAuthorStories = createAsyncThunk(
  "singleAuthorStories",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/authors/${id}/stories`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  info: {},
  comments: [],
  stories: [],
};

const singleAuthorSlice = createSlice({
  name: "singleAuthor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleAuthor.fulfilled, (state, action) => {
        // Add user to the state array
        state.info = action.payload;
      })
      .addCase(fetchAuthorComments.fulfilled, (state, action) => {
        // Add user to the state array
        state.comments = action.payload;
      })
      .addCase(fetchAuthorStories.fulfilled, (state, action) => {
        // Add user to the state array
        state.stories = action.payload;
      });
  },
});

export const selectSingleAuthor = (state) => {
  return state.singleAuthor;
};

export default singleAuthorSlice.reducer;
