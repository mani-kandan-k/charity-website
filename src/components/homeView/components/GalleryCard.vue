<template>

    <v-col cols="2" class="mt-5">
        <v-card class="pa-2 my-2" rounded="lg">
            <img src="../../../assets/featured_program_card.png" alt="featured_program_card"
                style="width: 100%; height: 50%; object-fit: cover;">
            <v-card-text>

                <p class="mt-3 text-h6 text-uppercase font-weight-bold">
                    Community Health Camp 2024
                </p>
                <p class="mt-2 text-body-2 font-weight-light">
                    Free medical checkups and health awareness programs
                </p>
                <div class="mt-3">
                    <p>Date :</p>
                    <p>Place :</p>
                </div>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "GalleryCard",
};
</script>