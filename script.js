const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var eleC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");

eleC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});

eleC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

var loader = document.querySelector("#loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 4000);

const tabs = document.querySelector(".swip");
const scrol = document.querySelector(".scroll");

const btn1 = document.querySelector(".tab1");

btn1.addEventListener("click", function () {
  tabs.style.opacity = 1;
});
