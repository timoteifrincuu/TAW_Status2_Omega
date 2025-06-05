<script setup>
import Footer from './Footer.vue'
import Header from './Header.vue'
import { ref } from 'vue'
import { useAppointmentStore } from '../stores/appointments'
import { useRouter } from 'vue-router'

const store = useAppointmentStore()
const router = useRouter()

const date = ref('')
const time = ref('')

const confirmAppointment = async () => {
  if (date.value && time.value) {
    await store.addAppointment({ date: date.value, time: time.value })
    router.push('/account')
  }
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex items-center justify-center min-h-screen bg-orange-200">
      <div class="flex flex-col items-center space-y-6 p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold text-orange-950">Programează-te</h1>

        <div class="flex flex-col items-start space-y-2">
          <label for="date">Selectează o dată:</label>
          <input id="date" type="date" v-model="date" class="border rounded-lg px-4 py-2 w-full" />
        </div>

        <div class="flex flex-col items-start space-y-2">
          <label for="time">Selectează o oră:</label>
          <input id="time" type="time" v-model="time" class="border rounded-lg px-4 py-2 w-full" />
        </div>

        <button @click="confirmAppointment"
          class="rounded-lg bg-orange-950 hover:bg-orange-800 text-orange-200 py-2 px-4 w-full font-semibold">
          Confirmă Programarea
        </button>
      </div>
    </main>
    <Footer />
  </div>
</template>
