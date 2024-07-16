document.querySelector("#new-request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = document.querySelector("#pet-name").value.trim();
  const requestBody = JSON.stringify({ petName });
  fetch("/api/requests", {
    method: "POST",
    body: requestBody,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      alert("Submitted!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

