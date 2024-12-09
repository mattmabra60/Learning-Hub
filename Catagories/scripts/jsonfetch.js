async function SendRequest()
{
    const options = {
        method: "GET"
    };

    const response = await fetch("https://jsonvercelserver.vercel.app/posts", options);

    console.log(response);
}

await SendRequest();