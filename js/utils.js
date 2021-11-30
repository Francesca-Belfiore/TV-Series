const API = "https://api.themoviedb.org/3/trending/tv/week?api_key=3319345228b291a10d08c2ae9106f172";
const DETAILS = "https://api.themoviedb.org/3/tv";
const PATH = "https://image.tmdb.org/t/p/original/";

const render = (container, content) => (container.innerHTML = content);

export { API, DETAILS, PATH, render };