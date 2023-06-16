import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './Header.jsx';
import NewsPage from '../pages/news/NewsPage.jsx';
import SingleNewsPage from '../pages/news/SingleNewsPage.jsx';
import ErrorPage from './ErrorPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <Header />
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/item/:id" element={<SingleNewsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;
