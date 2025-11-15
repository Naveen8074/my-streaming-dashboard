import { fetchPopular, fetchTopRated, fetchTrending } from '../lib/tmdb';
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import { Movie } from '../types/movie';
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const popularData = await fetchPopular();
  const topRatedData = await fetchTopRated();
  const trendingData = await fetchTrending();

  const popular: Movie[] = popularData.results;
  const topRated: Movie[] = topRatedData.results;
  const trending: Movie[] = trendingData.results;

  return (
    <div className="px-4">
      <HeroBanner movies={popular} />
      <MovieRow movies={popular} categoryTitle="Popular" />
      <MovieRow movies={topRated} categoryTitle="Top Rated" />
      <MovieRow movies={trending} categoryTitle="Trending" />
    </div>
  );
}
