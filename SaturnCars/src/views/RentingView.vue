<script>
var url = 'http://localhost:3000/cars'
var cars = []

export default {
    name: "Renting",
    data() {
        return {
            cars: [],
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
</template>