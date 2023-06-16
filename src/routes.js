const routes = {
  newsPath: () => 'https://hacker-news.firebaseio.com/v0/newstories.json',
  newsItemPath: (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
};
  
export default routes;
