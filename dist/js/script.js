//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top"); 

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

//Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});


function buatTautan() {
  // Mendapatkan nilai pesan dari textarea
  var name = document.getElementById("name").value;
  var email = document.getElementById("nope").value;
  var message = document.getElementById("message").value;


  // Membuat URL tautan dengan menambahkan nilai pesan
  var tautan = "https://wa.me/6282276976177?text=" + 
  "Nama :  " + encodeURIComponent(name) + ", " + "%0A" +
  "%0ANo.hp :  " + encodeURIComponent(email) + ", " + "%0A" +
  "%0APesan :  " + encodeURIComponent(message) + ".";

  // Mengarahkan pengguna ke URL tautan
  window.location.href = tautan;
};

  

// Klik diluar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});


// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
