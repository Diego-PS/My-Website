function switchReadMore() {
    const moreTexts = document.querySelectorAll(".more")
    const btnText = document.getElementById("myBtn");

    if (btnText.innerHTML === "Hide full bio") {
        btnText.innerHTML = "View full bio";
        moreTexts.forEach(moreText => {
            moreText.style.display = "none"
        });
    } else {
        btnText.innerHTML = "Hide full bio";
        moreTexts.forEach(moreText => {
            moreText.style.display = "block"
        });
    }
}
  