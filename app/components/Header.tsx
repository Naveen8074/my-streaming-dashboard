'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const categories = ['popular', 'top_rated', 'trending'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">My Streaming Dashboard</Link>

        <nav className="flex gap-6">
          <p>Popular</p>
          <p>Top Rated</p>
          <p>Trending</p>
        </nav>
      </div>
    </header>
  );
}
