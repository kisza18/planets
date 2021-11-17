import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import DefaultLayout from "./layout/layout.vue";

const app = createApp(App);

app.use(router);
app.component("default", DefaultLayout);

app.config.globalProperties.$functions = {
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

app.mount("#app");
