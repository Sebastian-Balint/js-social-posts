// Descrizione:
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

const posts = [
  {
    "id": 1,
    "content":
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    "media": "https://unsplash.it/600/300?image=171",
    "author": {
      "name": "Phil Mangione",
      "image": "https://unsplash.it/300/300?image=15",
    },
    "likes": 80,
    "created": "2021-06-25",
  },
  {
    "id": 2,
    "content":
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    "media": "https://unsplash.it/600/400?image=112",
    "author": {
      "name": "Sofia Perlari",
      "image": "https://unsplash.it/300/300?image=10",
    },
    "likes": 120,
    "created": "2021-09-03",
  },
  {
    "id": 3,
    "content":
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    "media": "https://unsplash.it/600/400?image=234",
    "author": {
      "name": "Chiara Passaro",
      "image": "https://unsplash.it/300/300?image=20",
    },
    "likes": 78,
    "created": "2021-05-15",
  },
  {
    "id": 4,
    "content":
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    "media": "https://unsplash.it/600/400?image=24",
    "author": {
      "name": "Luca Formicola",
      "image": null,
    },
    "likes": 56,
    "created": "2021-04-03",
  },
  {
    "id": 5,
    "content":
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    "media": "https://unsplash.it/600/400?image=534",
    "author": {
      "name": "Alessandro Sainato",
      "image": "https://unsplash.it/300/300?image=29",
    },
    "likes": 95,
    "created": "2021-03-05",
  },
];

const postsContainer = document.querySelector("#container");
posts.forEach((post) => {
  const newPost = generatePost(post);
  postsContainer.innerHTML += newPost;
});

const allLikeBtn = document.querySelectorAll(".js-like-button");
const allLikeCounter = document.querySelectorAll(".js-likes-counter");
const likedIdArray = [];
allLikeBtn.forEach((likeBtn, index) => {
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.add("like-button--liked");
    const thisLikeCounter = allLikeCounter[index];
    parseInt(thisLikeCounter.textContent++);
    likedIdArray.push(posts[index].id);
  });
});
console.log(likedIdArray);

/* FUCTIONS */
function generatePost(post) {
  const { id, content, media, author, likes, created } = post;
  const newPost = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author.image}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
  return newPost;
}
