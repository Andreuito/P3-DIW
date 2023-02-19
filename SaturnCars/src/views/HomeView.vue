<script>
import swiper1 from '../components/swiper1.vue';
import swiper2 from '../components/swiper2.vue';
import swiper_mob from '../components/swiper_mob.vue';
import cards1 from '../components/cards1.vue';
import cards2 from '../components/cards2.vue';

export default {
    components: {
        swiper1,
        swiper2,
        swiper_mob,
        cards1,
        cards2,
    },
};
</script>

<template>
    <!-- slider -->
    <swiper1/>
    <!-- title -->
    <div class="flex text-center sm:justify-center mt-10 ">
        <h2 class="text-6xl font-bold mt-0 text-gray-800">
            Most popular Saturn cars
        </h2>
    </div>
    <!-- cards -->
    <cards1/>

    <!--border-->
    <div class="border-b border-gray-400 border-solid border-2 mx-20 sm:mx-56"></div>

    <!-- title for bottom slider -->
    <div class="flex justify-center mt-10 mb-10">
        <h1 class="text-7xl font-bold text-gray-800">Our Cars</h1>
    </div>

    <!--Multiple slider-->
    <div class="hidden sm:flex sm:px-40">
        <swiper2/>
    </div>

    <!--swiper mobile-->
    <div class="flex p-5 sm:hidden">
        <swiper_mob/>
    </div>

    <!--border-->
    <div class="border-b border-gray-400 border-solid border-2 mx-20 mt-20 sm:mx-56 sm:mt-20"></div>

    <!--title of us-->
    <div class="flex flex-col sm:justify-center sm:mx-60 sm:my-10 sm:items-center text-center">
        <h1 class="flex justify-center text-7xl p-10 font-bold text-gray-800">About us</h1>
        <h3 class="flex justify-center text-5xl p-10 font-bold text-gray-800">Comitted</h3>
        <div class="p-6 flex flex-col justify-start">
            <p class="text-sm lg:text-base mt-2">At Saturn Cars, we always look to the future with a vision of progress.
                This way of seeing things is what
                It makes you have a purpose and a commitment to society and the environment. And from there “Committed”
                was
                born:
                a series of initiatives of a social and environmental nature, which puts people at the center of
                everything
                our efforts.
            </p>
        </div>
        <div class="w-full h-auto mt-4 lg:mt-8 p-6">
            <img src="@/assets/img/pexels-trace-hudson-2770933-edited-min.jpg"
                class="w-full h-auto mt-10 rounded-lg object-contain">
        </div>
    </div>

    <!--border-->
    <div class="border-b border-gray-400 border-solid border-2 mx-20 sm:mx-56 sm:mt-20"></div>


    <div class="flex justify-center mt-10 mb-24">
        <h1 class="text-6xl sm:text-7xl p-10 font-bold text-gray-800">Experience</h1>
    </div>

    <!--cards-->
    <cards2/>
</template>
