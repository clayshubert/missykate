(function () {
  var list = window.GALLERY || [];
  var grid = document.getElementById('gallery');
  var chips = document.getElementById('albums');
  if (!grid || !list.length) return;

  var albums = [];
  list.forEach(function (p) { if (p.album && albums.indexOf(p.album) < 0) albums.push(p.album); });

  function show(album) {
    grid.innerHTML = '';
    list.filter(function (p) { return !album || p.album === album; }).forEach(function (p) {
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
    chips.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-current', b.dataset.album === (album || '') ? 'true' : 'false');
    });
  }

  chips.innerHTML = '';
  [''].concat(albums).forEach(function (a) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.dataset.album = a;
    var n = a ? list.filter(function (p) { return p.album === a; }).length : list.length;
    b.textContent = (a || 'All') + ' ' + n;
    b.addEventListener('click', function () { show(a); });
    chips.appendChild(b);
  });
  show('');
})();
