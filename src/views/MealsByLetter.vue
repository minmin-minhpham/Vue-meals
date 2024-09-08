<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useMealStore } from "@/stores/meals";
import Meals from "@/components/Meals.vue";
import { useRoute } from "vue-router";

//utils
let letters = [];
for (let i = 65; i <= 90; i++) {
  letters.push(String.fromCharCode(i));
}

const route = useRoute();
const store = useMealStore();

const meals = computed(() => store.mealsByLetter || []);

onMounted(() => {
  store.searchMealsByLetter(route.params.letter);
});

watch(route, () => {
  store.searchMealsByLetter(route.params.letter);
});
</script>
<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      v-for="letter of letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>
