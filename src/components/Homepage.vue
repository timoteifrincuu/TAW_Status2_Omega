<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
import logoBarber from '../assets/logoBarber.svg'; 
</script>

<template>
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow flex flex-col items-center justify-center space-y-8 bg-orange-200">
        <p class="text-2xl font-bold text-orange-950 text-center">
          Bun venit la DavidTheBarber!
        </p>
        <div class="text-center">
          <img :src="logoBarber" alt="Logo" class="w-80 sm:w-80 md:w-96 xl:w-[30rem]">
        </div>
        <p class="text-xl font-bold text-orange-950 text-center">
          Descoperă o experiență premium de îngrijire și stil, creată special pentru tine. Programează-te rapid și simplu pentru o tunsoare impecabilă sau o sesiune de bărbierit de clasă. Lasă-te pe mâinile profesioniștilor noștri și bucură-te de un look care să te reprezinte perfect! DavidTheBarber - locul unde stilul întâlnește excelența.
        </p>
      </main>
      <Footer />
    </div>
</template>