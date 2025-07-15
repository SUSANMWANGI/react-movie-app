const API_KEY="1a15bab851b757a5f388131cbad79073"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch popular movies');
  }
  const data = await response.json();
  return data.results;
}

export const searchMovies = async (query, page = 1) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to search movies');
  }
  const data = await response.json();
  return data.results;
}