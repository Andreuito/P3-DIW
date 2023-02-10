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


// script crud
//get all cars
const url = 'http://localhost:5173/HomeView'


window.onload = async () => {
    refresh_cars()
}


async function refresh_cars(){
    const allCars = document.getElementById('cars');
    allCars.innerHTML = ""
    for (const car of await get_cars()) {
        allCars.appendChild(build_car(car))
    }
}

function build_car(car){
   const build = document.createElement('div')
    build.classList.add('car')
    const img = document.createElement('img')
    img.src = `img/${car.image}`
    build.appendChild(img)
    const info = document.createElement('div')
    const marca = document.createElement('p')
    marca.textContent = `Marca: ${car.brand}`
    const modelo = document.createElement('p')
    modelo.textContent = `Modelo: ${car.model}`
    info.appendChild(marca)
    info.appendChild(modelo)
    build.appendChild(info)
   return build
}

async function get_cars(){
    const response = await fetch(url) 
    return await response.json()
}

async function get_car(){
    //pilla id
    const id = document.getElementById('inputId').value
    const response = await fetch(url + '/' + id)
    const car = await response.json()
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ""

    //crea el coche en base la id
    const build = document.createElement('div')
    build.classList.add('car')
    const img = document.createElement('img')
    img.src = `img/${car.image}`
    build.appendChild(img)
    const info = document.createElement('div')
    const marca = document.createElement('p')
    marca.textContent = `Marca: ${car.brand}`
    const modelo = document.createElement('p')
    modelo.textContent = `Modelo: ${car.model}`
    info.appendChild(marca)
    info.appendChild(modelo)
    build.appendChild(info)
    resultado.appendChild(build)
}

async function post_car(){
    const response = await fetch(url)
    if(response.status === 200){
        const marca = document.getElementById('addBrand').value
        const modelo = document.getElementById('addModel').value
        const imagen = document.getElementById('addImg').value

        if(marca != '' || modelo !='' || imagen!='') {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    brand: marca,
                    model: modelo,
                    image: imagen
                })
            })
            refresh_cars()
        }
    }
}

async function put_car(){
    const id = document.getElementById('modifyCar-id').value
    const response = await fetch(url + '/' + id)
    if(response.status === 200){
        const modelo = document.getElementById('modifyCar-model').value
        const data = await response.json()
        
        if(id != '' && modelo !=''){
            data.model = modelo
            await fetch(url + '/' + id,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            refresh_cars()
        }
    }
}

async function delete_car(){
    const id = document.getElementById('inputId-delete').value
    await fetch (url + '/' + id,{
        method: 'DELETE'
    })
    refresh_cars()
}

function delete_one_car(){
    const borrar = document.getElementById('resultado')
    borrar.innerHTML = ''
}

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
    <swiper :modules="modules" :slides-per-view="1" :autoplay="true" :loop="true" :scrollbar="true" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide>
            <div class="absolute text-center w-full">
                <p class="text-white sm:text-black text-7xl font-bold mt-20 mb-96">Model Saturn Z</p>
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
    <div class="flex text-center sm:justify-center mt-10 ">
        <h2 class="text-6xl font-bold mt-0">
            Most popular Saturn cars
        </h2>
    </div>
    <!-- cards -->
    <div class="flex justify-center">
        <div class="grid gap-4 m-10 sm:m-28 tablet:grid-cols-2 grid-cols-1">

            <!-- card-1 -->
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Saturn Star 1</h5>
                    <p class="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        content is a little bit longer.
                    </p>
                    <button type="button"
                        class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>

            <!-- card-2 -->
            <div class="flex flex-col-reverse md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Saturn Star 2</h5>
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

            <!-- card-3 -->
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Saturn Star 3</h5>
                    <p class="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        content is a little bit longer.
                    </p>
                    <button type="button"
                        class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>

            <!-- card-4 -->
            <div class="flex flex-col-reverse md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Saturn Star 4</h5>
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

            <!-- card-5 -->
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="src/assets/img/ville-kaisla-HNCSCpWrVJA-unsplash-edited.jpg" alt="imageCar" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Saturn Star 5</h5>
                    <p class="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        content is a little bit longer.
                    </p>
                    <button type="button"
                        class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>

            <!-- card-6 -->
            <div class="flex flex-col-reverse md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Saturn Star 6</h5>
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
    </div>

    <!-- title for bottom slider -->
    <div class="flex justify-center mt-10 mb-10">
        <h1 class="text-7xl font-bold text-gray-800">Our Cars</h1>
    </div>

    <!--Multiple slider-->
    <div class="hidden sm:flex sm:px-40">
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
    </div>

    <!--swiper mobile-->
    <div class="flex sm:hidden">
        <swiper :modules="modules" :slides-per-view="1" :autoplay="true" :loop="true" :scrollbar="true"
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
    </div>

    <!--title of us-->
    <div class="flex items-center flex-col mx-60 my-10">
        <h1 class="flex justify-center text-7xl p-10 font-bold text-gray-800">About us</h1>
        <h3 class="flex justify-center text-5xl p-10 font-bold text-gray-800">Comitted</h3>
        <p class="flex justify-center">At Saturn Cars, we always look to the future with a vision of progress. This way of seeing things is what
            It makes you have a purpose and a commitment to society and the environment. And from there “Committed” was
            born:
            a series of initiatives of a social and environmental nature, which puts people at the center of everything
            our efforts.
        </p>
        <img src="/src/assets/img/pexels-trace-hudson-2770933-edited.jpg" class="w-full h-auto mt-10 rounded-lg">
    </div>


    <div class="flex justify-center mt-64 mb-24">
        <h1 class="flex justify-center text-7xl p-10 font-bold text-gray-800">Experience.</h1>
    </div>
    <div class="flex flex-col sm:flex-row justify-center mb-20">
        <div class="flex justify-center mx-10 my-10 hover:scale-110 transition duration-300 ease-in-out">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src="/src/assets/img/sam-loyd-qy27JnsH9sU-unsplash.jpg" alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Mechanic</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <h6 class="text-gray-900 text-xl font-medium mb-2 text-center">Go in</h6>
                </div>
            </div>
        </div>
        
        <div class="flex justify-center mx-10 my-10 hover:scale-110 transition duration-300 ease-in-out">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src="/src/assets/img/sam-loyd-qy27JnsH9sU-unsplash.jpg" alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Sports cars</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <h6 class="text-gray-900 text-xl font-medium mb-2 text-center">Go in</h6>
                </div>
            </div>
        </div>

        <div class="flex justify-center mx-10 my-10 hover:scale-110 transition duration-300 ease-in-out">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src="/src/assets/img/sam-loyd-qy27JnsH9sU-unsplash.jpg" alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">Renting</h5>
                    <p class="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <h6 class="text-gray-900 text-xl font-medium mb-2 text-center">Go in</h6>
                </div>
            </div>
        </div>
    </div>
</template>
