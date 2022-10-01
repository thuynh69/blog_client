import Link from 'next/link';
import { GetPost } from '../api/posts';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const post = await GetPost(id);
  return {
    props: { post },
  };
}

const Post = ({ post }) => {
  console.log(post);

  return (
    <Link href={'/'}>
      <a>Back Home</a>
    </Link>
  );
};

export default Post;
