<template>
    <HeroSection />
    <AboutUs />
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import AboutUs from "./components/AboutUs.vue";

export default {
    name: "HomeViewComponent",
    components: {
        HeroSection,
        AboutUs
    }
}
</script>
