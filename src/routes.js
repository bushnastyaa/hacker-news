const routes = {
  newsPath: () => 'https://hacker-news.firebaseio.com/v0/newstories.json',
  newsItemPath: (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  commentsPath: (comment) => `https://hacker-news.firebaseio.com/v0/item/${comment}.json`,
};
  
export default routes;
