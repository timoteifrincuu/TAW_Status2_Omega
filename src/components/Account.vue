<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow flex flex-col items-center justify-center min-h-screen space-y-8 bg-orange-200 p-8">
            <h1 class="text-4xl font-bold">Detalii Cont</h1>
            <div class="w-full sm:max-w-sm md:max-w-md xl:max-w-2xl p-4 bg-orange-100 rounded-lg shadow-lg">
                <form action="#" method="POST" class="space-y-4">
                    <div>
                        <label for="name" class="block font-bold">Nume</label>
                        <input type="text" id="name" name="name" placeholder="Minune Adrian"
                            class="w-full p-2 rounded-lg border border-orange-200">
                    </div>
                    <div>
                        <label for="email" class="block font-bold">Email</label>
                        <input type="email" id="email" name="email" placeholder="adrian.minune@gmail.com"
                            class="w-full p-2 rounded-lg border border-orange-200">
                    </div>
                    <div>
                        <label for="password" class="block font-bold">Parola</label>
                        <input type="password" id="password" name="password" placeholder="********"
                            class="w-full p-2 rounded-lg border border-orange-200">
                    </div>
                    <button type="submit"
                        class="w-full bg-orange-200 hover:bg-orange-100 text-orange-950 py-2 rounded-lg">Salveaza
                        modificari</button>
                </form>
            </div>
            <AccountDetails />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import AccountDetails from './AccountDetails.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
</script>