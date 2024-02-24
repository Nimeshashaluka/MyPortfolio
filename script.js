function closeBtn() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
function menuBtn() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
const sidebar = document.querySelectorAll(".sidebar");
const service = document.querySelectorAll(".service");

let currentSection = "home";

window.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= (sectionEl.offsetTop - 200)) {
      currentSection = sectionEl.id;
    }
  });
  // sidebar.forEach(nav => {
  //   if (nav.href.includes(currentSection)) {
  //     document.querySelectorAll('.active').classList.remove('active');
  //     nav.classList.add("active");
  //   }
  // });
});




