async function GetData()
{
    const response = await fetch("https://jsonvercelserver.vercel.app/posts");

    const responseData = await response.json();

    for (var i = 0; i < responseData.length; i++)
    {
        console.log(responseData[i].category);
        if (responseData[i].category == "Agriculture and Life Sciences")
        {
            console.log("hit1");
            const javaposts = document.getElementById('javaposts');
            const postDiv = document.createElement('div');
            postDiv.setAttribute('class', 'post');
            javaposts.appendChild(postDiv);
        }
    }
}

await GetData();