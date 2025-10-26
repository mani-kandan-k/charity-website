<template>
    <v-row>
        <v-col>
            <v-card class="pa-3">
                <v-card-title class=" rounded-lg bg-themeGreenBg pa-3">
                    <h3 class="text-uppercase --header ">Featured program</h3>
                    <span class="text-body-1">Our flagship initiative making the biggest impact</span>
                </v-card-title>
                <v-card-text class="mt-5 px-0">
                    <v-row>
                        <v-col cols="4">
                            <img src="../../../assets/featured_program.png" alt="featured_program"
                                style="width: 100%; height: inherit; object-fit: cover; border-radius: 8px;">
                        </v-col>
                        <v-col class="d-flex flex-column align-end justify-space-between px-5 pb-5">
                            <p class="text-themeGreen text-h5 font-weight-bold">
                                Education Support Program
                            </p>
                            <p class="text-greyText text-h6 font-weight-medium text-right">
                                Providing quality education access, scholarships, and learning resources to
                                underprivileged children and adults.
                            </p>
                            <v-card elevation="0" class="px-10 py-5 d-flex justify-space-between "
                                style="background: rgba(0, 166, 62, 0.2);">
                                <span class="text-themeGreen text-h6 font-weight-bold">
                                    Impact Achievement
                                </span>
                                <v-spacer class="mx-10"></v-spacer>
                                <span class=" text-themeColor text-h6 font-weight-bold">
                                    15,000+ students benefited
                                </span>
                            </v-card>
                            <v-btn color="themeAccent" class="text-capitalize px-7" size="x-large" rounded="lg">get
                                involved</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "FeaturedProgram",
};
</script>