<template>
    <v-footer>
        <v-row class="px-5 py-10 bg-black mt-10">
            <v-col class="pa-2">
                <img src="../../assets/vidivukalam_logo.png" alt="logo" style="height: 8vh; object-fit: cover;"></img>
                <p class="my-5 text-body-2 font-weight-light">
                    Transforming lives and changing destinies through community-driven initiatives in education,
                    healthcare, and sustainable development.
                </p>
                <p>
                    <FabFaIcon icon="fa-instagram" />
                    <FabFaIcon icon="fa-x-twitter" />
                    <FabFaIcon icon="fa-youtube" />
                    <FabFaIcon icon="fa-facebook" />
                </p>
            </v-col>
            <v-col class="d-flex flex-column align-center ">
                <div class="d-flex flex-column">
                    <div class="text-highlight font-weight-medium">Quick Links</div>
                    <div v-for="(link, key) in quickLinks" :key="key">
                        <div class="mt-3">{{ link.text }}</div>
                    </div>
                </div>
            </v-col>
            <v-col class="d-flex flex-column align-center ">
                <div class="d-flex flex-column">
                    <div class="text-highlight font-weight-medium">Get Involved</div>
                    <div v-for="(link, key) in getInvolved" :key="key">
                        <div class="mt-3">{{ link.text }}</div>
                    </div>
                </div>
            </v-col>
            <v-col class="d-flex flex-column align-center ">
                <div class="d-flex flex-column">
                    <div class="text-highlight font-weight-medium">Stay Connected</div>
                    <div v-for="(link, key) in stayConnected" :key="key">
                        <div class="mt-3">{{ link.text }}</div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
import FabFaIcon from '../common/FabFaIcon.vue';
import FooterLinks from './FooterLinks.vue';
export default {
    name: "AppFooter",
    components: {
        FabFaIcon,
        FooterLinks
    },
    data() {
        return {
            quickLinks: [
                { text: "Home", routeTo: "" },
                { text: "About Us", routeTo: "" },
                { text: "Gallery", routeTo: "" },
                { text: "Be A Part Of Us", routeTo: "" },
                { text: "Events & Reports", routeTo: "" },
                { text: "Contact Us", routeTo: "" },
            ],
            getInvolved: [
                { text: "Donate", routeTo: "" },
                { text: "Volunteer Enrollment", routeTo: "" },
            ],
            stayConnected: [
                { text: "+91 7293772222", routeTo: "" },
                { text: "contactus@vidivukaalam.org", routeTo: "" },
                {
                    text: `no. c-132, 5th cross street east,
thillainagar, trichy.`, routeTo: ""
                },
            ],
        }
    },
}
</script>

<style scoped>
.links {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
}
</style>