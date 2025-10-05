<template>
  <v-app>
    <v-main>
      <AppHeader />
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/app/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
