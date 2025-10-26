<template>
    <v-row class="px-2 my-3">
        <h2 class="banner --header text-themeHeader text-uppercase py-1 pr-3 ml-4">{{ headerText }}</h2>
    </v-row>
</template>

<script>
export default {
    name: "HighlightHeader",
    props: {
        headerText: String
    }
}
</script>

<style scoped>
.banner {
    position: relative;
    background: linear-gradient(65deg, white 80%, #ffea00 80%);
}
</style>