/*=================== toggle icon navbar ===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

/*=================== scroll sections active link ===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = docuent.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    
    navbar.classList.remove('active');
};






const navAnim = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    //toggle nav
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
        //animate items
  
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkMove 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  
      //burger animation
      burger.classList.toggle("toggle");
  
    });
  
  
  };
  navAnim();