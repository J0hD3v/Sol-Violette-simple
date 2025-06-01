const menuLink = document.getElementsByClassName("menuLink");
const sections = document.getElementsByClassName("expandable");

for (i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function() {
    const content = this.nextElementSibling;

    if (content.style.height === "50vh") {
        // si ouvert -> ferme
        content.style.height = "0";
        content.style.padding = "0 2rem";
    } else {
        // si fermé -> ouvre
        for (const section of sections) {
            // ferme les autres
            section.style.height = "0";
            section.style.padding = "0 2rem";
        }
        content.style.height = "50vh";
        content.style.padding = "2rem 2rem";
    }
  });
}
