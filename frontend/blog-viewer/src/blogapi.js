
export async function getBlogPosts(){
  const url = "/api/blog";
  const res = await fetch(url);
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

export async function getBlogPost(id){
  const url= `/api/blog/${id}`;
  const res = await fetch(url);
  if(!res.ok){
    throw{
      message: "Failed to fetch blog post",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data =await res.json();
  return data;
}