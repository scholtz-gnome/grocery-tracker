const deleteList = document.querySelector("button.deleteList"); //get reference to delete list button
const trashcans = document.querySelectorAll("button.trashcan"); //get reference to trashcan icon on each list item

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