import "bootstrap";
import "../scss/main.scss";

const modal = document.querySelector(".my-modal");
const openBtn = document.querySelector(".open-modal");
const closeBtn = document.querySelector(".close-modal-btn");
const message = document.querySelector(".video");

openBtn.addEventListener("click", () => {
  modal.showModal();
});

closeBtn.addEventListener("click", () => {
  modal.close();
});
