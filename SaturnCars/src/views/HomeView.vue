<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            modules: [Navigation, Autoplay],
            onSwiper,
            onSlideChange,
        };
    },
};
</script>

<template>
    <!-- slider -->
    <swiper :modules="modules" :slides-per-view="1" :autoplay="true" :space-between="50" :navigation="true" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide> <img class="rounded-t-lg" src="img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" /></swiper-slide>
        <swiper-slide> <img class="rounded-t-lg" src="img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" /></swiper-slide>
        <swiper-slide> <img class="rounded-t-lg" src="img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" /></swiper-slide>
        
    </swiper>
    <!-- cards -->
    <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg" src="img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
            </a>
            <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg" src="img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
            </a>
            <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img class="rounded-t-lg" src="img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
            </a>
            <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
    </div>
</template>