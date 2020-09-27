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

// Beginning of each new word in input field to be a capital letter.
// Give items check boxes.
// Create another form for capturing brand names.
// Make it so list item input field picks up captured brand names from database.
// Options for storing lists with meta data?....to be able to have something to display stats on?
// Create list; My lists; View lists; Edit lists -- can make navigating site confusing with having so many options.