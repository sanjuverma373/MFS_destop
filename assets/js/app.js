let a = document.getElementById("navBar");
let flow = document.querySelector(".sec-flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuIcon = document.querySelector("#menuIcon");
let lorem = document.querySelector(".lorem");
let lorem1 = document.querySelector(".lorem1");
let lorem2 = document.querySelector(".lorem2");
let lorem3 = document.querySelector(".lorem3");
let lorem4 = document.querySelector(".lorem4");
let lorem5 = document.querySelector(".lorem5");



menuIcon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("fix-lft")) {
        a.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
});

lorem .addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
lorem1 .addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
lorem2 .addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
lorem3 .addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
lorem4 .addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
lorem5 .addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

// backToTop
let backToTop = document.getElementById('backtotop')
 backToTop.addEventListener("click", function () {
 window.scrollTo(0, 0)
});
window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        backToTop.classList.remove('display_none');
        backToTop.classList.add('display_block');
    } else {
        backToTop.classList.remove('display_block');
        backToTop.classList.add('display_none');
    }
});
