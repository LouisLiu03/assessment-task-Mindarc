<template>
    <!-- loading -->
    <div class="vld-parent">
        <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="isFullPage"/>
    </div>

    <MyNavbar />
    
    <!-- banner -->
    <b-container class="home-page m-0 p-0" fluid>
        <!-- <div class="position-relative" data-aos="fade-in" data-aos-offset="200" data-aos-delay="800" data-aos-duration="1000"> -->
        <div class="position-relative">
            <div class="background-cover"></div>
            <b-img v-if="!is_smallscreen()" src="https://via.placeholder.com/1920x650" fluid alt="Banner img"></b-img>
            <b-img v-else src="https://via.placeholder.com/600x600" fluid alt="Banner img"></b-img>
            <div class="banner-text w-100">
                <h1 class="color-white text-center ">Hello Developer!</h1>
                <p class="color-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit </p>
            </div>
        </div>
    </b-container>

    <!-- cards -->
    <MyCard />

    
    <!-- accordion / tabs -->
    <b-container class="mt-5">
        
        <h1 class="mb-3"> Exercise 2</h1>
        <!-- Tabs -->
        <div class="desktop"  v-if="!is_smallscreen()">
            <MyTab />   
        </div>

        <!-- Accordion -->
        <div class="mobile" v-else>
            <MyAccordion />
        </div>
    </b-container>

    <AboutMe />
    <MyFooter />

</template>

<script>
import MyNavbar from './navbars/navbar.vue'
import MyCard from './cards/card.vue'
import MyTab from './tabs/tab.vue'
import MyAccordion from './accordion/accordion.vue'
import AboutMe from './aboutMe/about.vue'
import MyFooter from './footer.vue'

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';


// init AOS
AOS.init();

export default {
    name: 'HomePage',
    props: {

    },
    components:{
        MyCard,
        MyTab,
        MyAccordion,
        MyFooter,
        Loading,
        AboutMe,
        MyNavbar
    },
    data() {
        return {
            screenWidth: null,
            smallscreen: null,
            jsonData: [],
            isLoading: false,
            isFullPage: true
        }
    },
    computed: {},
    setup() {},
    methods: {
        // determining Mobile or PC 
        // isMobile method
        isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
        is_smallscreen() {
            return this.smallscreen;
        },
        firstAccordionClick() {
            let firstAccordion = document.getElementById('accordion-btn-0');
            firstAccordion.click();
        },
        doAjax() {
            this.isLoading = true;
            // simulate AJAX
            setTimeout(() => {
                this.isLoading = false
            }, 800)
        },
        onCancel() {
            // console.log('User cancelled the loader.')
        },
        

    },
    mounted() {
        // get window width
        const that = this;
        window.onload = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
                this.doAjax()
                this.is_smallscreen();
                this.firstAccordionClick();
            })();
        }

        // get window width when resize
        window.addEventListener("resize", function () {
            
            return (() => {
                
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
                if(this.is_smallscreen){
                    console.log('gg');
                }
                // this.firstAccordionClick();
            })();
        });
    },
    watch: {
        screenWidth: {
            handler: function (val) {
                if (val < 768) {
                    // console.log(val + "小於900")
                    this.smallscreen = true;
                } else {
                    // console.log(val + "大於900")
                    this.smallscreen = false;
                }
            },
            immediate: true
        }
    },
}
</script>

<style scoped>
.background-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
}

.color-white {
    color: #fff;
}

.home-page .banner-text {
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.home-page .banner-text h1 {
    font-size: 5rem;
    letter-spacing: 5px;
    font-weight: 700;
}

.home-page .banner-text p {
    font-size: 3rem;
    letter-spacing: 1px;
    font-weight: 300;
}

/* mobile style */
@media (max-width: 576px) {
    .home-page .banner-text {
        position: absolute;
        top: 55%;
    }
    .home-page .banner-text h1 {
        font-size: 3rem;
    }

    .home-page .banner-text p {
        font-size: 1.8rem;
        letter-spacing: 1px;
        /* padding: 0.5rem; */
    }
}

</style>
