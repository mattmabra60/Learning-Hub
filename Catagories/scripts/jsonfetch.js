async function GetData()
{
    const response = await fetch("https://jsonvercelserver.vercel.app/posts");

    const responseData = await response.json();

    for (var i = 0; i < responseData.length; i++)
    {
        if (responseData[i].category == "Agriculture and Life Sciences")
        {
            const javaposts = document.getElementById('javaposts');
            const postDiv = document.createElement('div');
            postDiv.setAttribute('class', 'post');
            javaposts.appendChild(postDiv);
            
            const postHeader = document.createElement('div');
            postHeader.setAttribute('class', 'post-header');
            postDiv.appendChild(postHeader);

            const postTitle = document.createElement('a');
            postTitle.setAttribute('href', '#');
            postTitle.setAttribute('class', 'post-title');
            postTitle.text = responseData[i].title;
            postHeader.appendChild(postTitle);

            const postCategory = document.createElement('span');
            postCategory.setAttribute('class', 'post-category');
            console.log(responseData[i].topic)
            postCategory.text = responseData[i].topic;
            postHeader.appendChild(postCategory);
        }
    }
}

await GetData();