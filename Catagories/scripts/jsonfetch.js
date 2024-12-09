async function GetData()
{
    const headers = new Headers();
    headers.append("Accept", "application/json");

    const options = {
        method: "GET",
        headers: headers
    };

    const response = await fetch("https://jsonvercelserver.vercel.app/posts", options);

    let responseData = [];

    responseData = await response.json();

    console.log(responseData);
}

GetData();