function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  const whatsappUrl = `https://wa.me/+6287748671540?text=Nama:%20${name}%0AEmail:%20${email}%0APesan:%20${pesan}`;
  const mailtoUrl = `mailto:naufalfebriansyah9034@gmail.com?subject=Pesan%20dari%20${name}&body=Nama:%20${name}%0AEmail:%20${email}%0APesan:%20${pesan}`;
  event.preventDefault();
  alert("Pesan Anda telah dikirim!");

  // Buka WhatsApp
  window.open(whatsappUrl, "_blank");

  // Buka email
  window.location.href = mailtoUrl;
}

document.addEventListener("click", function (event) {
  var navbarNav = document.getElementById("navbarNav");
  var navbarToggler = document.querySelector(".navbar-toggler");

  if (
    navbarNav.classList.contains("show") &&
    !navbarNav.contains(event.target) &&
    !navbarToggler.contains(event.target)
  ) {
    var collapse = new bootstrap.Collapse(navbarNav);
    collapse.hide();
  }
});
