let toggleNavStatus = false;
let getNavHamburger = document.querySelector(".nav-hamburger");
let getNavHamburgerUL = document.querySelector(".nav-hamburger ul");
let getNavHamburgerSpan = document.querySelectorAll(".nav-hamburger ul li span");
let arrayLength = getNavHamburgerSpan.length;

let hamburgerButton = document.querySelector(".btn-toggle");
hamburgerButton.addEventListener("click", () => { toggleNav(); }, false);
hamburgerButton.addEventListener("mouseover", () => { toggleNav(); }, false);
hamburgerButton.addEventListener("mouseout", () => { toggleNav(); }, false);

const toggleNav = () => {
    if (toggleNavStatus === false) {
        getNavHamburgerUL.style.visibility = "visible";
        getNavHamburger.style.width = "250px";

        for (let i = 0; i < arrayLength; i++) {
            getNavHamburgerSpan[i].style.opacity = "1";
        }
        toggleNavStatus = true;

    } else if (toggleNavStatus === true) {
        for (let i = 0; i < arrayLength; i++) {
            getNavHamburgerSpan[i].style.opacity = "0";
        }

        getNavHamburger.style.width = "0";
        getNavHamburgerUL.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}

const changeColor = (color) => {
  let colorBody = document.body;
  let currentColor = document.getElementById("colorBody").className;
  let newColor = color + "-background"
  if (currentColor !== "") {
      colorBody.classList.remove(currentColor);
      colorBody.classList.add(newColor);
      toggleNav();
  } else {
      colorBody.classList.add(newColor);
      toggleNav();
  }
}

for (let index = 0; index < getNavHamburgerSpan.length; index++){
    let color = getNavHamburgerSpan[index].className;
    getNavHamburgerSpan[index].addEventListener("click", () => { changeColor(color); }, false);
}

window.addEventListener("keydown", (event) => {
    let className = colorBody.className;
    if (className !== "") {
        colorBody.classList.remove(className);
    }

    if (event.key === "1") {
        colorBody.classList.add("rood-background");
    } else if (event.key === "2") {
        colorBody.classList.add("oranje-background");
    } else if (event.key === "3") {
        colorBody.classList.add("geel-background");
    } else if (event.key === "4") {
        colorBody.classList.add("groen-background");
    } else if (event.key === "5") {
        colorBody.classList.add("blauw-background");
    } else if (event.key === "6") {
        colorBody.classList.add("indigo-background");
    } else if (event.key === "7") {
        colorBody.classList.add("paars-background");
    }
})


  








