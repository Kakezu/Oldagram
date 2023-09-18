const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const userPosts = document.getElementById("user-posts")

for (let i = 0; i < posts.length; i++) {
    userPosts.innerHTML += `
    <section>
    <div class="container">
        <img class="post-avatar" src=${posts[i].avatar}>
        <div class="poster-info">
            <h4>${posts[i].name}</h4>
            <p>${posts[i].username}</p>
        </div>
    </div>
    <img class="vangogh-post"src=${posts[i].post}>
    </section>
    
    <section>
    <div class="container">
        <img class="icons" src="images/icon-heart.png">
        <img class="icons" src="images/icon-comment.png">
        <img class="icons" id="dm-btn" src="images/icon-dm.png">
    </div>
    <h4 class="likes-amount">${posts[i].likes} likes</h4>
    <div class="poster-container">
        <h4>${posts[i].username}</h4>
        <p>${posts[i].comment}</p>
    </div>
    </section>
    `
}
