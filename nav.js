// Area Guides menu: tap to open on phones; Westfield neighborhoods expand
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.dd-btn');
  if (btn && window.matchMedia('(max-width:980px)').matches) {
    e.preventDefault();
    btn.parentElement.classList.toggle('open');
    return;
  }
  var t = e.target.closest('.sub-toggle');
  if (t) {
    e.preventDefault();
    var c = t.closest('.dd-city');
    c.classList.toggle('open');
    t.setAttribute('aria-expanded', c.classList.contains('open'));
  }
});
