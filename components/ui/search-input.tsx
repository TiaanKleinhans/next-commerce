'use client';

import { SearchIcon } from 'lucide-react';
import { Input } from './input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export function SearchInput() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const request = searchParams.get('query') || '';

  const [query, setQuery] = useState(request);

  useEffect(() => {
    setQuery(request);
  }, [request]);

  const onSearch = (_: React.FormEvent) => {
    _.preventDefault();

    const value = query.trim();

    const params = new URLSearchParams();

    if (value) {
      params.set('query', value);
      router.push(`/search?${params.toString()}`);
    } else {
      router.push(`/search`);
    }
  };

  return (
    <form className="relative w-full" onSubmit={onSearch}>
      <SearchIcon className="absolute w-4 h-4 text-muted-foreground left-2.5 top-1/2 -translate-y-1/2" />
      <Input
        className="pl-8"
        type="search"
        placeholder="Search"
        value={query}
        onChange={(_) => setQuery(_.target.value)}
      />
    </form>
  );
}
