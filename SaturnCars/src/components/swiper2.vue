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
    <swiper :modules="modules" :slides-per-view="4" :autoplay="true" :loop="true" :scrollbar="true"
        @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide> <img src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash-edited.jpg" alt="" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/hakon-sataoen-qyfco1nfMtg-unsplash-edited.jpg"
                alt="" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/alex-suprun-A53o1drQS2k-unsplash-edited.jpg"
                alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/chris-nguyen-aTX_bRaOZnA-unsplash-edited2.jpg"
                alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/dima-panyukov-DwxlhTvC16Q-unsplash-edited.jpg"
                alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/erik-mclean-ZRns2R5azu0-unsplash-edited.jpg"
                alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/josh-berquist-_4sWbzH5fp8-unsplash-edited.jpg"
                alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/kenny-eliason-FcyipqujfGg-unsplash-edited.jpg"
                alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/marek-pospisil-oUBjd22gF6w-unsplash-edited.jpg"
                alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="src/assets/img/peter-broomfield-m3m-lnR90uM-unsplash-edited.jpg"
                alt="imageCar" /></swiper-slide>
    </swiper>
</template>