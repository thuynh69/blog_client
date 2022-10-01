import Link from 'next/link';

import { format, parseISO } from 'date-fns';
import styles from '../styles/components/CondensedPost.module.scss';

export const CondensedPost = ({ post, id }) => {
  const { Title, Content, createdAt, Illustration } = post;
  const illustrationData = Illustration?.data.attributes;

  return (
    <article className={styles.article}>
      <div className={styles.content}>
        <h2>{Title}</h2>
        <p className={styles.date}>
          {format(parseISO(createdAt), 'dd MMMM yyyy, HH:MM')}
        </p>
        <p className={styles.overview}>{Content}</p>
        <Link href={'/post/' + id}>
          <a>Read it all</a>
        </Link>
      </div>
      {illustrationData ? (
        <div
          className={styles.illustration}
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASEURL}${illustrationData.url})`,
          }}
        ></div>
      ) : (
        <div />
      )}
    </article>
  );
};
