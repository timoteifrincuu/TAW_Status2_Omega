<script setup>
import { RouterView } from "vue-router"

//ws pt appointment























//AL 2lea WS example

// import { ref, computed, watch } from 'vue'
// import { ws } from './ws'
// const phone = ref('')
// watch(phone, (newPhone, oldPhone) => {
// if (newPhone != oldPhone) {
// ws.send(newPhone)
// }
// })
// import { useWsStore } from './stores/wsStore'
// const wsStore = useWsStore()
// const wsPhone = computed(() => wsStore.phone)
// watch(wsPhone, (newWsPhone) => {
//   phone.value = newWsPhone;
// });







// import NavBar from "./components/NavBar.vue"
// import { ref } from "vue"
// const helloText = ref("")
// function onHelloText(response) {
//   helloText.value = response
// }



</script>

<template>
  <!-- <NavBar @on-hello-text="onHelloText" />
  <h1 class="mt-35 text-2xl">
    {{ helloText.message }}
  </h1> -->

  <div id="app" class="min-h-screen">
    <RouterView />
  </div>
</template>

<style>
@import "tailwindcss";
/* @tailwind base; */
/* @tailwind components; */
/* @tailwind utilities; */
</style>
