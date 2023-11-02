const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');
const $sidenav = document.querySelector('#sidebar-nav');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
  $sidenav.classList.toggle('toggled');
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})