<template>
    <h2 class="banner --header themeColor-Text text-uppercase py-1 pr-3">{{ headerText }}</h2>
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