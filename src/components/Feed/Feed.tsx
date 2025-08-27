'use client';

import { Post } from '../Post/Post';
import type { PrismicDocument } from '@prismicio/client';

interface FeedProps {
  posts: PrismicDocument[];
}

export const Feed = ({ posts }: FeedProps) => {
  return (
    <section className="mx-auto max-w-2xl flex flex-col gap-6">
      {posts.map((post: any) => (
        <Post
          key={post.id}
          // author={ post.author }
          timestamp={post.first_publication_date}
          content={post.data.content}
          title={post.data.title}
        />
      ))}
    </section>
  );
};
