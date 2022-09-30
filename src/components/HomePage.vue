<template>
    <b-container class="home-page m-0 p-0" fluid>
        <div class="position-relative">
            <div class="background-cover"></div>
            <b-img v-if="screenWidth > 576" src="https://via.placeholder.com/1920x650" fluid alt="Banner img"></b-img>
            <b-img v-else src="https://via.placeholder.com/600x600" fluid alt="Banner img"></b-img>
            <div class="banner-text w-100">
                <h1 class="color-white text-center">Hello Developer!</h1>
                <p class="color-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit </p>
            </div>
        </div>
    </b-container>


    <b-container class="bv-example-row mt-5 text-center">
        <b-row>
            <b-card-group deck>
                <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article" class="mb-2 p-4">
                    <b-card-text class="mt-3 mb-3 card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique accusantium iusto, unde a
                        quos consequatur fugiat! Sapiente nulla totam sit earum numquam explicabo consequatur,
                        perspiciatis eveniet, quod placeat suscipit?
                    </b-card-text>

                    <template #footer>
                        <b-button href="#" class="card-btn" pill>READ MORE</b-button>
                    </template>
                </b-card>

                <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article" class="mb-2 p-4">
                    <b-card-text class="mt-3 mb-3 card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique accusantium iusto, unde a
                        quos consequatur fugiat! Sapiente nulla totam sit earum
                    </b-card-text>

                    <template #footer>
                        <b-button href="#" class="card-btn" pill>READ MORE</b-button>
                    </template>
                </b-card>

                <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article" class="mb-2 p-4">
                    <b-card-text class="mt-3 mb-3 card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique accusantium iusto, unde a
                        quos consequatur fugiat! Sapiente nulla totam sit earum numquam explicabo consequatur,
                        perspiciatis eveniet
                    </b-card-text>

                    <template #footer>
                        <b-button href="#" class="card-btn" pill>READ MORE</b-button>
                    </template>
                </b-card>

            </b-card-group>

        </b-row>
    </b-container>

    <b-container>
        <b-card >
            <b-tabs content-class="mt-3" fill>
                <b-tab title="First" active><p>I'm the first tab</p></b-tab>
                <b-tab title="Second"><p>I'm the second tab</p></b-tab>
                <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
                <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
            </b-tabs>
        </b-card>

        <b-accordion >
            <b-accordion-item title="Accordion Item #1" visible>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nobis cupiditate nesciunt possimus rem velit ratione placeat eligendi autem suscipit, cum officiis. Expedita suscipit placeat, facere assumenda ipsum sequi nemo!
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nobis cupiditate nesciunt possimus rem velit ratione placeat eligendi autem suscipit, cum officiis. Expedita suscipit placeat, facere assumenda ipsum sequi nemo!
            </b-accordion-item>
            <b-accordion-item title="Accordion Item #3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nobis cupiditate nesciunt possimus rem velit ratione placeat eligendi autem suscipit, cum officiis. Expedita suscipit placeat, facere assumenda ipsum sequi nemo!
            </b-accordion-item>
        </b-accordion>



    </b-container>

</template>

<script>
export default {
    name: 'HomePage',
    props: {

    },
    data() {
        return {
            screenWidth: null,
            is_smallscreen: false,
        }
    },
    
    methods: {
        // 判断移动端还是pc端 determining Mobile or PC 
        // isMobile method
        isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
        getData() {
            let api = './data/data.json'
            this.axios.get(api).then((response) => {
                console.log(response.data)
            })
        }

    },
    mounted() {
        if (this.isMobile()) {
            console.log('Mobile');
        } else {
            console.log('PC');
        }

        
        const that = this;
        // get window width
        window.onload = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        }
        // get window width when resize
        window.addEventListener("resize", function () {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        });
    },
    watch: {
        screenWidth: {
            handler: function (val) {
                if (val < 900) {
                    console.log(val + "小於900")
                    console.log(is_smallscreen)
                    
                } else {
                    console.log(val + "大於900")
                    console.log(is_smallscreen)
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
    background-color: rgba(0, 0, 0, 0.5);
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
    font-size: 5.75rem;
}

.home-page .banner-text p {
    font-size: 3rem;
    letter-spacing: 1px;
}

.card {
    box-shadow: 0 0 10px 0px #ccc;
}

.card-deck {
    gap: 2.5rem;
}

.card-body {
    padding: 0;
}

.card-btn {
    background-color: transparent;
    border: 3px solid #000;
    color: #000;
    font-weight: 700;
}


/* mobile style */
@media (max-width: 576px) {
    .home-page .banner-text h1 {
        font-size: 4rem;
    }

    .home-page .banner-text p {
        font-size: 1.8rem;
        letter-spacing: 1px;
    }
}
</style>
