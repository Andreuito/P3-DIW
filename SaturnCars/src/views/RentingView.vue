<script>
import { reactive } from 'vue'

var url = 'http://localhost:3000/cars'
var cars = []

export default {
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
    },
    methods: {
        crearCar() {
            const car = {
                model: this.model,
                type:  this.type,
                transmision: this.transmision,
                horse_power: this.horse_power,
                doors: this.doors,
                image: this.image
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            })
                .then((response) => {
                    if(response.ok){
                        this.cars.push(car)
                    }
                }) 

        },
        async updateCar(id) {
            const car = {
                model: this.model,
                type:  this.type,
                transmision: this.transmision,
                horse_power: this.horse_power,
                doors: this.doors,
                image: this.image
            }
            await fetch(url + '/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            })
            .then((response) => {
                if(response.ok){
                    this.cars.push(car)
                }
            })
        },
        async deleteCar(id) {
            await fetch(url +'/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.cars.id)
            })
                .then((response) => response.json)

        }
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
            <form @submit.prevent="crearCar" class="space-y-8">
                <div>
                    <label for="Model"
                        class="block mb-2 text-sm font-medium text-gray-900">Create a new model</label>
                    <input type="text" id="Model"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Ring 7" v-model="model">
                </div>
                <div>
                    <label for="type" class="block mb-2 text-sm font-medium text-gray-900 ">Choose your type</label>
                    <input type="text" id="type"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Electric, Gasoline or Diesel" v-model="type">
                </div>
                <div>
                    <label for="transmision" class="block mb-2 text-sm font-medium text-gray-900 ">Choose your transmision</label>
                    <input type="text" id="transmission"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Automatic or Manual" v-model="transmision">
                </div>
                <div>
                    <label for="power" class="block mb-2 text-sm font-medium text-gray-900 ">Choose your power</label>
                    <input type="text" id="power"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="300HP" v-model="horse_power">
                </div>
                <div>
                    <label for="doors" class="block mb-2 text-sm font-medium text-gray-900 ">Choose how many doors you want</label>
                    <input type="num" id="doors"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="5" v-model="doors">
                </div>
                <button type="submit"
                    class="py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Create Car</button>
            </form>

            <div class="border-b border-gray-400 border-solid border-2 mx-20 sm:mx-56 my-20"></div>

            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-3xl">Delete the car you created by ID</p>
            

            <form @submit.prevent="deleteCar(id)" class="space-y-8">
                <div>
                    <label for="id"
                        class="block mb-2 text-sm font-medium text-gray-900">Insert an ID</label>
                    <input type="number" id="id"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        placeholder="1" v-model="id">
                </div>
                <button type="submit"
                    class="py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Delete Car</button>
            </form>

            <div class="border-b border-gray-400 border-solid border-2 mx-20 sm:mx-56 my-20"></div>

            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-3xl">Update the car you created</p>

            <form @submit.prevent="updateCar(id)" class="space-y-8">
                <div>
                    <label for="id"
                        class="block mb-2 text-sm font-medium text-gray-900">Insert an ID</label>
                    <input type="number" id="id"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        placeholder="1" v-model="id">
                </div>
                <div>
                    <label for="Model"
                        class="block mb-2 text-sm font-medium text-gray-900">Create a new model</label>
                    <input type="text" id="Model"
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Ring 7" v-model="model">
                </div>
                <div>
                    <label for="type" class="block mb-2 text-sm font-medium text-gray-900 ">Choose your type</label>
                    <input type="text" id="type"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Electric, Gasoline or Diesel" v-model="type">
                </div>
                <div>
                    <label for="transmision" class="block mb-2 text-sm font-medium text-gray-900 ">Choose your transmision</label>
                    <input type="text" id="transmission"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="Automatic or Manual" v-model="transmision">
                </div>
                <div>
                    <label for="power" class="block mb-2 text-sm font-medium text-gray-900 ">Choose your power</label>
                    <input type="text" id="power"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="300HP" v-model="horse_power">
                </div>
                <div>
                    <label for="doors" class="block mb-2 text-sm font-medium text-gray-900 ">Choose how many doors you want</label>
                    <input type="num" id="doors"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                        placeholder="5" v-model="doors">
                </div>
                <button type="submit"
                    class="py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Update car</button>
            </form>

        </div>
    </section>
</template>