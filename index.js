document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.querySelector("button:nth-of-type(2)");

  function moveButton() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const newX = Math.random() * (screenWidth - 100);
    const newY = Math.random() * (screenHeight - 50);

    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
  }

  noButton.addEventListener("mouseover", moveButton);
  noButton.addEventListener("click", moveButton);
});

function yesPage() {
  window.location.href = "pages/yes.html";
}
