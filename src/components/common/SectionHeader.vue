<template>
    <v-row>
        <v-col class="text-center my-10">
            <h2 class="text-themeHeader text-uppercase --header">Our {{ secTitle }}</h2>
            <p class="text-grey-darken-1 mt-3 text-h6">
                {{ secDesc }}
            </p>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "SectionHeader",
    props: {
        secTitle: String,
        secDesc: String,
    },
};
</script>