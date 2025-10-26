import { createApp } from "vue";
import { createPinia } from "pinia";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import '@fortawesome/fontawesome-free/css/all.css'
import { fa } from 'vuetify/iconsets/fa'

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const myColors = {
  themeColor: "rgba(246, 0, 3, 1)",
  themeColorBg: "rgba(246, 0, 3, 0.15)",
  themeAccent: "rgba(236, 18, 79, 1)",
  themeGreen: "rgba(0, 166, 62, 1)",
  themeGreenBg: "rgba(0, 166, 62, 0.15)",
  greenBgBlur: "background: rgba(0, 166, 62, 0.2);",
  highlight: "rgba(255, 242, 0, 1)",
  highlightDark: "rgba(242, 201, 76, 1)",
  themeBg1: "rgba(152, 16, 250, 1)",
  themeHeader: "rgba(11, 15, 100, 1)",
  iconGold: "rgba(208, 135, 0, 1)",
  iconGoldBg: "rgba(208, 135, 0, 0.15)",
  iconBgGradient1: "rgba(240, 246, 253, 1)",
  iconBgGradient2: "rgba(252, 251, 233, 1)",
  themeGrey1: "rgba(217, 217, 217, 1)",
  themeGrey2: "rgba(217, 217, 217, 0.5)",
  greyText: "rgba(0, 0, 0, 0.55)",
};

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa
    },
  },
  defaults: {
    global: {
      ripple: false,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: myColors,
      },
      dark: {
        dark: true,
        colors: myColors,
      },
    },
  },
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
