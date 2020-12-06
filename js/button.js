const menuButton = document.querySelector('button');
const navbar = document.getElementById('boot-menu');

menuButton.addEventListener("click", () => {
    if (navbar.style.background == 'linear-gradient(to right, rgb(36, 59, 85), rgb(20, 30, 48))') {
        setTimeout(() => navbar.style.background = 'transparent', 300);
    } else {
        navbar.style.background = '#141E30';
        navbar.style.background = '-webkit-linear-gradient(to right, #243B55, #141E30)';
        navbar.style.background = 'linear-gradient(to right, #243B55, #141E30)';
    }
})

var md = window.matchMedia("(max-width: 768px)");

function addClass(match) {
    let btnRow = document.querySelector('div.linkz');
    let btnList = btnRow.querySelectorAll('div');

    if (match) {
        for (let i = 0; i < btnList.length; i++) {
            btnList[i].classList.add('col-12');
        }    
    } else {
        for (let i = 0; i < btnList.length; i++) {
            btnList[i].classList.remove('col-12');
        }  
    }
}

md.addEventListener("change", (e) => addClass(e.matches));

window.addEventListener("load", () => {
    const md = window.matchMedia("(max-width: 768px)");

    md.addEventListener("change", e => addClass(e.matches));
    addClass(md.matches);
})