<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow flex flex-col items-center justify-center min-h-screen space-y-8 bg-orange-200">
            <h1 class="text-4xl font-bold">Conecteaza-te</h1>

            <form class="w-96 space-y-4">
                <div>
                    <label for="email" class="block">Email</label>
                    <input type="email" id="email" class="w-full rounded-lg px-4 py-2" />
                </div>

                <div>
                    <label for="password" class="block">Parola</label>
                    <input type="password" id="password" class="w-full rounded-lg px-4 py-2" />
                </div>

                <button type="submit" class="w-full bg-orange-950 text-orange-200 py-2 rounded-lg">
                    Conecteaza-te
                </button>
            </form>

            <p>
                Nu ai un cont?
                <a href="sign.html" class="text-orange-950 font-bold">Inscrie-te</a>
            </p>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>