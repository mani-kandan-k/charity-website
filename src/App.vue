<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "./components/app/AppHeader.vue";
import AppFooter from "./components/app/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
};
</script>
