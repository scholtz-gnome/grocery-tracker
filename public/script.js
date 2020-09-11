const deleteButton = document.querySelector("button.delete");

  deleteButton.addEventListener("click", () => {
    const endpoint = `/lists/edit/${deleteButton.dataset.doc}`;

    fetch(endpoint, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => window.location.href = data.redirect)
    .catch(err => console.log(err));
  });

  const deleteItems = document.querySelectorAll("button.delete-item");
  deleteItems.forEach(item => {
    item.addEventListener("click", () => {
      alert(`Are you sure you want to remove ${item.dataset.doc}?`);

      const endpoint = `/lists/edit-item/${item.dataset.id}/${item.dataset.doc}`;

      fetch(endpoint, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(data => window.location.href = data.redirect)
      .catch(err => console.log(err));
    });
  });