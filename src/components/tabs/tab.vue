<template>
    <div data-aos="fade-out" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000">
        <b-card>
            <b-tabs content-class="mt-3" fill>
                <b-tab v-for="data in jsonData" 
                       :key="data.index" 
                       :title="data.title">
                    <p v-html="data.content"></p>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'MyTab',
    props: {

    },
    data() {
        return {
            jsonData: [],
            show: true
        }
    },
    methods: {
        getData() {
            let api = '/data/data.json'
            axios.get(api)
                .then((response) => {
                    this.jsonData = response.data
                    // console.log(response.data)
                })
        },
    },
    mounted() {
        this.getData();
    },
}
</script>


<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.nav-tabs .nav-link {
    color: #666;
}

.nav-tabs .nav-link.active {
    color: #fff;
    background: #0f6490;
}
</style>