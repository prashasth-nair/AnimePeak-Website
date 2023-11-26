var titles = [];
var ids = [];
var urls = [];
var images = [];
var genres = [];

await fetch("https://api-consumet-org-eta-one.vercel.app/anime/gogoanime/top-airing", {
  method: 'GET',
  headers: {
      'Accept': 'application/json',
  },
}).then(response =>  console.log(response.json()))
// .then(data => {
//   const results = data.results;
//   for (let i = 0; i < results.length; i++) {
//     titles.push(results[i].title);
//     ids.push(results[i].id);
//     urls.push(results[i].url);
//     images.push(results[i].image);
//     genres.push(results[i].genres);

//   }
// });
// console.log(titles);
// console.log(ids);
// console.log(urls);
// console.log(images[0]);
// console.log(genres);
// function createCard() {
  
// }
// function addCardData() {
//   const card = document.getElementById("slide-1");
//   const cardDetails = card.appendChild(document.createElement("div"));
//   cardDetails.setAttribute("class", "card_details");
//   const cardTitle = cardDetails.appendChild(document.createElement("h1"));
//   cardTitle.setAttribute("class", "card_title");
//   cardTitle.innerHTML = titles[0];
//   const cardImage = card.appendChild(document.createElement("img"));
//   cardImage.setAttribute("class", "card_image");
//   cardImage.src = images[0];
//   const cardGenres = cardDetails.appendChild(document.createElement("p"));
//   cardGenres.setAttribute("class", "card_genres");
//   cardGenres.innerHTML = genres[0];


// }
// addCardData();