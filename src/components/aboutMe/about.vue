<template>
    <div class="about bgc-black color-white">
        <div class="container mt-5 pb-3">
            <div class="row" data-aos="fade-in" data-aos-offset="100" data-aos-delay="100" data-aos-duration="1000">
                <div class="col-12"><h1 class="text-uppercase text-center m-5">who am i </h1></div>
                <!-- <div class="col-12 col-md-6" data-aos="fade-right" data-aos-offset="100" data-aos-delay="100" data-aos-duration="1000"> -->
                <div class="col-12 col-md-6">
                    <img src="../../assets/img-1.jpg" alt="" width="100%">
                </div>
                <!-- <div class="col-12 col-md-6" data-aos="fade-left" data-aos-offset="100" data-aos-delay="100" data-aos-duration="1000"> -->
                <div class="col-12 col-md-6">
                    <p class="pt-5 pt-sm-0"> My name is <b>Louis</b> </p>
                    <p> Prudent on detail, responsible on job,
                        never give up, well teamwork, 
                        and always love to learn to become
                        a better person! </p>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
    
export default {
    name: 'AboutMe',

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

.bgc-black {
    background-color: #000;
}

.color-white {
    color: #fff;
}

h1 {
    font-family: 'Fredoka One', cursive;
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