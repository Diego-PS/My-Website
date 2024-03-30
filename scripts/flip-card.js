const cards = document.querySelectorAll(".flip-container .flipper")

cards.forEach(card => {
  card.addEventListener("click", function () {
    card.classList.toggle("flip")
  })
});