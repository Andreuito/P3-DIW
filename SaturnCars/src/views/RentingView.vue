<script>
import formCrear from '../components/formCrear.vue'
import formDelete from '../components/formDelete.vue'
import formUpdate from '../components/formUpdate.vue'

var url = 'http://localhost:3000/cars'
var cars = []

export default {
    components: {
        formCrear,
        formDelete,
        formUpdate
    },
    name: "Renting",
    data() {
        return {
            cars:[],
            model: '',
            type: '',
            transmision: '',
            horse_power: '',
            doors: '',
            image: "/src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg"
        }
    },
    mounted() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.cars = data
                console.log(cars)
            })
    }
}
</script>

<template>
    <div class="flex justify-center mt-10 mb-10">
        <h1 class="text-6xl sm:text-7xl p-10 font-bold text-gray-800 text-center">Try our cars</h1>

    </div>
    <div class="flex flex-col flex-wrap sm:flex-row justify-center mb-20">
        <div class="flex mx-10 my-10 hover:scale-95 transition duration-300 ease-in-out" v-for="item in cars"
            :key="item.id">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <img class="rounded-t-lg" :src="item.image" />
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Model: {{ item.model }}</h5>
                    <p class="text-gray-700 text-base mb-4">ID: {{ item.id }}</p>
                    <p class="text-gray-700 text-base mb-4">Combustion: {{ item.type }}</p>
                    <p class="text-gray-700 text-base mb-4"> Transmision: {{ item.transmision }}</p>
                    <p class="text-gray-700 text-base mb-4"> Power: {{ item.horse_power }}</p>
                    <p class="text-gray-700 text-base mb-4"> Doors: {{ item.doors }}</p>
                </div>
                <div class="mb-5 ml-5">
                    <router-link :to="{ path: '/Renting/' + item.id, params: id = item.id }">
                        <button class="button1">
                            Rent me!
                            <div class="arrow-wrapper">
                                <div class="arrow"></div>
                            </div>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="border-b border-gray-400 border-solid border-2 mx-20 sm:mx-56"></div>

    <section class="bg-white">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-800">
                Suggestions
            </h2>
            <p class="mb-8 mt-10 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Do you want to create maybe the new RING 7, now you can, 
                try this and create your new beast
            </p>
            
            <formCrear />

            <div class="border-b border-gray-400 border-solid border-2 mx-20 sm:mx-56 my-20"></div>

            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-3xl">Delete the car you created by ID</p>
            

            <formDelete />

            <div class="border-b border-gray-400 border-solid border-2 mx-20 sm:mx-56 my-20"></div>

            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-3xl">Update the car you created</p>

            <formUpdate />

        </div>
    </section>
</template>