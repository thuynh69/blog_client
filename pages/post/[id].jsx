import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { GetPost } from '../api/posts';
import styles from '../../styles/pages/Post.module.scss';
import { Category } from '../../components/Category';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const post = await GetPost(id);
  return {
    props: { post },
  };
}

const Post = ({ post }) => {
  const { title, content, createdAt, illustration, categories } =
    post.data.attributes;
  const illustrationData = illustration?.data?.attributes;

  return (
    <div className="container">
      <article>
        {illustrationData && (
          <div
            className={styles.illustration}
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASEURL}${illustrationData.url})`,
            }}
          ></div>
        )}

        {categories?.data && (
          <div className={styles.categories}>
            {categories.data.map((category) => (
              <Category key={category.id} name={category.attributes.name} />
            ))}
          </div>
        )}

        <div className={styles.content}>
          <h1>{title}</h1>
          <p className={styles.date}>
            {format(parseISO(createdAt), 'dd MMMM yyyy, HH:MM')}
          </p>
          <p className={styles.overview}>{content}</p>
        </div>

        <Link href={'/'}>
          <a className={styles.backButton}>Back Home</a>
        </Link>
      </article>
    </div>
  );
};

export default Post;
