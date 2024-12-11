async function GetData()
{
    const response = await fetch("https://jsonvercelserver.vercel.app/posts");

    const responseData = await response.json();

    foreach (post in responseData)
    {
        if (post.category == "Agriculture and Life Sciences")
        {
            const javaposts = document.querySelector('#javaposts');
            const postDiv = document.createElement('div');
            postDiv.setAttribute('class', 'post');
            javaposts.appendChild(postDiv);
        }
    }
}

await GetData();