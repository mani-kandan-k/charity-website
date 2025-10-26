<template>
    <SectionHeader sec-title="upcoming events"
        sec-desc="Join us in our mission to create positive change. Participate in our upcoming community events and make a difference."
        class="" />
    <v-row>
        <v-col style=" background: linear-gradient(to bottom, white 50%, red 50%);" class="--center pb-10">
            <v-card class="pa-10" width="85vw" rounded="lg">
                <img class="rounded-xl" src="../../../assets/hero_section.png" alt="upcoming_events"
                    style=" width: 100%; height: 50vh; object-fit: cover;">
                <p class="text-h5 font-weight-black mt-3">Community Health Camp</p>
                <p class="text-h6 font-weigh-light mt-1">
                    Free health checkups, medical consultations, and health awareness programs for rural communities.
                </p>
                <div class="font-weight-medium mt-7">
                    <span class="">Date : </span>
                    <span class="ml-5">Time : </span>
                    <span class="ml-5">Place : </span>
                </div>
            </v-card>
        </v-col>
    </v-row>
    <v-slide-group v-model="slider" class="pa-4">
        <v-row>
            <GalleryCard v-for="i in 4" :key="i" />
        </v-row>
    </v-slide-group>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader.vue';
import GalleryCard from './GalleryCard.vue';

export default {
    name: "UpcomingEvents",
    components: {
        SectionHeader,
        GalleryCard,
    },
    data() {
        return {
            slider: null,
        }
    }
};
</script>