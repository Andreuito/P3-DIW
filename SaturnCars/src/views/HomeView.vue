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
    <!-- slider -->
    <swiper :modules="modules" :slides-per-view="1" :autoplay="true" :navigation="true" :loop="true" :scrollbar="true"
        @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
            <img class="" src="img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
        </swiper-slide>
        <swiper-slide> <img class="" src="img/hakon-sataoen-qyfco1nfMtg-unsplash-edited2.jpg" alt="" /></swiper-slide>
        <swiper-slide> <img class="" src="img/olav-tvedt-6lSBynPRaAQ-unsplash.jpg" alt="imageCar" /></swiper-slide>
    </swiper>
    <!-- cards -->
    <!--    <div class="grid-cols-3 gap-2 m-28 space-y-10">
        <div class="flex flex-col-reverse md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn StarOne</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
        <div class="flex flex-col-reverse md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn StarOne</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn StarOne</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn StarOne</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
    </div>  -->
    <div class="grid grid-cols-3 gap-2">
        <div class="col-span-2 flex flex-col justify-between">
            <h2 class="text-xl font-semibold">
                How to Fetch API in Vue JS
            </h2>
            <p class="text-gray-500 text-base">
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
            </p>
        </div>
        <div class="col-span-1">
            <img class="" src="img/logoRemaSteredB.PNG">
        </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
        <div class="col-span-1">
                <img class="" src="img/logoRemaSteredB.PNG">
            </div>
        <div class="col-span-2 flex flex-col justify-between">
            <h2 class="text-xl font-semibold">
                How to Fetch API in Vue JS
            </h2>
            <p class="text-gray-500 text-base">
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
            </p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
        <div class="col-span-2 flex flex-col justify-between">
            <h2 class="text-xl font-semibold">
                How to Fetch API in Vue JS
            </h2>
            <p class="text-gray-500 text-base">
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
            </p>
        </div>
        <div class="col-span-1">
            <img class="" src="img/logoRemaSteredB.PNG">
        </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
        <div class="col-span-1">
                <img class="" src="img/logoRemaSteredB.PNG">
            </div>
        <div class="col-span-2 flex flex-col justify-between">
            <h2 class="text-xl font-semibold">
                How to Fetch API in Vue JS
            </h2>
            <p class="text-gray-500 text-base">
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
            </p>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
        <div class="col-span-2 flex flex-col justify-between">
            <h2 class="text-xl font-semibold">
                How to Fetch API in Vue JS
            </h2>
            <p class="text-gray-500 text-base">
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
            </p>
        </div>
        <div class="col-span-1">
            <img class="" src="img/logoRemaSteredB.PNG">
        </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
        <div class="col-span-1">
                <img class="" src="img/logoRemaSteredB.PNG">
            </div>
        <div class="col-span-2 flex flex-col justify-between">
            <h2 class="text-xl font-semibold">
                How to Fetch API in Vue JS
            </h2>
            <p class="text-gray-500 text-base">
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
            </p>
        </div>
    </div>
    <!--Multiple slider-->
    <swiper :modules="modules" :slides-per-view="4" :autoplay="true" :navigation="true" :loop="true" :scrollbar="true"
        @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide> <img src="img/campbell-3ZUsNJhi_Ik-unsplash-edited.jpg" alt="" /></swiper-slide>
        <swiper-slide> <img src="img/hakon-sataoen-qyfco1nfMtg-unsplash-edited.jpg" alt="" /></swiper-slide>
        <swiper-slide> <img src="img/alex-suprun-A53o1drQS2k-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="img/chris-nguyen-aTX_bRaOZnA-unsplash-edited2.jpg" alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="img/dima-panyukov-DwxlhTvC16Q-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="img/erik-mclean-ZRns2R5azu0-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="img/josh-berquist-_4sWbzH5fp8-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="img/kenny-eliason-FcyipqujfGg-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="img/marek-pospisil-oUBjd22gF6w-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
        <swiper-slide> <img src="img/peter-broomfield-m3m-lnR90uM-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
    </swiper>
</template>