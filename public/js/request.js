document.querySelector("#new-request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = document.querySelector("#pet-name").value.trim();
  const petType = document.querySelector("#pet-type").value.trim();
  const petBreed = document.querySelector("#pet-breed").value.trim();
  const petWeight = document.querySelector("#pet-weight").value.trim();
  const serviceType = document.querySelector("#service-type").value.trim();
  const serviceStartDate = document.querySelector("#service-start-date").value.trim();
  const serviceEndDate = document.querySelector("#service-end-date").value.trim();
  const ownerPhone =  document.querySelector("#owner-phone").value.trim();

  const requestBody = JSON.stringify({ petName, petType, petBreed, petWeight, serviceType, serviceStartDate, serviceEndDate, ownerPhone });

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

