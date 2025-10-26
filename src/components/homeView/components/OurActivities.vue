<template>
    <SectionHeader sec-title="Our Activities & Programs" sec-desc="Comprehensive community development programs designed to create lasting impact across education,
                healthcare,
                environment, and social empowerment." />
    <FeaturedProgram />
    <v-slide-group v-model="slider" class="pa-4">
        <v-row>
            <FeaturedProgramCard v-for="i in 4" :key="i" />
        </v-row>
    </v-slide-group>
</template>

<script>
import FeaturedProgram from './FeaturedProgram.vue';
import FeaturedProgramCard from './FeaturedProgramCard.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';

export default {
    name: "OurActivities",
    components: {
        FeaturedProgram,
        FeaturedProgramCard,
        SectionHeader
    },
    data() {
        return {
            slider: null,
        };
    },
};
</script>