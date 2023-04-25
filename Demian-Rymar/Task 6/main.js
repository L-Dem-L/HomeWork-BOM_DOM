const links = document.querySelectorAll('a[href^="http://"]');
for (let i = 0; i < links.length; i++) {
    links[i].classList.add("external-link");
}
