import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '../../types/movie';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="min-w-[150px] block hover:scale-105 transition-transform"
    >
      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
          width={200}
          height={300}
          className="rounded-md"
        />
      )}
      <p className="mt-2 text-sm">{movie.title}</p>
    </Link>
  );
}

