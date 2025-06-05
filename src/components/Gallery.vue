<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow flex flex-col items-center justify-center min-h-screen space-y-8 bg-orange-200">
            <h1 class="text-4xl font-bold">Galerie</h1>
            <div class="container mx-auto px-4">
                <div class="row g-4">
                    <div class="col-12 col-md-6 col-xl-3">
                        <img :src="g1" alt="Image 1" class="w-full h-auto rounded-lg shadow-lg">
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                        <img :src="g2" alt="Image 2" class="w-full h-auto rounded-lg shadow-lg">
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                        <img :src="g3" alt="Image 3" class="w-full h-auto rounded-lg shadow-lg">
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                        <img :src="g4" alt="Image 4" class="w-full h-auto rounded-lg shadow-lg">
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>
