import { configureStore } from '@reduxjs/toolkit';

import newsReducer from './newsSlice.js';
import commentsReducer from './commentsSlice.js';

export default configureStore({
  reducer: {
    news: newsReducer,
    comments: commentsReducer,
  },
});
