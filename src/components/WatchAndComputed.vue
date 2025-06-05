<script setup>
import { ref, computed, watch } from 'vue'

const service = ref('')
const savedService = ref('')
const lastChange = ref('')

const originalService = computed(() => {
    return service.value
})

const saveService = () => {
    savedService.value = service.value
    lastChange.value = 'Serviciu salvat!'
}

watch(service, (newValue) => {
    if (savedService.value) {
        lastChange.value = `Serviciul s-a schimbat din "${savedService.value}" în "${newValue}"`
    }
})
</script>

<template>
    <div class="w-full sm:max-w-sm md:max-w-md xl:max-w-2xl p-4 bg-orange-100 rounded-lg shadow-lg mt-8">
        <h2 class="text-2xl font-bold mb-6">Serviciu</h2>

        <div class="flex gap-3 mb-6">
            <input 
                v-model="service" 
                placeholder="Scrie un serviciu aici..."
                class="flex-1 p-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            >
            <button 
            @click.prevent="saveService" 
                class="px-4 py-2 bg-orange-200 text-orange-950 rounded-lg hover:bg-orange-100 transition-colors duration-200"
            >
                Salvează Serviciul
            </button>
        </div>

        <div class="bg-orange-50 p-4 rounded-lg text-left border border-orange-200">
            <p class="text-orange-800 mb-3 font-semibold">Serviciul Original: {{ originalService }}</p>

            <p v-if="lastChange" class="text-orange-600 italic pt-3 border-t border-orange-300">
                {{ lastChange }}
            </p>
        </div>
    </div>
</template>
