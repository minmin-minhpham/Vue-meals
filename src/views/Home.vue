<script setup>
import { ref, onMounted } from "vue";
import axiosClient from "@/axiosClient";
import Meals from "@/components/Meals.vue";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get(`random.php`).then(({ data }) => {
      meals.value.push(data.meals[0]);
    });
  }
});
</script>

<template>
  <div class="flex flex-col p-8">
    <div class="p-8 pb-0 text-orange-500">
      <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>

    <Meals :meals="meals" />
  </div>
</template>
