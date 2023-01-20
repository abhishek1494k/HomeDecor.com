  // Get the modal, button and close button
  var modal = document.getElementById("modal");
  var openModal = document.getElementById("open-modal");
  var closeModal = document.getElementById("close-modal");

  // When the user clicks the button, open the modal
  openModal.onclick = function () {
    modal.classList.remove("hidden");
  };

  // When the user clicks the close button, close the modal
  closeModal.onclick = function () {
    modal.classList.add("hidden");
  };

  // When the user clicks outside of the modal, close the modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.add("hidden");
    }
  };