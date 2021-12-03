import { lang } from "./languages.js";

const API = "https://api.themoviedb.org/3/trending/tv/week?api_key=3319345228b291a10d08c2ae9106f172";
const DETAILS = "https://api.themoviedb.org/3/tv";
const PATH = "https://image.tmdb.org/t/p/original/";

const render = (container, content) => (container.innerHTML = content);

export { API, DETAILS, PATH, render };

const loadBg = () =>
    fetch(API)
        .then((response) => response.json()
        .then((data) => {
            const images = data.results.map(a => a.backdrop_path);
            const hero = document.querySelector(".hero");

            function cycleBg() {

                images.forEach((image, i) => {
                    setTimeout(()=> {
                        hero.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${images[i]}")`;
                    }, i * 6000);
                });
            }

            cycleBg();
            setInterval(cycleBg, (images.length * 6000));
        })
    )

export {loadBg};

export function rendFooter() {
    const footer = document.querySelector("footer");
    render(footer, `<div>
    <a href="https://github.com/Francesca-Belfiore"><img src="https://img.icons8.com/ios-filled/35/ffffff/github.png" alt="github logo"></a>
    <a href="https://www.linkedin.com/in/francescabelfiore/"><img src="https://img.icons8.com/ios-filled/36/ffffff/linkedin.png" alt="linkedin logo"></a>
    <p>${lang.footerTitle}</p>

    <ul>
        <li>${lang.footer1}</li>
        <li>${lang.footer2}</li>
        <li>${lang.footer3}</li>
        <li>${lang.footer4}</li>
        <li>${lang.footer5}</li>
        <li>${lang.footer6}</li>
        <li>${lang.footer7}</li>
        <li>${lang.footer8}</li>
        <li>${lang.footer9}</li>
        <li>${lang.footer10}</li>
        <li>${lang.footer11}</li>
        <li>${lang.footer12}</li>
        <li>${lang.footer13}</li>
        <li>${lang.footer14}</li>
        <li>${lang.footer15}</li>
        <li>${lang.footer16}</li>
    </ul>

    <small>© 2021 - Francesca Belfiore - TV Series</small></div>`
)}

export function setLanguage(selectedLang) {
    localStorage.setItem('language', selectedLang);
}