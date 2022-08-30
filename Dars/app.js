const H1 = document.querySelector("h1");
console.log("H1 >>>", H1.innerHTML);

const myfunc = () => {
  H1.innerHTML += "Xamidxon";
  // H1.innerHTML = "Xamidxon"
  console.log("h1 >>> ", H1.innerHTML);
};

// Classni Ozgartirish -------------------------

console.log("H1 Class >", H1.className);

const chiqish = () => {
  // H1.className += " name2";
  H1.classList.add("name2");
  console.log("H1 Class >", H1.className);
};

const yoqolish = () => {
  // H1.className += " name2"
  H1.classList.remove("name2");
  console.log("H1 Class >", H1.className);
};

// Night Mode project -----------------------------
let Container = document.querySelector(".container");

const nightmode = () => {
  Container.classList.add("nightmode");
};

const lightmode = () => {
  Container.classList.remove("nightmode");
};
