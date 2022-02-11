import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  //Creating the outermost element div and adding its necessary class name.
  const topics_div = document.createElement("div");
  topics_div.classList.add("topics");

  //Looping over the argument array, creating a new div element for each topic, adding a class to it,
  //adding text, and appending it to the outermost element div.
  topics.forEach((topic) => {
    let tab_div = document.createElement("div");
    tab_div.classList.add("tab");
    tab_div.textContent = topic;
    topics_div.appendChild(tab_div);
  });

  return topics_div;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  //Using Axios to get the API data from the server and creating a then, catch, and finally method.
  //The .then() method selects the specific element from the input selector in the HTML document
  //Using the Tabs component function from above, returning a div tree structure and appending that to the
  //specific element from the HTML document.
  axios
    .get("http://localhost:5000/api/topics")
    .then((resp) => {
      const tabElement = document.querySelector(selector);
      tabElement.appendChild(Tabs(resp.data.topics));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("DONE");
    });
};

export { Tabs, tabsAppender };
