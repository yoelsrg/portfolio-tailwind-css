//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
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
}