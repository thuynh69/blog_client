import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import { GetPosts } from './api/posts';
import { CondensedPost } from '../components/CondensedPost';

export async function getServerSideProps() {
  const posts = await GetPosts();
  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Basic blog</title>
        <meta name="description" content="A basic blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The blog</h1>

        {posts.data.map((post) => (
          <CondensedPost post={post.attributes} id={post.id} key={post.id} />
        ))}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
