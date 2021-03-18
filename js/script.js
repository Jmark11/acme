tns({
    container: '.slider01',
    fixedWidth: 260,
    loop: false,
    gutter: 15,
    edgePadding: 30,
    controls: false,
    navPosition: 'bottom',
    preventScrollOnTouch: 'auto'
});

tns({
    container: '.slider02',
    fixedWidth: 260,
    loop: false,
    gutter: 15,
    edgePadding: 30,
    controls: false,
    navPosition: 'bottom',
    preventScrollOnTouch: 'auto'
});

function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -70);
        requestAnimationFrame(scrollToTop);
    } else clearTimeout(scrollToTop);
}

const globalNav = document.querySelector("#globalNav");
const headerArea = document.querySelector(".headerArea")
const navOverlay = document.querySelector("#overlay");
const menuBtn = document.querySelector("#menuBtn");
const menuBtnImg = menuBtn.querySelector('img');
const barBlock = document.querySelector('.barBlock');
let showMenu = false;
let buttonStates = {
  "./images/menu_close.png" : "./images/menu_open.png",
  "./images/menu_open.png" : "./images/menu_close.png"
}

menuBtn.addEventListener("click", e => {
  e.preventDefault();
  showMenu = !showMenu
  if (showMenu === true) {
    navOverlay.style.display = "block"
    headerArea.classList.add("menuActive");
    bodyScrollLock.disableBodyScroll(globalNav);
  } else {
    navOverlay.style.display = "none"
    headerArea.classList.remove("menuActive");
    bodyScrollLock.enableBodyScroll(globalNav);
  }
  menuBtnImg.src = buttonStates[menuBtnImg.getAttribute("src")]
});

barBlock.addEventListener("click", e => {
    scrollToTop();
})

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        barBlock.classList.add("show");
    } else {
        barBlock.classList.remove("show");
    }
};