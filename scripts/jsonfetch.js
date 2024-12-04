async function SendRequest()
{
    const options = {
        method: "GET"
    };
    
    const response = await fetch("http://jsonvercelserver.vercel.app/posts", options);

    console.log(response);
}

SendRequest();