async function GetData()
{
    const response = await fetch("https://jsonvercelserver.vercel.app/posts");

    let responseData = [];

    responseData = await response.json();

    console.log(responseData);
}

GetData();