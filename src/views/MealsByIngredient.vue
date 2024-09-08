<script setup>
import Meals from "@/components/Meals.vue";
import { useMealStore } from "@/stores/meals";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const store = useMealStore();
const route = useRoute();
// const ingredient = computed(() => store.ingredient);

const meals = computed(() => store.mealsByIngredient)
onMounted(() => {
  store.searchMealsByIngredient(route.params.ingredient);
});

</script>
<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals for
    </h1>
  </div>
  <Meals :meals="meals" />
</template>
