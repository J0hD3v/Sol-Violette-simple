const menuLink = document.getElementsByClassName("menuLink");
const sections = document.getElementsByClassName("expandable");

for (i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", function() {
    const content = this.nextElementSibling;
    if (content.style.height === "50vh") {
        content.style.height = "0";
    } else {
        for (const section of sections) {
            section.style.height = "0";
        }
        content.style.height = "50vh";
    }
  });
}
