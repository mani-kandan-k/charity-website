<template>
    <v-avatar class="mr-5" size="small" color="white">
        <v-icon size="small" class="text-black" :icon="`fa:fab ${icon}`"></v-icon>
    </v-avatar>
</template>

<script>
export default {
    name: "FabFaIcon",
    props: {
        icon: String,
    },
}
</script>