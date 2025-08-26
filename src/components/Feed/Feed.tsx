'use client';

import { Post } from '../Post/Post';
import type { PrismicDocument } from '@prismicio/client'
import { JSXMapSerializer } from '@prismicio/react';

interface FeedProps {
  posts: PrismicDocument[]
}

export const Feed = ({ posts }: FeedProps) => {
  return (
    <section className="mx-auto max-w-2xl flex flex-col gap-6">
      { posts.map((post: any) => (
        <Post
          key={post.id}
          author={post.author}
          timestamp={post.published_at}
          content={post.data.content} // Prismic rich text field
        />
      ))}
    </section>
  );
}
