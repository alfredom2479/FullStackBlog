export async function loginUser(creds){
  //console.log(creds);
  const res = await fetch("/api/users/admin",
    {
      method: "POST", 
      body: JSON.stringify(creds),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
  )
  const data = await res.json();

  if(!res.ok){
    //console.log("in api: "+JSON.stringify(data))
    throw{
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data;
}

export async function getMe(){
  const res = await fetch("/api/users/me");
  //console.log("getme api call");
  //console.log(res)
  const data = await res.json();

  if(!res.ok){
    throw{
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data;
}

export async function getBlogPosts(){
  const url = "/api/blog/all";
  const res = await fetch(url);
  if(!res.ok){
    throw {
      message: "Failed to fetch blog posts",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  //console.log(data)
  return data;
}

export async function getBlogPost(id){
  const url = `/api/blog/${id}`;
  const res = await fetch(url);
  if(!res.ok){
    throw {
      message: "Failed to fetch blog post",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return data;
}

export async function updateBlogPost(id, bodyParams){
  let res = null;

  try{
  res = await fetch(`/api/blog/${id}`, 
    {
      method: "PUT",
      body: JSON.stringify(bodyParams),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
  );
  }catch(err){
    console.log(err);
  }

  const data = await res.json();
  console.log(data);

  if(!res.ok){
    throw{
      message: data.message,
      statusText: data.statusText,
      status: res.status
    }
  }
  return data;
}

export async function createBlogPost(bodyParams){
  let res = null;

  try{
    res = await fetch(`/api/blog/`,
      {
        method: "POST",
        body: JSON.stringify(bodyParams),
        headers: {
          "Content-Type" : "application/json"
        }
      }
    )
  }catch(err){
    console.log(err);
  }

  const data = await res.json();

  if(!res.ok){
    throw {
      message: data.message,
      statusText: data.statusText,
      status: data.status
    }
  }

  return data;

}


/*export async function loginUser(creds){
  //console.log(creds);
  const res = await fetch("/api/users/admin",
    {
      method: "POST", 
      body: JSON.stringify(creds),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
  )
  const data = await res.json();

  if(!res.ok){
    //console.log("in api: "+JSON.stringify(data))
    throw{
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data;
}
*/