import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes.js';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async () => {
    const { data } = await axios.get(routes.newsPath());
    const articles = await data.slice(0, 100).map((id) => axios.get(routes.newsItemPath(id)));
    return (await Promise.all(articles)).map(({ data }) => data);
  },
);

export const fetchNewsItem = createAsyncThunk(
  'news/fetchNewsItem',
  async (id) => {
    const { data } = await axios.get(routes.newsItemPath(id));
    return data;
  },
);

const newsAdapter = createEntityAdapter();
const initialState = newsAdapter
  .getInitialState({ status: 'loading', newsItem: [] });

const newsSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'success';
        newsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchNewsItem.fulfilled, (state, action) => {
        state.newsItem = action.payload;
      })
  }
});

export const selectors = newsAdapter.getSelectors((state) => state.news);
export default newsSlice.reducer;
