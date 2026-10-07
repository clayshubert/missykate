// Shows the newest gallery photo (first line of photos/gallery-list.js) on the home page card.
(function () {
  var p = (window.GALLERY || [])[0];
  var box = document.getElementById('latest-photo');
  if (!p || !box) return;
  box.innerHTML = '';
  box.classList.add('has-img');
  var img = document.createElement('img');
  img.src = 'photos/' + p.file;
  img.alt = p.caption || 'Latest photo of Missy Kate';
  box.appendChild(img);
})();
