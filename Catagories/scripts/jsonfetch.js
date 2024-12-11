async function GetData()
{
    const response = await fetch("https://jsonvercelserver.vercel.app/posts");

    const responseData = await response.json();

    foreach (post in responseData)
    {
        console.log(posts);
    }
}

await GetData();