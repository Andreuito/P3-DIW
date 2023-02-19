<script>
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
    }
};
</script>
<template>
        <swiper :modules="modules" :slides-per-view="1" :autoplay="true" :loop="true" :scrollbar="true" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide>
            <div class="absolute text-center w-full">
                <p class="text-white sm:text-black text-3xl sm:text-7xl font-bold mt-20 mb-96">Saturn Ring 1</p>
            </div>
            <img class="" src="@/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
            <div class="absolute text-center w-full">
                <p class="text-white text-3xl sm:text-7xl font-bold mt-20 mb-auto">Saturn Ring 2</p>
            </div>
            <img class="" src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited2-min.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
            <div class="absolute text-center w-full">
                <p class="text-white text-3xl sm:text-7xl font-bold mt-20 mb-auto">Saturn Ring 3</p>
            </div>
            <img class="" src="src/assets/img/peter-broomfield-m3m-lnR90uM-unsplash-edited2.jpg" alt="imageCar" />
        </swiper-slide>
    </swiper>
</template>