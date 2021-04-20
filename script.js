const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const exclamation = document.querySelector('.exclamation');
const title = document.querySelector('.title');
const modalOverlay = document.querySelector('.modal-overlay');

window.addEventListener('DOMContentLoaded', () => {
  closeBtn.style.display = "none";
  exclamation.style.display = "none";
});

openBtn.addEventListener('mouseover', () => {
  openBtn.style.backgroundColor = "rgb(117, 118, 119, 0.8)";
})

openBtn.addEventListener('mouseout', () => {
  openBtn.style.backgroundColor = "rgb(117, 118, 119)";
})

openBtn.addEventListener('click', () => {
  openBtn.style.display = "none";
  title.innerText = "Remember to save your work before continuing!";
  title.style.fontSize = "0.8rem";
  closeBtn.style.display = "block";
  exclamation.style.display = "inline-block";
  modalOverlay.classList.toggle('modal-open');
});

closeBtn.addEventListener('click', () => {
  title.innerText = "Modal Project";
  title.style.fontSize = "3rem";
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  exclamation.style.display = "none";
  modalOverlay.classList.toggle('modal-open');
});

closeBtn.addEventListener('mouseover', () => {
  closeBtn.style.animation = "enlarge 0.5s";
  closeBtn.style.fontSize = "1.5rem";
});

closeBtn.addEventListener('mouseout', () => {
  closeBtn.style.animation = "reduce 0.5s";
  closeBtn.style.fontSize = "1.2rem";
});