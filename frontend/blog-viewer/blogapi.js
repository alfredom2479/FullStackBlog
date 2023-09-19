
export async function getBlogPosts(){
  const url = "/api/blog";
  const res = await fetch(url);
  console.log(res);
  if(!res.ok){
    throw{
      message: "Failed to fetch blog posts",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return data.blogposts;
}