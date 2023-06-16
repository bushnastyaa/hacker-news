import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes.js';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (id) => {
    const { data } = await axios.get(routes.newsItemPath(id))
    const comments = data.kids.map(id => axios.get(routes.commentsPath(id)));
    return (await Promise.all(comments)).map(({ data }) => data);
  },
);

export const fetchCommentKids = createAsyncThunk(
  'comments/fetchCommentKids',
  async ({ kids, id }) => {
    const commentKids = [];
    const getKids = async (kids) => {
      for (const kidsId of kids) {
        const { data } = await axios.get(routes.commentsPath(kidsId));
        if (!data.kids) {
          commentKids.push(data);
        } else {
          commentKids.push(data);
          await getKids(data.kids);
        }
      }
    };
    await getKids(kids);
    return { id, commentKids };
  },
);

const commentsAdapter = createEntityAdapter();
const initialState = commentsAdapter
  .getInitialState({ status: 'loading', commentKids: {} });

const commentsSlice = createSlice({
  name: 'messages',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'success';
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchCommentKids.fulfilled, (state, action) => {
        state.commentKids[action.payload.id] = action.payload.commentKids;
      })
  },
});

export const selectors = commentsAdapter.getSelectors((state) => state.comments);
export default commentsSlice.reducer;
