import Image from 'next/image';
import { createClient } from '../prismicio';
import { Feed } from '../components/Feed/Feed';

export default async function Home() {
  const client = createClient();
  const allPosts = await client.getAllByType('post');

  return (
    <main className="site-main">
      <div className="site-grid container-safe">
        <aside></aside>

        <Feed posts={allPosts} />

        <aside></aside>
      </div>
    </main>
  );
}
