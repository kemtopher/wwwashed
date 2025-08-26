import React from 'react';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import type { RichTextField } from '@prismicio/client';

interface PostProps {
  author: string;
  timestamp: Date;
  content: RichTextField;
}

export const Post = ({
  author,
  timestamp,
  content,
}: PostProps) => {
  const date = new Date(timestamp);

//   console.log('Post Object: ', allPosts);

  // const month = date.toLocaleString('en-US', { month: 'short' });
  // const day = String(date.getDate()).padStart(2, '0');
  // const year = date.getFullYear();

  const components: JSXMapSerializer = {
    image: ({ node }) => (
      <figure className="my-4">
        <img
          src={node.url}
          alt={node.alt || ''}
          className="w-full h-auto rounded-xl"
          loading="lazy"
        />
        {node.alt ? (
          <figcaption className="mt-2 text-sm text-black/60">
            {node.alt}
          </figcaption>
        ) : null}
      </figure>
    ),
    // Responsive video/oEmbed
    embed: ({ node }) => (
      <div className="not-prose my-4 aspect-video">
        <div
          className="h-full w-full [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:rounded-xl [&>iframe]:border-0"
          dangerouslySetInnerHTML={{ __html: node.oembed?.html || '' }}
        />
      </div>
    ),
  };

  return (
    <article
      className={`post-body w-full rounded-2xl border border-black/10 bg-white p-4 md:p-6`}
    >
      <header className="post-header mb-4 flex items-center gap-3">
        <div className="post-title">Title of Post</div>
        <div className="post-author font-semibold leading-tight">{author}</div>
        <div className="post-publish-date text-sm leading-tight text-black/60">
          {timestamp ? new Date(timestamp).toLocaleString() : null}
        </div>
      </header>

      <section
        className="
          prose prose-neutral max-w-none
          prose-img:w-full prose-figure:my-4 prose-p:my-3
          prose-headings:font-semibold
          prose-h1:text-3xl md:prose-h1:text-4xl
          prose-h2:text-2xl md:prose-h2:text-3xl
          prose-h3:text-xl  md:prose-h3:text-2xl
          prose-a:no-underline prose-a:text-blue-600 hover:prose-a:underline hover:prose-a:text-[var(--brand-pink)]
        "
      >
        <PrismicRichText field={content} components={components} />
      </section>
    </article>
  );
};
