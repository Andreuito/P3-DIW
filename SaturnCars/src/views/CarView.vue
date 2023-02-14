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

    <div class="grid grid-cols-1 sm:grid-cols-2 mx-10 my-10">
        <img class="rounded-lg hover:scale-95 transition duration-300 ease-in-out" :src="cars.image" alt="CarImage"/>
        <div class="flex flex-col mb-24 p-10">
            <h1 class="flex text-5xl p-10 font-bold text-gray-800 justify-center text-center sm:text-start sm:justify-end">
                Drive and defy your limits
            </h1>
            <p class="flex text-gray-700 text-2xl mb-4 p-6">
                Combustion: {{ cars.type }}<br>
                Transmision: {{ cars.transmision }}<br>
                Power: {{ cars.horse_power }} <br>
                Doors: {{ cars.doors }} 
            </p>
            <div class="flex justify-end mr-6">
                <button class="button">
                    Wanna try?
                </button>
            </div>
        </div>
    </div>
</template>