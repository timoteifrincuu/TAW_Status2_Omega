import { defineStore } from 'pinia'
import axios from 'axios'
import { ws } from '../ws'

export const useAppointmentStore = defineStore('appointments', {
  state: () => ({
    appointments: []
  }),

  actions: {
    async addAppointment(appointment) {
      this.appointments.push(appointment)
      // salvează în backend
      await axios.post('http://localhost:3000/appointments', appointment)
      // trimite lista întreagă prin WebSocket (pentru sincronizare între taburi)
      ws.send(JSON.stringify(this.appointments))
    },

    async fetchAppointments() {
      const response = await axios.get('http://localhost:3000/appointments')
      this.appointments = response.data
    },

    setAppointmentsFromWS(data) {
      this.appointments = data
    }
  }
})
