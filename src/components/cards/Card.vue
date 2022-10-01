<template>
    <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="700" data-aos-duration="1000">
        <b-container class="bv-example-row mt-5 mb-5 text-center">
            <b-row>
                <b-card-group deck>
                    <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article"
                        class="mb-2 p-3 p-sm-2 p-lg-4">
                        <b-card-text class="mt-3 mb-3 card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique accusantium iusto, unde a
                            quos consequatur fugiat! Sapiente nulla totam sit earum numquam explicabo consequatur,
                            perspiciatis eveniet, quod placeat suscipit?
                        </b-card-text>
    
                        <template #footer>
                            <b-button href="#" class="card-btn" pill>READ MORE</b-button>
                        </template>
                    </b-card>
    
                    <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article"
                        class="mb-2 p-3 p-sm-2 p-lg-4">
                        <b-card-text class="mt-3 mb-3 card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At similique accusantium iusto, unde a
                            quos consequatur fugiat! Sapiente nulla totam sit earum
                        </b-card-text>
    
                        <template #footer>
                            <b-button href="#" class="card-btn" pill>READ MORE</b-button>
                        </template>
                    </b-card>
    
                    <b-card img-src="https://via.placeholder.com/400x300" img-alt="Image" tag="article"
                        class="mb-2 p-3 p-sm-2 p-lg-4">
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
    </div>
</template>


<script>
export default {
    name: 'MyCard',
    props: {
    },
}
</script>
    
    
<style scoped>
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
</style>
  