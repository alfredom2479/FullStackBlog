export async function loginUser(creds){
  console.log(creds);
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