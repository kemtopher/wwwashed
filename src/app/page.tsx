import Image from 'next/image';
import { createClient } from '../prismicio';
import { Feed } from '../components/Feed/Feed';

export default async function Home() {
  const client = createClient();
  const allPosts = await client.getAllByType('post');

  return (
    <>
    <div className="sit3-grid">
      <div className="py-4 pl-4 min-w-[150px]">
        <Image src='/_wwwashed-logo.png' alt="logo for wwwashed" width="300" height="420" className="max-w-[250px] h-auto w-full" />
      </div>

      <main className="site-main py-4 px-4">
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
