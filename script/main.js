let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

function onSubmit(){
    alert("Tack för ditt meddelande. Vi återkommer så snart vi kan");
}
function searchBooking(){
  alert("Kul att du gillar det du ser och vill göra en bokning. Tyvärr är detta endast en fiktiv sida. Men hjälp oss sälja in det till ett riktigt företag så ser vi till att du får rabatt sedan ;)");
}
function toggleMenu() {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
      menu.style.right = "0%";
      documentBody.style.overflow = "hidden";
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
      menu.style.right = "-100%";
      documentBody.style.overflow = "auto";
    }
  }
  
  window.addEventListener("load", function () {
    menuBtn.addEventListener("click", function () {
      toggleMenu();
    });
    for(let i = 0; links.length; i++){
      links[i].addEventListener("click", function(){
        toggleMenu();
      });
    }
  });