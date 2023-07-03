window.onload = function () {
  setTimeout(function () {
    document.querySelector("main").style.display = "block";
  }, 5000);
};

const btnHtml = document.querySelectorAll(".button-html");

btnHtml.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnHtml.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("active");
      }
    });
    btn.classList.add("active");
  });
});
