const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn10 = document.querySelector("#btn10");

const size = document.getElementById("size");
const jumlah = document.getElementById("jumlah");
let counter = 0;
let amount = 0;

function min() {
  if (counter > 0) {
    counter--;
    size.innerHTML = counter;
  }
}

function plus() {
  counter++;
  size.innerHTML = counter;
}

function amountPlus() {
  amount++;
  jumlah.innerHTML = amount;
}

function amountMin() {
  if (amount > 0) {
    amount--;
    jumlah.innerHTML = amount;
  }
}

const thumItem = document.querySelector(".tumb-item");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

thumItem.addEventListener("click", (e) => {
  if (e.target.className == "img-fluid thumb") {
    jumbo.src = e.target.src;
    thumbs.forEach((e) => {
      e.className = "img-fluid thumb";
    });
    e.target.classList.add("active-thumb");
  }
});

//filter

// const color = document.querySelector('.color1')

btn1.addEventListener("click", function () {
  btn1.classList.toggle("bg-active");
});
btn2.addEventListener("click", function () {
  btn2.classList.toggle("bg-active");
});
btn3.addEventListener("click", function () {
  btn3.classList.toggle("bg-active");
});
btn4.addEventListener("click", function () {
  btn4.classList.toggle("bg-active");
});
btn5.addEventListener("click", function () {
  btn5.classList.toggle("bg-active");
});
btn6.addEventListener("click", function () {
  btn6.classList.toggle("bg-active");
});
btn7.addEventListener("click", function () {
  btn7.classList.toggle("bg-active");
});
btn8.addEventListener("click", function () {
  btn8.classList.toggle("bg-active");
});
btn9.addEventListener("click", function () {
  btn9.classList.toggle("bg-active");
});
btn10.addEventListener("click", function () {
  btn10.classList.toggle("bg-active");
});
