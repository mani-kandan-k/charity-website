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
    <HighlightHeader class="mt-10" header-text="About Vidivukaalam Foundation" />
    <v-row>
        <v-col cols="6" class="--center">
            <v-row class="">
                <v-col class="d-flex align-end justify-center flex-column">
                    <img class="ratio-img1 rounded-img1" src="../../../assets/aboutUs_img1.png"
                        alt="aboutUs_img1"></img>
                </v-col>
                <v-col class="d-flex align-start justify-center flex-column">
                    <img class="ratio-img2 rounded-img2 mb-2" src="../../../assets/aboutUs_img2.png" alt="aboutUs_img2">
                    <img class="ratio-img3 rounded-img3 mt-2" src="../../../assets/aboutUs_img3.png" alt="aboutUs_img3">
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="6 px-5">
            <p>
                Vidivukaalam Foundation is a non-profit organization dedicated to transforming lives through
                comprehensive community development programs. Since our inception, we have been working tirelessly to
                address critical social issues and empower marginalized communities across India.
            </p>
            <h4 class="text-themeColor mt-6">Our Purpose</h4>
            <p>
                To create sustainable change by focusing on education, healthcare, women empowerment, and environmental
                conservation.
            </p>
            <h4 class="text-themeColor mt-6">Community-Centered Approach</h4>
            <p>
                We believe in working with communities, not for them. Our programs are designed based on local needs and
                implemented through community participation.
            </p>
            <h4 class="text-themeColor mt-6">Sustainable Impact</h4>
            <p>
                Our interventions focus on creating long-term, sustainable solutions that continue to benefit
                communities even after our direct involvement ends.
            </p>
        </v-col>
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

.ratio-img1 {
    height: calc(var(--img-size)*var(--img-size-addBy));
    width: calc(calc(var(--img-size) * 16/21)*var(--img-size-addBy));
    object-fit: cover;
}

.ratio-img2,
.ratio-img3 {
    height: var(--img-size);
    width: calc(var(--img-size) * 8/9);
    object-fit: cover;
}

.rounded-img1,
.rounded-img2 {
    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;
}

.rounded-img3 {
    border-top-right-radius: 20%;
    border-bottom-left-radius: 20%;
}
</style>