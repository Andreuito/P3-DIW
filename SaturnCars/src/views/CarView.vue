<script>
var cars = "";

export default {
    name: "CarView",
    data() {
        return {
            cars,
        }
    },
    mounted() {
        let url = "http://localhost:3000/cars/";
        let id = this.$route.params.id;
        let fetchUrl = url + id;
        console.log(fetchUrl)
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                this.cars = data
                console.log(data)
            })
    },
}
</script>
<template>
    <div class="flex justify-center mt-10 mb-10">
        <h1 class= "text-6xl sm:text-7xl p-10 font-bold text-gray-800">Model {{ cars.model }} </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:mb-10 sm:mt-10 sm:ml-10">
        <img class="rounded-t-lg sm:rounded-lg hover:scale-95 transition duration-300 ease-in-out" :src="cars.image" />
            <div class="flex flex-col mb-24 p-10">
                <div class="p-6">
                    <p class="flex text-gray-700 text-base mb-4 p-6">Combustion: {{ cars.type }}</p>
                    <p class="flex text-gray-700 text-base mb-4 p-6"> Transmision: {{ cars.transmision }}</p>
                    <p class="flex text-gray-700 text-base mb-4 p-6"> Power: {{ cars.horse_power }}</p>
                </div>
            </div>
        </div>
</template>