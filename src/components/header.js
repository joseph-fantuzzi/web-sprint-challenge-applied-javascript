const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //Creating the elements in the tree structure
  const header_div = document.createElement("div");
  const date_span = document.createElement("span");
  const title_h1 = document.createElement("h1");
  const temp_span = document.createElement("span");

  //Placing the elements in the correct order
  header_div.appendChild(date_span);
  header_div.appendChild(title_h1);
  header_div.appendChild(temp_span);

  //Adding the necessary classes to the elements
  header_div.classList.add("header");
  date_span.classList.add("date");
  temp_span.classList.add("temp");

  //Added content to the necessary elements
  date_span.textContent = date;
  title_h1.textContent = title;
  temp_span.textContent = temp;

  return header_div;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  //Access the heading div element from the HTML.
  //Caching the DOM.
  const headerElement = document.querySelector(selector);

  //Appending the invocation of the Header function, which returns an HTMl tree structure to the
  //heading div element.
  headerElement.appendChild(Header("BloomTech Times", "February 20, 2022", "50°"));
};

export { Header, headerAppender };
