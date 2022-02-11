import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //Created the necessary elements in the tree
  const cardDiv = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainerDiv = document.createElement("div");
  const authorPhotoImg = document.createElement("img");
  const authorNameSpan = document.createElement("span");

  //Ordered the elements correctly according to the above tree structure
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(authorPhotoImg);
  authorDiv.appendChild(authorNameSpan);

  //Adding the necessary classes to the elements
  cardDiv.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainerDiv.classList.add("img-container");

  //Adding the necessary content to the elements
  authorPhotoImg.src = article.authorPhoto;
  headlineDiv.textContent = article.headline;
  authorNameSpan.textContent = `By ${article.authorName}`;

  //Adding an event listener, listening for a click, logging the article headline for each click of the card div.
  cardDiv.addEventListener("click", () => {
    console.log(article.headline);
  });

  return cardDiv;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  //Using Axios to retrieve the API data from the server.
  //The .then() method is selecting the specific element from the input selector for the function.
  //Then, accessing only the values of the full object, storing that into an array.
  //The array is now an array with nested arrays that have 3 objects inside.
  //Looping over that array and looping over each array within that outer array, appending the invocation
  //of the Card function to the cardElement div.
  axios
    .get("http://localhost:5000/api/articles")
    .then((resp) => {
      const cardElement = document.querySelector(selector);
      Object.values(resp.data.articles).forEach((articleArray) => {
        articleArray.forEach((articleObj) => {
          cardElement.appendChild(Card(articleObj));
        });
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("DONE");
    });
};

export { Card, cardAppender };
