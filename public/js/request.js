document.querySelector("#new-request-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const petName = document.querySelector("#pet-name").value.trim();


  // fetch call to a post request to create a new sitting request
  /*

  fetch("/api/requests", {
    method: "POST",
    body: JSON.stringify({
      petName: petName
    }),
    headers: {
      "Content-Type": "application/json"
    }

  */

  alert("Submitted!")
})

