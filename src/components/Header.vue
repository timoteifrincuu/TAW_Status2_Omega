<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logoBarberWhite from '../assets/logoBarberWhite.svg';

const isSideMenuOpen = ref(false);
const openSideMenu = () => {
  isSideMenuOpen.value = true;
};
const closeSideMenu = () => {
  isSideMenuOpen.value = false;
};
const router = useRouter();
const navigateTo = (route) => {
  router.push(route);
};
</script>

<template>
  <header class="flex justify-between items-center bg-orange-950 p-4 shadow-lg">
    <div class="rounded-lg bg-orange-200 hover:bg-orange-100">
      <router-link to="/">
        <img :src="logoBarberWhite" alt="Logo" class="h-16">
      </router-link>
    </div>

    <div>
      <button id="menuButton" class="flex p-2 rounded-lg bg-orange-200 xl:hidden border-0" @click="openSideMenu">
        <i class="bi bi-menu-button-wide text-orange-950" style="font-size: 2rem;"></i>
      </button>

      <div class="hidden xl:flex space-x-4">
        <router-link to="/services"
          class="bg-orange-200 hover:bg-orange-100 text-orange-950 py-2 px-4 rounded-lg flex items-center">
          <i class="bi bi-scissors mr-2"></i> Servicii
        </router-link>

        <div class="relative group">
          <router-link to="/about"
            class="bg-orange-200 hover:bg-orange-100 text-orange-950 py-2 px-4 rounded-lg flex items-center">
            <i class="bi bi-ticket-detailed-fill mr-2"></i> Despre noi
          </router-link>
          <div class="absolute hidden group-hover:block bg-orange-200 text-orange-950 rounded-lg shadow-lg">
            <router-link to="/gallery" class="block px-4 py-2 rounded-lg hover:bg-orange-100">Galerie</router-link>
            <router-link to="/reviews" class="block px-4 py-2 rounded-lg hover:bg-orange-100">Recenzii</router-link>
            <router-link to="/contact"
              class="block px-4 py-2 rounded-lg hover:bg-orange-100">Contacteaza-ne</router-link>
          </div>
        </div>

        <div class="relative group">
          <router-link to="/account"
            class="bg-orange-200 hover:bg-orange-100 text-orange-950 py-2 px-4 rounded-lg flex items-center">
            <i class="bi bi-person-circle mr-2"></i> Detalii cont
          </router-link>
          <div class="absolute hidden group-hover:block bg-orange-200 text-orange-950 rounded-lg shadow-lg">
            <router-link to="/log" class="block px-4 py-2 rounded-lg hover:bg-orange-100">Conecteaza-te</router-link>
            <router-link to="/sign" class="block px-4 py-2 rounded-lg hover:bg-orange-100">Inscrie-te</router-link>
          </div>
        </div>
      </div>

    </div>
  </header>

  <div id="sideMenu"
    class="fixed top-0 right-0 w-64 h-full bg-orange-950 transition-transform duration-300 shadow-lg xl:hidden"
    :class="{ 'translate-x-full': !isSideMenuOpen }">
    <div class="flex justify-between items-center p-4 bg-orange-200">
      <h2 class="text-orange-950 font-bold">Meniu</h2>
      <button id="closeButton" class="text-orange-950 hover:text-orange-100" @click="closeSideMenu">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <nav class="p-4">
      <router-link to="/services" class="block py-2 text-orange-200 hover:bg-orange-800 rounded-lg font-bold">
        <i class="bi bi-scissors"></i> Servicii
      </router-link>
      <router-link to="/about" class="block py-2 text-orange-200 hover:bg-orange-800 rounded-lg font-bold">
        <i class="bi bi-ticket-detailed-fill"></i> Despre noi
      </router-link>
      <router-link to="/gallery" class="block py-2 px-4 text-orange-200 hover:bg-orange-800 rounded-lg">
        Galerie
      </router-link>
      <router-link to="/reviews" class="block py-2 px-4 text-orange-200 hover:bg-orange-800 rounded-lg">
        Recenzii
      </router-link>
      <router-link to="/contact" class="block py-2 px-4 text-orange-200 hover:bg-orange-800 rounded-lg">
        Contacteaza-ne
      </router-link>
      <router-link to="/account" class="block py-2 text-orange-200 hover:bg-orange-800 rounded-lg font-bold">
        <i class="bi bi-person-circle"></i> Detalii cont
      </router-link>
      <router-link to="/log" class="block py-2 px-4 text-orange-200 hover:bg-orange-800 rounded-lg">
        Conecteaza-te
      </router-link>
      <router-link to="/sign" class="block py-2 px-4 text-orange-200 hover:bg-orange-800 rounded-lg">
        Inscrie-te
      </router-link>
    </nav>
  </div>
</template>
