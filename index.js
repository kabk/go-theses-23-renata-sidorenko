
const toggleBtn = document.getElementById("toggle");
const navMenu = document.getElementById("navMenu");
const links = document.getElementsByClassName("navLink");

let navBarOpen = false;

toggleBtn.addEventListener("click", function () {
  if (!navBarOpen) {
    navMenu.classList.remove("close");
    navMenu.classList.add("open");

    toggleBtn.classList.remove("close");
    toggleBtn.classList.add("open");

    navBarOpen = true;
  } else if (navBarOpen) {
    navMenu.classList.remove("open");
    navMenu.classList.add("close");

    toggleBtn.classList.remove("open");
    toggleBtn.classList.add("close");

    navBarOpen = false;
  }
});


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    navMenu.classList.remove("open");
    navMenu.classList.add("close");

    toggleBtn.classList.remove("open");
    toggleBtn.classList.add("close");

    navBarOpen = false;
  });
}



$('a[href*="#"]')
  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     
      if (target.length) {
        
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000, function() {
          
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });
