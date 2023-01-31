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
    <swiper :modules="modules" :slides-per-view="1" :autoplay="true" :loop="true" :scrollbar="true"
        @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide >
            <div class="absolute text-center w-full">
                <p class="text-black text-7xl font-bold mt-20 mb-96">Model Saturn Z</p>
            </div>
            <img class="" src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
            <div class="absolute text-center w-full">
                <p class="text-white text-7xl font-bold mt-20 mb-auto">Model Saturn X</p>
            </div>
            <img class="" src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited2.jpg" alt="" /> 
        </swiper-slide>
        <swiper-slide>
            <div class="absolute text-center w-full">
                <p class="text-white text-7xl font-bold mt-10 mb-auto">Model Saturn Y</p>
            </div>
            <img class="" src="src/assets/img/peter-broomfield-m3m-lnR90uM-unsplash-edited2.jpg" alt="imageCar" />
        </swiper-slide>
    </swiper>
    <!-- title -->
    <div class="flex justify-center mt-10 ">
        <h2 class="text-5xl font-bold mt-0">
            Most popular Saturn cars
        </h2>
    </div>
    <!-- cards -->
    <div class="grid sm:grid-cols-2 gap-2 m-28 grid-cols-1">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn Star 5</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-r-lg"
                src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn Star 5</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-r-lg"
                src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn Star 6</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn Star 3</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-r-lg"
                src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn Star 6</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">Saturn Star 1</h5>
                <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                </p>
                <button type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-r-lg"
                src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
        </div>
    </div>
    <!-- title for bottom slider -->
    <div class="flex justify-center mt-10 mb-10">
        <h1 class="text-5xl font-bold text-gray-900">Our Cars</h1>
    </div>
    <!--Multiple slider-->
    <div class="hidden sm:flex">
        <swiper :modules="modules" :slides-per-view="4" :autoplay="true" :loop="true" :scrollbar="true"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide> <img src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash-edited.jpg" alt="" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/hakon-sataoen-qyfco1nfMtg-unsplash-edited.jpg" alt="" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/alex-suprun-A53o1drQS2k-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/chris-nguyen-aTX_bRaOZnA-unsplash-edited2.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/dima-panyukov-DwxlhTvC16Q-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/erik-mclean-ZRns2R5azu0-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/josh-berquist-_4sWbzH5fp8-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/kenny-eliason-FcyipqujfGg-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/marek-pospisil-oUBjd22gF6w-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/peter-broomfield-m3m-lnR90uM-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
        </swiper>
    </div>
    <!--swiper mobile-->
    <div class="flex sm:hidden">
        <swiper :modules="modules" :slides-per-view="1" :autoplay="true" :loop="true" :scrollbar="true"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide> <img src="src/assets/img/campbell-3ZUsNJhi_Ik-unsplash-edited.jpg" alt="" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/hakon-sataoen-qyfco1nfMtg-unsplash-edited.jpg" alt="" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/alex-suprun-A53o1drQS2k-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/chris-nguyen-aTX_bRaOZnA-unsplash-edited2.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/dima-panyukov-DwxlhTvC16Q-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/erik-mclean-ZRns2R5azu0-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/josh-berquist-_4sWbzH5fp8-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/kenny-eliason-FcyipqujfGg-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/marek-pospisil-oUBjd22gF6w-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
            <swiper-slide> <img src="src/assets/img/peter-broomfield-m3m-lnR90uM-unsplash-edited.jpg" alt="imageCar" /></swiper-slide>
        </swiper>
    </div>
  
</template>