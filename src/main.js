import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import Data from "./static/data.json";

const app = createApp(App);

app.use(router);

app.config.globalProperties.$functions = {
  switchContent(app) {
    let overviewBtn = document.getElementById("overviewBtn");
    let structureBtn = document.getElementById("structureBtn");
    let surfaceBtn = document.getElementById("surfaceBtn");
    let planetImage = document.getElementById("planetImage");
    let internalImage = document.getElementById("internalImage");
    let geologyImage = document.getElementById("geologyImage");
    let contentText = document.getElementById("contentText");
    let source = document.getElementById("source");

    overviewBtn.addEventListener("click", function() {
      if (contentText.innerHTML !== app.data.overview.content) {
        contentText.innerHTML = app.data.overview.content;
      }
      if (source.href !== app.data.overview.source) {
        source.href = app.data.overview.source;
      }
      planetImage.classList.remove("hidden");
      internalImage.classList.add("hidden");
      geologyImage.classList.add("hidden");
    });
    structureBtn.addEventListener("click", function() {
      if (contentText.innerHTML !== app.data.structure.content) {
        contentText.innerHTML = app.data.structure.content;
      }
      if (source.href !== app.data.structure.source) {
        source.href = app.data.structure.source;
      }
      planetImage.classList.add("hidden");
      internalImage.classList.remove("hidden");
      geologyImage.classList.add("hidden");
    });
    surfaceBtn.addEventListener("click", function() {
      if (contentText.innerHTML !== app.data.geology.content) {
        contentText.innerHTML = app.data.geology.content;
      }
      if (source.href !== app.data.geology.source) {
        source.href = app.data.geology.source;
      }
      planetImage.classList.remove("hidden");
      internalImage.classList.add("hidden");
      geologyImage.classList.remove("hidden");
    });
  },
  activeBtn() {
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  },
};

app.config.globalProperties.$json = {
  mercury: Data[0],
  venus: Data[1],
  earth: Data[2],
  mars: Data[3],
  jupiter: Data[4],
  saturn: Data[5],
  uranus: Data[6],
  neptune: Data[7],
};

app.mount("#app");
