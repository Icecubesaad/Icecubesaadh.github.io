let btn = document.getElementById("menu");
let side_menu = document.getElementById("big-white");
let btn_close = document.getElementById("close");
let options1 = document.getElementById("dropdown-1");
let options2 = document.getElementById("dropdown-2");
let options3 = document.getElementById("dropdown-3");
let options4 = document.getElementById("dropdown-4");
let options5 = document.getElementById("dropdown-5");
let options6 = document.getElementById("dropdown-6");
let contact = document.getElementById("contact");
let black_strip1 = document.getElementById("black-strip-1");
let black_strip2 = document.getElementById("black-strip-2");
let black_strip3 = document.getElementById("black-strip-3");
let black_strip4 = document.getElementById("black-strip-4");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
black_strip1.style.height = "0";
black_strip2.style.height = "0";
black_strip3.style.height = "0";
black_strip4.style.height = "0";
side_menu.style.width = "0";
options1.style.display = "none";
contact.style.display = "none";
options2.style.display = "none";
options3.style.display = "none";
options4.style.display = "none";
options5.style.display = "none";
options6.style.display = "none";

btn.addEventListener("click", function () {
  side_menu.style.width = "250px";
  options1.style.display = "block";
  options2.style.display = "block";
  options3.style.display = "block";
  contact.style.display = "block";
  options4.style.display = "block";
  options5.style.display = "block";
  options6.style.display = "block";
  btn_close.style.display = "block";

});
btn_close.addEventListener("click", function () {
  btn_close.style.display = "none";
  side_menu.style.width = "0";
  options1.style.display = "none";
  options2.style.display = "none";
  contact.style.display = "none";
  options3.style.display = "none";
  options4.style.display = "none";
  options5.style.display = "none";
  options6.style.display = "none";
});
first.addEventListener("mouseover", function () {
  black_strip1.style.height = "80px";
});
first.addEventListener("mouseout", function () {
  black_strip1.style.height = "0";
});
second.addEventListener("mouseover", function () {
  black_strip2.style.height = "80px";
});
second.addEventListener("mouseout", function () {
  black_strip2.style.height = "0";
});
third.addEventListener("mouseover", function () {
  black_strip3.style.height = "80px";
});
third.addEventListener("mouseout", function () {
  black_strip3.style.height = "0";
});
fourth.addEventListener("mouseover", function () {
  black_strip4.style.height = "80px";
});
fourth.addEventListener("mouseout", function () {
  black_strip4.style.height = "0";
});
let search = document.getElementById("navbar");
let btn_search = document.getElementById("btn_search");
search.style.display = "none";
btn_search.addEventListener("click", function () {
  if (search.style.display == "none") {
    search.style.display = "block";
  } else {
    search.style.display = "none";
  }
});