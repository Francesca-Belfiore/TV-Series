import { API } from "./utils.js";
import { List } from "./list.js";

const loadList = () =>
    fetch(API)
        .then((response) => response.json()
        .then((data) => List(data.results))
        );

document.addEventListener("DOMContentLoaded", loadList);