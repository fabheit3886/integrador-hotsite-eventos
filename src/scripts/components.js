function loadComponent(id, path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

loadComponent('header', '/src/components/header.html');
loadComponent('footer', '/src/components/footer.html');
