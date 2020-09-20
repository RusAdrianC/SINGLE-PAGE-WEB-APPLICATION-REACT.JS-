import axios from "axios";

export const getNews = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
