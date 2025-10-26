<template>
    <p class="font-weight-medium text-highlight">{{ LinkHeader }}</p>
    <p v-for="(link, key) in Links" :key="key">
        <span>{{ link }}</span>
    </p>
</template>

<script>
export default {
    name: "FooterLinks",
    props: {
        LinkHeader: String,
        Links: Array,
        To: String,
    },
}
</script>