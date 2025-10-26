<template>
    <v-row style="margin: 10vh 0;">
        <v-col style="position: relative;" class="d-flex flex-column justify-center align-center my-10">
            <div class="bg-themeGrey2 grey-strip"></div>
            <v-card class="pa-5 bg-themeBg1" rounded="lg" flat width="40vw">
                <v-card-title class="text-uppercase font-weight-bold" primary-title>
                    Our Vision
                </v-card-title>
                <v-card-text class="font-weight-medium mt-3">
                    To provide a candle light in the form of good quality education for the children who are struggling
                    to find their way out from their dark life. We Vidivukaalam taking a step to reduce the children
                    hurdles and to convert all those hurdles as stepping stones which is our long term goal.
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <HighlightHeader class="mb-10" header-text="Founder's Message" />

    <v-card class="bg-black">
        <v-card-text class="px-12 --center">
            <img class="rounded-lg" src="../../../assets/founder.png" alt="founder"
                style="width: 25vw; height: 40vh; object-fit: cover; margin: 2rem;">
            <div class="mx-10 pa-5 font-weight-medium">
                <li>
                    I turn back and look at the path I have travelled in my life and I could see it like a
                    forest pathway filled with stones and thorns. We battled against hunger without even a
                    guarantee for next time food, those were the hurdle period which is a below poverty line
                    life with lots of pains and sorrows.
                </li>
                <li>
                    Somehow, I could climb from the poverty well and reached the land by holding the education
                    rope with the aid of merciful hands extended by many good hearted people.
                </li>
                <li>
                    It is certainly not adequate even I keep saying billions of “Thanks” till my last breath to
                    those who gave the salvation for my poor life and it cannot be compensated by any means. As
                    a result of my continuous erosive inner thoughts on how to repay this unpayable debt, the
                    origin of Vidivukaalam is bloomed.
                </li>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import HighlightHeader from '@/components/common/HighlightHeader.vue';
export default {
    name: 'FoundersMessage',
    components: {
        HighlightHeader,
    }
}
</script>

<style scoped>
li {
    margin-bottom: 1.5rem;
}

.grey-strip {
    height: 7.5vh;
    width: 100vw;
    z-index: 0;
    position: absolute;
    /* margin: auto; */
}
</style>