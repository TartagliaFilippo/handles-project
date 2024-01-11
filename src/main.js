import { createApp } from "vue";

import { router } from "./router";

import "./assets/scss/style.scss";

import * as Bootstrap from "bootstrap";

// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleLeft, faAngleRight);

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
