const deleteList = document.querySelector("button.deleteList"); //get reference to delete list button
const trashcans = document.querySelectorAll("div.trashcan"); //get reference to trashcan icon on each list item

const iconsOne = document.querySelectorAll(".fas");
const iconTwo = document.querySelectorAll(".far");

const invisDivs = document.querySelectorAll(".options");

iconsOne.forEach(icon => {
  icon.addEventListener("click", () => {
    invisDivs.forEach(div => {
      if (div.dataset.item === icon.dataset.item) {
        div.classList.toggle("hide");
      }
    });
  });
});

deleteList.addEventListener("click", () => {
  const endpoint = `/lists/edit/${deleteList.dataset.doc}`;

  fetch(endpoint, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => window.location.href = data.redirect)
  .catch(err => console.log(err));

});

trashcans.forEach(trashcan => {
  trashcan.addEventListener("click", () => {
    const endpoint = `/lists/edit-item/${trashcan.dataset.id}/${trashcan.dataset.item}`;

    fetch(endpoint, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err));

  });
});

// 

// let addItemInputField = document.getElementById("add");

// addItemInputField.addEventListener("input", function(){
//   let firstLetter = addItemInputField.value[0];
//   let restOfWord = addItemInputField.value.slice(1, addItemInputField.value.length);
//   addItemInputField.value = `${firstLetter.toUpperCase()}${restOfWord}`;
// });

const addInput = document.querySelector("input");

addInput.addEventListener("input", (e) => {
  const words = addInput.value.split(" ").map(word => {
    word = `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
    return word;
  }).join(" ");
  addInput.value = words;
});

// Navbar highlight once on page.

const listAnchor = document.querySelectorAll(".navList li a");
console.log(listAnchor);

for(let i = 0; i < listAnchor.length; i++){
    listAnchor[i].addEventListener("click", function(){
      console.log("clicked");
      listAnchor[i].classList.add("highlight");  // Need to keep it highlighted.
    });
}

// Annoying code on each list item.

const listItem = document.querySelectorAll(".item");
console.log(listItem);

listItem.forEach(item => {
  item.innerText = `Dis is zi item you typed in zi box yah?!`;
});

// Create an html template for each list, placing a border around each item.
// Add grocery list items prices & total.
// Create another form for capturing brand names.
// Make it so list item input field picks up captured brand names from database.
// Options for storing lists with meta data?....to be able to have something to display stats on?