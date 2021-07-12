import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faEnvelopeOpenText,
  faLink,
  faTimes,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faEnvelopeOpenText,
  faLinkedin,
  faGithub,
  faLink,
  faTimes,
  faUserGraduate
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
