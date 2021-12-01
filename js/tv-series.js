import { PATH, DETAILS, render, loadBg, rendFooter } from "./utils.js";
import { lang } from "./languages.js";

loadBg();

const getId = () => parseInt(location.href.split("=")[1]);

function View(id = 0) {

    fetch(`${DETAILS}/${id}/videos?api_key=3319345228b291a10d08c2ae9106f172`)
        .then(response => response.json())
        .then((trailer) => {
            const trailerURL = trailer.results[0].key;

            fetch(`${DETAILS}/${id}?api_key=3319345228b291a10d08c2ae9106f172${lang.apiLang}`)
                .then(response => response.json())
                .then((serie) => {

                    const article = document.querySelector("article");
                    render(article, `                
                    <h1>${serie.name}</h1>
                        <div class="description">
                            <img src="${PATH}${serie.poster_path}">
                            <div>                             
                                <h3>${lang.description}:</h3><p>${serie.overview}</p>
                                <p>${lang.year}: ${(serie.first_air_date).substring(0, 4)}, ${lang.genre}: ${serie.genres[0].name}</p>
                                <p>${lang.platform}: ${serie.networks[0].name}</p>
                                <h3>Trailer:</h3>
                                <iframe type="text/html" width="320" height="240"
                                    src="https://www.youtube.com/embed/${trailerURL}"
                                    frameborder="0">
                                </iframe>  
                            </div>
                        </div>
                    <br>
                    <a href="https://francesca-belfiore.github.io/TV-Series/" id="back">${lang.back2home}</a>`
                    );

                    article.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                });
        });
}

View(getId());

rendFooter();
