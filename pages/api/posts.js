export const GetPosts = async () => {
  const res = await fetch(`${process.env.API_BASEURL}/api/posts?populate=*`);
  const posts = await res.json();
  return posts;
};
