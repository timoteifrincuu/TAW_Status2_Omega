<template>
    <div>
        <Header />
        <main class="flex-grow flex flex-col items-center justify-center min-h-screen space-y-8 bg-orange-200">
            <h1 class="text-4xl font-bold">Recenzii</h1>

            <form class="w-full sm:max-w-sm md:max-w-md xl:max-w-2xl bg-orange-100 p-6 rounded-lg shadow-md">
                <div class="mb-4">
                    <label class="block text-orange-950 text-sm font-bold mb-2" for="name">
                        Nume
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-orange-950 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Numele tau">
                </div>
                <div class="mb-4">
                    <label class="block text-orange-950 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-orange-950 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Emailul tau">
                </div>
                <div class="mb-6">
                    <label class="block text-orange-950 text-sm font-bold mb-2" for="feedback">
                        Feedback
                    </label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-orange-950 leading-tight focus:outline-none focus:shadow-outline" id="feedback" placeholder="Feedback-ul tau" rows="4"></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-orange-950 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Trimite
                    </button>
                </div>
            </form>

            <div class="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="bg-orange-100 rounded-lg p-4">
                    <h2 class="text-2xl font-bold">Ioan Andrei</h2>
                    <p class="text-sm">"Vin aici de ani de zile și nu am fost niciodată dezamăgită. Servicii grozave și personal prietenos!"</p>
                </div>
                <div class="bg-orange-100 rounded-lg p-4">
                    <h2 class="text-2xl font-bold">Marian George</h2>
                    <p class="text-sm">"Îmi place atmosfera de aici. Este întotdeauna curat și frizerii sunt foarte profesioniști."</p>
                </div>
                <div class="bg-orange-100 rounded-lg p-4">
                    <h2 class="text-2xl font-bold">Florian Ovidiu</h2>
                    <p class="text-sm">"Am fost la multe frizerii din zonă și acesta este de departe cel mai bun. eu foarte mult recomand!"</p>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>