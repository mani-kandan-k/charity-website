<template>
    <v-row>
        <v-col>
            <v-card color="themeAccent" rounded="lg"
                class="py-10  d-flex justify-center align-center flex-column text-white">
                <h2>Join Our Mission to Transform Lives</h2>
                <p class="text-body-2 my-10">
                    Every contribution, whether through volunteering, donations, or partnerships, <br> helps us expand
                    our
                    reach and increase our impact in communities across India.
                </p>
                <div>
                    <v-btn height="40" variant="elevated" rounded="lg" color="white"
                        class="px-5 text-capitalize text-body-2 text-themeColor mx-5">
                        Became a volunteer
                    </v-btn>
                    <v-btn height="40" variant="elevated" rounded="lg" color="highlight"
                        class="px-5 text-capitalize text-body-2 text-black mx-5">
                        support our program
                    </v-btn>
                </div>
            </v-card>
        </v-col>
    </v-row>
    <v-row class="mt-10">
        <h2 class="banner --header text-themeHeader text-uppercase py-1 pr-3 ml-4">gallery</h2>
    </v-row>
    <v-slide-group v-model="slider" class="pa-4">
        <v-row>
            <GalleryCard v-for="i in 4" :key="i" />
        </v-row>
    </v-slide-group>
</template>

<script>
import HighlightHeader from '@/components/common/HighlightHeader.vue';
import GalleryCard from './GalleryCard.vue';

export default {
    name: "Gallery",
    components: {
        HighlightHeader,
        GalleryCard,
    },
    data() {
        return {
            slider: null,
        }
    }
};
</script>

<style scoped>
.banner {
    position: relative;
    background: linear-gradient(65deg, white 50%, #ffea00 50%);
}
</style>