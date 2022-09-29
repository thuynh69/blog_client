import Image from 'next/image'
import {format, parseISO} from 'date-fns'
import styles from '../styles/components/CondensedPost.module.scss';

export const CondensedPost = ({post}) => {
  const {Title, Content, createdAt, Illustration} = post
  const illustrationData = Illustration.data.attributes

  return <article className={styles.article}>
    <div className={styles.content}>
      <h2>{Title}</h2>
      <p>{format(parseISO(createdAt), 'dd MMMM yyyy, HH:MM')}</p>
      <p>{Content}</p>
    </div>
    <div className={styles.illustration}>
      <Image 
        alt={illustrationData.caption} // TODO = Improve that to have a real alt on images from API
        loader={ () => `${process.env.NEXT_PUBLIC_API_BASEURL}` + illustrationData.url}
        src={`${process.env.NEXT_PUBLIC_API_BASEURL}` + illustrationData.url}
        layout="fill"
        objectFit="cover"
        quality={100} />
    </div>
  </article>;
};
