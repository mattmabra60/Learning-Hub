async function GetData()
{
    const response = await fetch("https://jsonvercelserver.vercel.app/posts");

    const responseData = await response.json();

    console.log(responseData);
}

await GetData();