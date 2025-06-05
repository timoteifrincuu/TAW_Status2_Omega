<template>
    <div>
        <Header />
        <main class="flex-grow flex flex-col items-center justify-center min-h-screen space-y-8 bg-orange-200">
            <h1 class="text-4xl font-bold">Contact Us</h1>

            <div class="md:w-1/2 bg-orange-100 p-8 rounded-lg shadow-lg">
                <div class="space-y-4">
                    <p class="font-bold">Numar de telefon frizer: +4074 456 7890</p>
                </div>
                <form action="#" method="POST" class="space-y-4">
                    <div class="space-y-2">
                    <label for="name" class="block font-bold">Nume</label>
                    <input type="text" id="name" name="name" class="w-full p-2 rounded-lg border-2 border-orange-200">
                    </div>

                    <div class="space-y-2">
                    <label for="email" class="block font-bold">Email</label>
                    <input type="email" id="email" name="email" class="w-full p-2 rounded-lg border-2 border-orange-200">
                    </div>

                    <div class="space-y-2">
                    <label for="message" class="block font-bold">Mesaj</label>
                    <textarea id="message" name="message" class="w-full p-2 rounded-lg border-2 border-orange-200"></textarea>
                    </div>

                    <button type="submit" class="bg-orange-200 hover:bg-orange-100 text-orange-950 py-2 px-4 rounded-lg">
                    Send
                    </button>
                </form>
            </div>  
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>