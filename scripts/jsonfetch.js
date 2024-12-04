async function SendRequest()
{
    const options = {
        method: "GET"
    };
    
    const response = await fetch("https://jsonvercelserver.vercel.app/api/posts", options);

    console.log(response);
}

await SendRequest();