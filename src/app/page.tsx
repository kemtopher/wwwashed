import Image from 'next/image';
import { createClient } from '../prismicio';
import { Feed } from '../components/Feed/Feed';

export default async function Home() {
  const client = createClient();
  const allPosts = await client.getAllByType('post');

  return (
    <>
    <div className="sit3-grid">
      <div className="nav-column py-4">
        <img src='/_wwwashed-logo.png' alt="logo for wwwashed" width="300" height="420" className="w-full" />
      </div>

      <main className="site-main py-4">
        <div className="">
          <h1 className="font">WWWASHED!</h1>
          <h2>image bookmarking</h2>
        </div>
        <div className="site-grid container-safe">
          <Feed posts={allPosts} />
        </div>
      </main>
    </div>
    </>
  );
}
