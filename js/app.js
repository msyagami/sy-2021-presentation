particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

// window.onscroll = function() {stickyNav()};

// var nav = document.getElementById("nav");

// var sticky = nav.offsetTop;

// function stickyNav() {
//     if (window.pageYOffset >= sticky) {
//         nav.classList.add("sticky");
//     } else {
//         nav.classList.remove("sticky");
//     }
// }

// window.onload = window.alert("Hello! \n\nThank you for testing my portfolio page. This is currently in development and it will needs some work. \n\nAny issues please report it here: \nhttps://github.com/msyagami/sy-2021-presentation. \nThank you!")

function openMobileNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }