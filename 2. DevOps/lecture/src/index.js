import "./style.scss";
import Navigo from "navigo";

const root = null;
const useHash = true; // Defaults to: false
const hash = "#!"; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

document.addEventListener("DOMContentLoaded", function() {
  router
    .on(() => {
      renderChunk(import(/* webpackChunkName: "home" */"./pages/home"));
    })
    .on("test1", () => {
      renderChunk(/* webpackChunkName: "test1" */import("./pages/test1"));
    })
    .on("test2", () => {
      renderChunk(/* webpackChunkName: "test2" */import("./pages/test2"));
    })
    .resolve();

  let lastPage = null;

  function renderChunk(page) {
    if (lastPage && lastPage.destroy) {
      lastPage.destroy();
    }

    const renderArea = document.getElementById("content-area");
    renderArea.innerHTML = `<h1>Loading</h1>`;
    page.then(pageScript => {
      pageScript.render(renderArea);
      lastPage = pageScript;
    });
  }
});
