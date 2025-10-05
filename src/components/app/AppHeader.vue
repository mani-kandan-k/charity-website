<template>
    <v-app-bar class="pa-3" elevation="1">
        <div style="height: inherit;">
            <img style="object-fit: cover; height: inherit;" src="../../assets/vidivukalam_logo.png" alt="logo"></img>
        </div>
        <v-spacer></v-spacer>
        <v-item-group selected-class="text-themeColor font-weight-bold" mandatory="force">
            <v-item v-for="(item, key) in navItems" :key="key" v-slot="{ selectedClass, toggle }">
                <v-btn size="small" text :class="['mx-1', selectedClass]" @click="toggle">
                    {{ item.title }}
                </v-btn>
            </v-item>
        </v-item-group>
        <v-spacer></v-spacer>
        <v-btn variant="elevated" size="large" class=" text-body-2 mr-2 px-8 text-uppercase"
            color="themeColor">Donate</v-btn>
    </v-app-bar>
</template>

<script>

export default {
    name: "AppHeader",
    data() {
        return {
            navItems: [
                { title: "home", route: "/" },
                { title: "about us", route: "/" },
                { title: "our journey", route: "/" },
                { title: "be a part of us", route: "/" },
                { title: "events & reports", route: "/" },
                { title: "contact us", route: "/" },
            ]
        };
    },
};

</script>
