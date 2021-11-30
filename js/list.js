import { PATH, render } from "./utils.js";

const List = (data) => {
    const elements = data
        .map((item) =>
            `<div class="scheda">
                <a href="#id=${item.id}">
                    <img src="${PATH}${item.backdrop_path}">
                    <div class="titles">
                        <p>${item.name}</p>
                        ${(item.first_air_date).substring(0,4)}
                    </div>
                </a>
            </div>`).join("");

    const container = document.querySelector("#container");
    render(container, `
        <h1>SerieTV più Popolari su Netflix (e non solo!)</h1>
        <div class="schede">${elements}</div>`
    );
};

export { List };