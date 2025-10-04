const featuresModal = $.querySelector(".features__modal");
const featuresElem = $.querySelector("#features");
const cancelModalBtn = $.querySelector("#cancel-modal");
const closeModal = $.querySelector(".feature__cancel-modal");
const modalOverlay = $.querySelector(".modal__overlay");
const dateModal = $.querySelector(".date__modal");
const dateElem = $.querySelector("#date")
const dateCancel = $.querySelector(".date__cancel");
const dateCancelIcon = $.querySelector("#cancel-date");
const dateOverlay = $.querySelector(".date__overlay")

dateElem.addEventListener("click", () => {
  dateModal.classList.add("date__modal--active");
  dateOverlay.classList.add("overlay--active");
});

dateCancelIcon.addEventListener("click", () => {
  dateModal.classList.remove("date__modal--active");
  dateOverlay.classList.remove("overlay--active");
});

dateCancel.addEventListener("click", () => {
  dateModal.classList.remove("date__modal--active");
  dateOverlay.classList.remove("overlay--active");
});



featuresElem.addEventListener("click", () => {
  featuresModal.classList.add("features__modal--active");
  modalOverlay.classList.add("overlay--active");
});

cancelModalBtn.addEventListener("click", () => {
  featuresModal.classList.remove("features__modal--active");
  modalOverlay.classList.remove("overlay--active");
});

closeModal.addEventListener("click", () => {
  featuresModal.classList.remove("features__modal--active");
  modalOverlay.classList.remove("overlay--active");
});

modalOverlay.addEventListener("click", () => {
  featuresModal.classList.remove("features__modal--active");
  modalOverlay.classList.remove("overlay--active");
});

dateOverlay.addEventListener("click", () => {
  dateModal.classList.remove("date__modal--active");
  dateOverlay.classList.remove("overlay--active");
});