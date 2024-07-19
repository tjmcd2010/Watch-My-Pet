// Delete request function
function deleteRequest(requestId) {
  const confirmDelete = confirm("Are you sure you want to delete this request?");
  if (!confirmDelete) {
    return;
  }
  fetch(`/api/request/${requestId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/request"
      } else {
        alert("Failed to delete request.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Add event listener to delete button
document.querySelectorAll(".delete-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const requestedId = button.getAttribute("data-request-id");
    deleteRequest(requestedId);
  });
});
