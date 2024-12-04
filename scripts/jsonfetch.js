async function SendRequest()
{
    const response = await fetch("https://jsonvercelserver.vercel.app/api/posts", "GET");

    console.log(response);
}

await SendRequest();