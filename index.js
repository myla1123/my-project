const button = document.querySelector(".open-btn");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".modal-close");
button.addEventListener("click", onBtnClick);
closeBtn.addEventListener("click", onBtnClick);
function onBtnClick() {
  backdrop.classList.toggle("hidden");
}