import { PATH, render } from "./utils.js";
import { lang } from "./languages.js";

const List = (data) => {
    const elements = data.map((item) =>
        `<div class="scheda">
                <a href="tv-series.html?id=${item.id}">
                    <img src="${PATH}${item.backdrop_path}">
                    <div class="titles">
                        <p>${item.name}</p>
                        ${(item.first_air_date).substring(0, 4)}
                    </div>
                </a>
        </div>`).join("");

    const container = document.querySelector("#container");
    render(container, `
        <h1>${lang.title}</h1>
        <div class="schede">${elements}</div>`
    );
};

export { List };
