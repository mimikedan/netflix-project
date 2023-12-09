const API_KEY = process.env.REACT_APP_apikey;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTvPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=5`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=with_genres=99`,
  fetchTvShowsMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&page=10`,
};
export default requests;
