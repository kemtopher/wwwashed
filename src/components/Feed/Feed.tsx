'use client';

import React, { useMemo } from 'react';
import { Post } from '../Post/Post';
import type { PrismicDocument } from '@prismicio/client';

interface FeedProps {
  posts: PrismicDocument[];
}

export const Feed = ({ posts }: FeedProps) => {
  const sorted = useMemo(() => {
    return [...posts].sort((a, b) => {
      const ad = Date.parse(a.first_publication_date || a.last_publication_date || '');
      const bd = Date.parse(b.first_publication_date || b.last_publication_date || '');
      return bd - ad; // newest first
    });
  }, [posts]);

  return (
    <section className="mt-32 flex flex-col gap-6">
      {sorted.map((post) => (
        <Post
          key={post.id}
          // author={ post.author }
          timestamp={ post.first_publication_date }
          content={post.data.content}
          title={post.data.title}
          image={post.data.image}
        />
      ))}
    </section>
  );
};
