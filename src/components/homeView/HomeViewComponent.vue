<template>
    <HeroSection />
    <AboutUs />
    <FoundersMessage />
    <OurActivities />
    <Gallery />
    <Feedback />
    <UpcomingEvents />
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import AboutUs from "./components/AboutUs.vue";
import FoundersMessage from "./components/FoundersMessage.vue";
import OurActivities from "./components/OurActivities.vue";
import Gallery from "./components/Gallery.vue";
import Feedback from "./components/Feedback.vue";
import UpcomingEvents from "./components/UpcomingEvents.vue";

export default {
    name: "HomeViewComponent",
    components: {
        HeroSection,
        AboutUs,
        FoundersMessage,
        OurActivities,
        Gallery,
        Feedback,
        UpcomingEvents,
    }
}
</script>
