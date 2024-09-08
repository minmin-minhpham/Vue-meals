<script setup>
import YouTubeButton from "./YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>

<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-50 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        praesentium odit magni, rem nisi nesciunt architecto, repellat maxime
        reprehenderit labore harum. Incidunt, non dolorem. Asperiores voluptatum
        error reprehenderit laborum atque!
      </p>
      <div class="flex items-center justify-between">
        <div></div>
        <YouTubeButton
          :class="{ 'pointer-events-none': !meal.strYoutube }"
          :href="meal.strYoutube"
        />
      </div>
    </div>
  </div>
</template>
