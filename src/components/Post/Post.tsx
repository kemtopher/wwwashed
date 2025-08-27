import React from 'react';
import {
  JSXMapSerializer,
  PrismicRichText,
  PrismicLink,
} from '@prismicio/react';
import type { RichTextField } from '@prismicio/client';

interface PostProps {
  author?: string;
  timestamp: Date;
  content: RichTextField;
  title: RichTextField;
}

export const Post = ({ author, timestamp, content, title }: PostProps) => {
  const date = new Date(timestamp);
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
    <article className={`post-body w-full p-4 md:p-6`}>
      <header className="post-header mb-4 flex flex-col gap-3">
        {/* <div className="post-title">{ title }</div> */}
        <PrismicRichText
          field={title}
          components={{
            heading3: ({ children }) => (
              <h3 className="mb-4 text-3xl font-bold">{children}</h3>
            ),
          }}
        />
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
        <PrismicRichText
          field={content}
          components={{
            heading1: ({ children }) => (
              <h1 className="mb-4 text-3xl font-bold">{children}</h1>
            ),
            heading2: ({ children }) => (
              <h2 className="mb-3 text-2xl font-semibold">{children}</h2>
            ),
            paragraph: ({ children }) => (
              <p className="mb-4 text-base md:text-xl lg:text-md">{children}</p>
            ),
            listItem: ({ children }) => <li className="mb-2">{children}</li>,
            embed: ({ node }) => {
              const html = node.oembed?.html ?? '';
              const src = html.match(/src="([^"]+)"/)?.[1];

              if (!src) return null;

              return (
                <div className="relative my-14 w-full aspect-video overflow-hidden">
                  <iframe
                    src={src}
                    className="absolute inset-0 h-full w-full"
                    title={node.oembed?.title || 'Embedded video'}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              );
            },
            // hyperlink: ({ node, children }) => (
            // <PrismicLink
            //     field={node.data}
            //     className="text-black underline underline-offset-2 hover:text-accent"
            //     target={node.data.target ?? undefined}
            //     rel={node.data.target ? "noopener noreferrer" : undefined}
            // >
            //     {children}
            // </PrismicLink>
            // ),
            preformatted: ({ children }) => (
              <div className="flex justify-center">
                <pre className="font-display text-lg italic leading-relaxed border px-4 py-3 my-16 inline-block rounded overflow-x-auto">
                  {children}
                </pre>
              </div>
            ),
            strong: ({ children }) => (
              <strong className="font-bold">{children}</strong>
            ),
          }}
        />
      </section>
    </article>
  );
};
