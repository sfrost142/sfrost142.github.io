window.onload = function() {
    var stylesheet = document.getElementById('stylesheet');
    if (localStorage.getItem('colorblindMode') === 'true') {
        stylesheet.setAttribute('href', 'style2.css');
    }
};

document.getElementById('changeStyleButton').addEventListener('click', function() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'style.css') {
        stylesheet.setAttribute('href', 'style2.css');
        localStorage.setItem('colorblindMode', 'true');
    } else {
        stylesheet.setAttribute('href', 'style.css');
        localStorage.setItem('colorblindMode', 'false');
    }
});