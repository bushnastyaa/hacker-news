import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem.jsx';
import ErrorPage from '../../components/ErrorPage.jsx';
import ContentLoader from '../../components/ContentLoader.jsx';
import { selectors } from '../../slices/newsSlice.js';

const NewsList = () => {
  const status = useSelector((state) => state.news.status);
  const articles = useSelector(selectors.selectAll);

  return (
    <div className="mt-3">
      {status === 'loading' ? (
        <ContentLoader />
      ) : status === 'error' ? (
        <ErrorPage />
      ) : (
        articles.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id} className="text-decoration-none">
          <NewsItem item={item} />
          </Link>
        ))
      )}
    </div>
  );
};

export default NewsList;
