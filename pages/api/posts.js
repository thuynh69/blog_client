export const GetPosts = async () => {
  const res = await fetch(`${process.env.API_BASEURL}/api/posts?populate=*`);
  const posts = await res.json();
  return posts;
};

export const GetPost = async (id) => {
  const res = await fetch(
    `${process.env.API_BASEURL}/api/posts/${id}/?populate=*`,
  );
  const post = await res.json();
  return post;
};
