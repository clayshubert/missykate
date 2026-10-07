// Fills any element with data-age-since="YYYY-MM-DD" with her age in days.
(function () {
  function render() {
    var now = new Date();
    var today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    document.querySelectorAll('[data-age-since]').forEach(function (el) {
      var p = el.getAttribute('data-age-since').split('-').map(Number);
      var days = Math.floor((today - Date.UTC(p[0], p[1] - 1, p[2])) / 86400000);
      el.textContent = days <= 0 ? 'born today' : days === 1 ? '1 day old' : days + ' days old';
    });
  }
  render();
  setInterval(render, 60000);
})();
