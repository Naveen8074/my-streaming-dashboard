'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Movie } from '../../types/movie';

export default function HeroBanner({ movies }: { movies: Movie[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies.length]);

  const movie = movies[current];

  return (
    <section className="relative h-72 md:h-[500px] mb-6">
      {movie.backdrop_path && (
        <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        style={{ objectFit: 'cover' }}
        className="rounded-md opacity-0 transition-opacity duration-700"
        onLoadingComplete={(img) => {
          img.classList.remove('opacity-0');
        }}
        />
      )}
      <div className="absolute bottom-6 left-6 bg-black/50 p-4 rounded">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <p className="hidden md:block max-w-xl mt-2">{movie.overview}</p>
      </div>
    </section>
  );
}
