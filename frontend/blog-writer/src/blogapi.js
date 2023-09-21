export async function loginUser(creds){
  const res = await fetch("/api/users/admin",
    {method: "post", body: JSON.stringify(creds)}
  )
  const data = await res.json();

  if(!res.ok){
    console.log(data)
    throw{
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data;
}