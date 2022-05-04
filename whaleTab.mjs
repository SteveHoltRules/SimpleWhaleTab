// Powered by Quotable
// https://github.com/lukePeavey/quotable
import fetch from "node-fetch";
// document.addEventListener("DOMContentLoaded", () => {

//     // DOM elements
//     const button = document.querySelector("button");
//     const quote = document.querySelector("blockquote p");
//     const cite = document.querySelector("blockquote cite");
//     const backGround = document.querySelector("card");

//     async function updateBackground() {
//       const responsepic = await fetch("unsplash.photos.getPhoto(`pFqrYbhIAXs`)");
//       const data = await response.json();
//       if(responsepic.ok) {
//         backGround.style.background = data.results[0].user.profile.image.large
//       }
//     }

//     async function updateQuote() {
//       // Fetch a random quote from the Quotable API
//       const response = await fetch("https://api.quotable.io/random");
//       const data = await response.json();
//       console.log(data);
//       if (response.ok) {
//         // Update DOM elements
//         quote.textContent = data.content;
//         cite.textContent = data.author;
//       } else {
//         quote.textContent = "An error occured";
//         console.log(data);
//       }
//     }
  
//     // Attach an event listener to the `button`
//     button.addEventListener("click", updateQuote);
  
//     // call updateQuote once when page loads
//     updateQuote();
//     updateBackground();
//   });

async function updateBackground() {
  const responsepic = await fetch("unsplash.photos.getPhoto(`pFqrYbhIAXs`)");
  const data = await response.json();
  console.log(responsepic);
  return responsepic;
  try {
    if (responsepic.ok) {
      return backGround.style.background = data.results[0].user.profile.image.large;
    }
  } catch {
    quote.textContent = "An error occured";
    console.log(data);
  }
};

async function updateQuote() {
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  const quote = {};
  try {
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      quote.author = data.author;
      console.log(quote.textContent);
      return quote.textContent;
    }
  } catch {
    quote.textContent = "An error occured";
    console.log(data);
  }

};

updateQuote().then(data => {
  data;
});