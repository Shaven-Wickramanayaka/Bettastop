import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// Font awesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
