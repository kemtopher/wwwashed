'use client';

import { Post } from '../Post/Post';
import type { PrismicDocument } from '@prismicio/client';

interface FeedProps {
  posts: PrismicDocument[];
}

export const Feed = ({ posts }: FeedProps) => {
  return (
    <section className="mt-32 flex flex-col gap-6">
      {posts.map((post) => (
        <Post
          key={post.id}
          // author={ post.author }
          timestamp={ post.first_publication_date }
          content={post.data.content}
          title={post.data.title}
        />
      ))}
    </section>
  );
};
