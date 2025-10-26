<template>
    <SectionHeader sec-title="Stories of Impact"
        sec-desc="Hear from the lives we've touched - beneficiaries, volunteers, partners, and supporters who are part of our mission to change destinies." />

    <v-row>
        <v-col>
            <v-card class="pa-5" elevation="2" rounded="lg">
                <v-card-title class="bg-themeColor rounded-lg pa-3">
                    Life-Changing Impact
                </v-card-title>
                <v-card-text>
                    <v-row class="pa-5">
                        <v-col cols="3 --center flex-column ">
                            <v-avatar class="my-5 text-h6 font-weight-bold" size="80" color="black">
                                PR
                            </v-avatar>
                            <p class="text-body-1 font-weight-black">
                                Priya Rajesh
                            </p>
                            <p class="text-body-2 font-weight-light">
                                Coimbatore, Tamil Nadu
                            </p>
                        </v-col>
                        <v-col>
                            <p class=" text-grey-lighten-1 mt-5"
                                style="font-size: 3rem; transform: scaleX(-1); line-height: 75%;">
                                ❝
                            </p>
                            <p class="text-body-1 ">
                                "My daughter's life changed completely after Vidivukaalam Foundation provided her with
                                educational support. She's now pursuing engineering and dreams of becoming a software
                                developer. Their scholarship program gave us hope when we had none."
                            </p>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-slide-group v-model="slider" class="pa-4 mt-5">
        <FeedbackCard v-for="i in 4" :key="i" />
    </v-slide-group>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader.vue';
import FeedbackCard from './FeedbackCard.vue';

export default {
    name: "Feedback",
    components: {
        SectionHeader,
        FeedbackCard,
    },
    data() {
        return {
            slider: null,
        }
    }
};  
</script>