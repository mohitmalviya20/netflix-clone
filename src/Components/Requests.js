const APIKEY = `d8682995054405d2bc00c1171cd615e0`;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv/?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie/?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie/?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie/?api_key=${APIKEY}&with_genres=99`,
};
export default requests;
