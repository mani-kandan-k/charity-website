<template>
    <v-row class="px-2 mt-10 mb-5">
        <v-col class="--center">
            <h2 class="--header text-themeHeader text-uppercase">
                our impact speaks through the voices of those we serve
            </h2>
        </v-col>
    </v-row>
    <v-row class="px-2 --center icon-container py-8">
        <v-col v-for="(data, key) in iconData" :key="key" class="d-flex flex-column --center " cols="2">
            <div :class="`icon-circle --center bg-${data.color} mb-5`">
                <v-icon class="text-white " :size="iconSize">
                    {{ data.icon }}
                </v-icon>
            </div>
            <h4 :class="`text-${data.color} ml-2`">{{ data.iconText }}</h4>
            <span :class="greyText">{{ data.title }}</span>
        </v-col>
    </v-row>
    <v-row class="px-2" style="margin-top: 4.5rem; margin-bottom: 4.5rem;">
        <HighlightHeader header-text="About Vidivukaalam Foundation" />
    </v-row>
    <v-row>
        <v-col cols="6">
            <v-row>
                <v-col cols="6">
                    <img class="about-us-img" src="../../../assets/aboutUs_img1.png" alt="aboutUs_img1">
                </v-col>
                <v-col cols="6">
                    <v-row>
                        <v-col>
                            <img class="about-us-img" src="../../../assets/aboutUs_img2.png" alt="aboutUs_img2">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <img class="about-us-img" src="../../../assets/aboutUs_img3.png" alt="aboutUs_img3">
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="6"></v-col>
    </v-row>
</template>

<script>
import HighlightHeader from '@/components/common/HighlightHeader.vue';
export default {
    name: "AboutUs",
    components: {
        HighlightHeader
    },
    data() {
        return {
            iconSize: 32,
            greyText: "font-weight-medium text-greyText",
            iconData: [
                { icon: "mdi-star", title: "Lives Impacted", iconText: "2K+", color: "themeColor", },
                { icon: "mdi-trophy", title: "Active Volunteers", iconText: "900+", color: "themeGreen", },
                { icon: "mdi-medal", title: "Satisfaction Rate", iconText: "96%", color: "themeBg1", },
                { icon: "mdi-seal", title: "Communities Served", iconText: "100+", color: "iconGold", },
            ]
        }
    }
}
</script>

<style scoped>
.icon-circle {
    width: var(--icon-bg-size);
    height: var(--icon-bg-size);
    border-radius: 50%;
}

.icon-container {
    background-image: linear-gradient(to right, var(--icon-bg1), var(--icon-bg2));
}

.about-us-img {
    object-fit: contain;
    height: 15vh;
    width: 10vw;
}
</style>