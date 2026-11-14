// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var bar = document.querySelector('.topbar');
  var btn = document.querySelector('.menu-toggle');
  if (!bar || !btn) return;
  btn.addEventListener('click', function () {
    var open = bar.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
