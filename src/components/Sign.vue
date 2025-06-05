<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow flex flex-col items-center justify-center min-h-screen space-y-8 bg-orange-200">
            <h1 class="text-4xl font-bold">Inscrie-te</h1>

            <form class="w-96 space-y-4">
                <div class="flex flex-col space-y-2">
                    <label for="email" class="text-lg">Email</label>
                    <input type="email" id="email" name="email" class="p-2 rounded-lg border-2 border-orange-200">
                </div>

                <div class="flex flex-col space-y-2">
                    <label for="password" class="text-lg">Parola</label>
                    <input type="password" id="password" name="password"
                        class="p-2 rounded-lg border-2 border-orange-200">
                </div>

                <div class="flex flex-col space-y-2">
                    <label for="confirmPassword" class="text-lg">Confirma Parola</label>
                    <input type="password" id="confirmPassword" name="confirmPassword"
                        class="p-2 rounded-lg border-2 border-orange-200">
                </div>

                <button type="submit"
                    class="bg-orange-950 hover:bg-orange-800 text-orange-200 py-2 px-4 rounded-lg">Inscrie-te</button>
            </form>
        </main>



        <Footer />
    </div>
</template>

<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>