'use client';
import { useEffect, useRef } from 'react';
import { Movie } from '../../types/movie';
import MovieCard from './MovieCard';

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let scrollAmount = 0;
    const maxScroll = row.scrollWidth - row.clientWidth;

    const interval = setInterval(() => {
      if (!row) return;

      scrollAmount += 1; // pixels per interval
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0; // reset to start
      }
      row.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 20); // every 20ms

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <section className="my-6">
      <h3 className="text-lg font-semibold mb-2">{categoryTitle}</h3>
      <div
        ref={rowRef}
        className="flex gap-3 overflow-x-hidden py-2"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
