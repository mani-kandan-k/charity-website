<template>
    <v-col cols="2">
        <v-card class="pa-2 my-2" rounded="lg">
            <img src="../../../assets/featured_program_card.png" alt="featured_program_card"
                style="width: 90%; height: 60%; object-fit: cover;">
            <v-card-text>
                <p>
                    <v-avatar size="35" color="grey">

                    </v-avatar>
                    <span class="font-weight-medium ml-5">Healthcare Initiatives</span>
                </p>
                <p class="mt-5 text-body-2 font-weight-light">
                    Free medical camps, health screenings, and awareness programs in rural and urban underserved areas.
                </p>
                <p class="mt-5 text-themeColor font-weight-medium">
                    Impact: 25,000+ people served
                </p>
            </v-card-text>
            <v-card-actions>
                <v-btn size="small" rounded="lg" height="35" variant="elevated"
                    class=" px-7 text-themeColor text-capitalize">Learn
                    More</v-btn>
                <v-spacer></v-spacer>
                <v-btn size="small" rounded="lg" height="35" variant="elevated" class=" px-7 text-capitalize "
                    color="themeColor">Support</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "FeaturedProgramCard",
};
</script>