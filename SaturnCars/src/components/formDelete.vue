<script>
var url = 'http://localhost:3000/cars'
var cars = []

export default {
    name: "Renting",
    data() {
        return {
            cars: [],
            model: '',
            type: '',
            transmision: '',
            horse_power: '',
            doors: '',
            image: "/src/assets/img/campbell-3ZUsNJhi_Ik-unsplash.jpg"
        }
    },
    methods: {
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
    <form @submit.prevent="deleteCar(id)" class="space-y-8">
        <div>
            <label for="id" class="block mb-2 text-sm font-medium text-gray-900">Insert an ID</label>
            <input type="number" id="id"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="1" v-model="id">
        </div>
        <button type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-gray-700 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Delete
            Car</button>
    </form>
</template>