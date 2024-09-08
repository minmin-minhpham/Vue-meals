<script setup>
import axiosClient from "@/axiosClient";
import MealItem from "@/components/MealItem.vue";
import Meals from "@/components/Meals.vue";
import YouTubeButton from "@/components/YouTubeButton.vue";
import { useMealStore } from "@/stores/meals";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const mealStore = useMealStore();
const meals = computed(() => mealStore.searchedMeals);
// let meals = mealStore.searchedMeals;

const keyWord = ref("");

// function searchMeals() {
//   mealStore.searchMeals(keyWord.value);
// }

const searchMeals = () => {
  mealStore.searchMeals(keyWord.value);
};

onMounted(() => {
  keyWord.value = route.params.name;
  if (keyWord.value) {
    searchMeals();
  }
});
</script>

<template>
  <!-- <div class="p-6">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      v-model="keyWord"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div> -->

  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Search Meals by Name
    </h1>
  </div>
  <div class="p-8 pb-0">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      v-model="keyWord"
      @change="searchMeals"
    />
  </div>
  <!-- <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div> -->

  <Meals :meals="meals" />
</template>
