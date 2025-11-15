import { fetchMovieById } from '../../../lib/tmdb';
import Image from 'next/image';
import { Movie } from '../../../types/movie';

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie: Movie = await fetchMovieById(params.id);

  return (
    <div className="px-4 py-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      {movie.backdrop_path && (
        <div className="relative w-full h-80 md:h-[400px] mb-4">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-md"
          />
        </div>
      )}
      <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
      <p className="mb-2"><strong>Rating:</strong> {movie.vote_average}</p>
      {movie.genres && (
        <p className="mb-2">
          <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(', ')}
        </p>
      )}
      <p>{movie.overview}</p>
    </div>
  );
}
