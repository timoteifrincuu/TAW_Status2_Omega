<script setup>
import { onMounted } from 'vue'
import { useAppointmentStore } from '../stores/appointments'
import WatchAndComputed from './WatchAndComputed.vue'

const store = useAppointmentStore()

onMounted(() => {
  store.fetchAppointments()
})
</script>

<template>
  <div class="w-full max-w-2xl p-4 bg-orange-100 rounded-lg shadow-lg mt-8">
    <h2 class="text-2xl font-bold mb-4">Programările tale</h2>

    <ul class="space-y-2">
      <li v-for="(appointment, index) in store.appointments" :key="index"
          class="bg-white p-4 rounded shadow flex justify-between items-center">
        <div>
          <p><strong>Data:</strong> {{ appointment.date }}</p>
          <p><strong>Ora:</strong> {{ appointment.time }}</p>
        </div>
      </li>
    </ul>

    <WatchAndComputed />
  </div>
</template>
