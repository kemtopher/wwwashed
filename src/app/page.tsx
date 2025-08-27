import Image from 'next/image';
import { createClient } from '../prismicio';
import { Feed } from '../components/Feed/Feed';

export default async function Home() {
  const client = createClient();
  const allPosts = await client.getAllByType('post');

  return (
    <>
      <header className="py-4 px-4 w-full h-auto bg-white fixed top-0 left-0">
        <Image src='/wwwashed.png' alt="logo for wwwashed" width="673" height="140" className="max-w-[450px]" />
      </header>

      <main className="site-main pt-[200px]">
        <div className="site-grid container-safe">
          <aside></aside>

          <Feed posts={allPosts} />

          <aside></aside>
        </div>
      </main>
    </>
  );
}
