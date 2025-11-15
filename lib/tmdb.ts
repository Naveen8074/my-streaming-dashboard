const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  throw new Error('TMDB_API_KEY is missing in environment variables');
}

export async function fetchPopular() {
  try {
    const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}&language=en-US`);
    if (!res.ok) throw new Error('Failed to fetch popular movies');
    return res.json();
  } catch (err) {
    console.error('Error fetching popular movies:', err);
    return { results: [] };
  }
}


export async function fetchTopRated() {
  const res = await fetch(`${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error('Failed to fetch top rated movies');
  return res.json();
}

export async function fetchTrending() {
  const res = await fetch(`${BASE}/trending/movie/week?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch trending movies');
  return res.json();
}

export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error('Failed to fetch movie details');
  return res.json();
}
