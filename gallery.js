(function () {
  var list = window.GALLERY || [];
  var grid = document.getElementById('gallery');
  var count = document.getElementById('photo-count');
  if (count) count.textContent = 'All ' + list.length;
  if (!grid || !list.length) return;
  grid.innerHTML = '';
  list.forEach(function (p) {
    var box = document.createElement('figure');
    box.className = 'photo lift has-img' + (p.shape === 'tall' || p.shape === 'wide' ? ' ' + p.shape : '');
    box.style.margin = '0';
    var img = document.createElement('img');
    img.src = 'photos/' + p.file;
    img.alt = p.caption || 'Photo of Missy Kate';
    img.loading = 'lazy';
    box.appendChild(img);
    grid.appendChild(box);
  });
})();
