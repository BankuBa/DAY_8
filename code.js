let icons = document.querySelectorAll(".icon");

icons.forEach((icon) => {
  let list = icon.closest(".list");
  let paragraph = document.querySelector(".paragraph");

  icon.addEventListener("click", () => {
    paragraph.classList.toggle("minus");

    icon.classList.toggle("minus_icon");
  });
});


