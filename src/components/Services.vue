<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
import beardImage from '../assets/beard.png';
import hairBeardImage from '../assets/hairBeard.png';
import haircutImage from '../assets/haircut.png';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow bg-orange-200">
      <div class="text-center mt-12 mb-12">
        <h1 class="text-4xl font-bold mb-8 text-orange-950">Alege un serviciu</h1>
        <div class="flex flex-col xl:flex-row 2xl:flex-row justify-center items-center gap-8">
          <!-- Tuns -->
          <div class="flex justify-center">
            <RouterLink to="/appointment" class="block">
              <div
                class="relative bg-orange-600 hover:bg-orange-500 rounded-lg shadow-lg overflow-hidden cursor-pointer w-64 h-64">
                <img :src="haircutImage" alt="Tuns" class="object-cover w-full h-full opacity-80">
                <span
                  class="absolute inset-0 flex justify-center items-center text-2xl font-bold text-orange-100">Tuns</span>
              </div>
            </RouterLink>
          </div>

          <!-- Barbierit -->
          <div class="flex justify-center">
            <RouterLink to="/appointment" class="block">
              <div
                class="relative bg-orange-600 hover:bg-orange-500 rounded-lg shadow-lg overflow-hidden cursor-pointer w-64 h-64">
                <img :src="beardImage" alt="Barbierit" class="object-cover w-full h-full opacity-80">
                <span
                  class="absolute inset-0 flex justify-center items-center text-2xl font-bold text-orange-100">Barbierit</span>
              </div>
            </RouterLink>
          </div>

          <!-- Tuns si Barbierit -->
          <div class="flex justify-center">
            <RouterLink to="/appointment" class="block">
              <div
                class="relative bg-orange-600 hover:bg-orange-500 rounded-lg shadow-lg overflow-hidden cursor-pointer w-64 h-64">
                <img :src="hairBeardImage" alt="Tuns si Barbierit"
                  class="object-cover w-full h-full opacity-80">
                <span
                  class="absolute inset-0 flex justify-center items-center text-2xl font-bold text-orange-100">Tuns
                  si Barbierit</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
