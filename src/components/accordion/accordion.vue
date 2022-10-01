<template>
    <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="1000">
        <b-card>
            <h1> Accordion </h1>
            <div id="my-accordion" class="accordion" role="tablist">
                <b-card no-body class="mb-1" v-for="(data, index) in jsonData" :key="index">
                    <b-card-header header-tag="header" class="p-1 d-grid gap-2" role="tab">
                        <b-button v-b-toggle="'accordion-' + index" 
                                  :id="'accordion-btn-' + index" 
                                  variant="info">
                            {{data.title}}
                        </b-button>
                    </b-card-header>
                    <b-collapse :id="'accordion-' + index" 
                                accordion="my-accordion" 
                                role="tabpanel">
                        <b-card-body>
                            <b-card-text class="p-md-3">
                                <p v-html="data.content"></p>
                            </b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </div>
        </b-card>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'MyAccordion',
    props: {},
    data() {
        return {
            jsonData: [],
        }
    },
    methods: {
        getData() {
            let api = '/data/data.json'
            axios.get(api)
                .then((response) => {
                    this.jsonData = response.data
                    console.log(response.data)
                })
        },
    },
    mounted() {
        this.getData();
    },
}
</script>

<style>
.btn .btn-info {
    background-color: #f00 !important;
}

.btn .btn-info .collapsed {
    background-color: #ccc !important;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>