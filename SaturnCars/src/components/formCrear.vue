<script>
var url = 'http://localhost:3000/cars'

export default {
    name: "Renting",
    data() {
        return {
            model: '',
            type: '',
            transmision: '',
            horse_power: '',
            doors: '',
            image: "/src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg"
        }
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
    }
}
</script>
<template>
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
</template>