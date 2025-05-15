
document.querySelector("#hamburger").onclick = () => 
document.querySelector(".navbar").classList.toggle("open");

const themeIcons = document.querySelectorAll(".theme-toggle img");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

themeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});