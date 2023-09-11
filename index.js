"use strict";

const cube = document.querySelector(".cube");
let currentClass = "";

const noGo = () => {
  const sideToShow = document.getElementById("cube");
  if (currentClass === "show-front") {
    cube.classList.remove(currentClass);
  }
  sideToShow.classList.add("show-left");

  currentClass = sideToShow;
};

const yesGo = () => {
  const sideToShow = document.getElementById("cube");
  if (currentClass === "show-front") {
    cube.classList.remove(currentClass);
  }
  sideToShow.classList.add("show-right");

  currentClass = sideToShow;
};

const confirm = () => {
  console.log("click");
  const sideToShow = document.getElementById("cube");
  if (currentClass === "show-right") {
    cube.classList.remove(currentClass);
  }
  sideToShow.classList.add("show-back");

  currentClass = sideToShow;
};
