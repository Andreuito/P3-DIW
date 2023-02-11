<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

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
            modules: [Navigation, Pagination, Autoplay, Scrollbar],
            onSwiper,
            onSlideChange,
        };
    },
}; 
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-10 mt-10 ml-10">
        <img class="rounded-lg" src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
        <div class="flex mb-24">
            <h1 class="flex text-7xl p-10 font-bold text-gray-800">
                RING 1.
            </h1>
            <p>
                
            </p>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-10 mr-10">
        <div class="flex mb-24">
            <h1 class="flex text-7xl p-10 font-bold text-gray-800">
                RING 2.
            </h1>
            <p>
                
            </p>
        </div>
        <img class="rounded-lg" src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-10">
        <img class="rounded-lg" src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
        <div class="flex mb-24">
            <h1 class="flex text-7xl p-10 font-bold text-gray-800">
                RING 3.
            </h1>
            <p>
                
            </p>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-10">
        <div class="flex mb-24">
            <h1 class="flex text-7xl p-10 font-bold text-gray-800">
                RING 4.
            </h1>
            <p>
                
            </p>
        </div>
        <img class="rounded-lg" src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-10">
        <img class="rounded-lg" src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
        <div class="flex mb-24">
            <h1 class="flex text-7xl p-10 font-bold text-gray-800">
                RING 5.
            </h1>
            <p>
                
            </p>
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-10">
        <div class="flex mb-24">
            <h1 class="flex text-7xl p-10 font-bold text-gray-800">
                RING 6.
            </h1>
            <p>
                
            </p>
        </div>
        <img class="rounded-lg" src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
    </div>

    <div class="flex justify-center mt-64 mb-24">
        <h1 class="flex justify-center text-7xl p-10 font-bold text-gray-800">Coming soon Ring 7.</h1>
    </div>
</template>