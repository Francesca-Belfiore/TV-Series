import { API, loadBg, rendFooter, render, setLanguage } from "./utils.js";
import { List } from "./list.js";
import {lang} from "./languages.js";

loadBg();

const changeLanguage = document.querySelector("#language");
changeLanguage.addEventListener("change", () => {
    setLanguage(changeLanguage.value);
    location.reload();
});

const loadList = () =>
    fetch(API)
        .then((response) => response.json()
            .then((data) => List(data.results))
        );

document.addEventListener("DOMContentLoaded", loadList);


function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}

const rightBtn = document.querySelector("#slide");
const leftBtn = document.querySelector("#slideBack");

rightBtn.onclick = function () {
    const container = document.querySelector(".schede");
    sideScroll(container, 'right', 5, 675, 10);
};

leftBtn.onclick = function () {
    const container = document.querySelector(".schede");
    sideScroll(container, 'left', 5, 675, 10);
};


rendFooter();

const modal = document.querySelector(".modal");
const modalMessage = document.querySelector(".modalMessage");
const modalBtn = document.querySelector(".modalBtn");

if (localStorage.getItem("CookieAccepted")) {} else {

    modal.style.top = "0";
    
    modalBtn.addEventListener("click", () => {
        modal.style.top = "-100px";
        localStorage.setItem("CookieAccepted", "yes");
    })
}

render(modalMessage, `${lang.modal}`);