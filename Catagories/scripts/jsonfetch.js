async function GetData()
{
    const response = await fetch("https://jsonvercelserver.vercel.app/posts");

    console.log(response);
}

await GetData();