<template>
    <section class="about bgc-black color-white">
        <div class="container mt-5 mb-3 pb-3">
            <div class="row">
                <div class="col-12"><h1 class="text-uppercase text-center m-5">who am i </h1></div>
                <div class="col-12 col-md-6"><img src="../../assets/img-1.jpg" alt="" width="100%"></div>
                <div class="col-12 col-md-6">
                    <p class="pt-5 pt-sm-0"> My name is <b>Louis</b> </p>
                    <p> Prudent on detail, responsible on job,
                        never give up, well teamwork, 
                        and always love to learn to become
                        a better person! </p>
                </div>
            </div>
            
        </div>

    </section>
</template>

<script>
export default {
    name: 'AboutMe',

}
</script>

<style scoped>
.bgc-black {
    background-color: #000;
}

.color-white {
    color: #fff;
}

h1 {
    font-size: 4rem;
}

p {
    font-size: 2rem;
}

@media (max-width: 768px) {
    h1 {
    font-size: 3rem;
}

p {
    font-size: inherit;
    text-align: center;
}
}
</style>