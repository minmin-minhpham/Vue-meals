<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "@/axiosClient";
import YouTubeButton from "@/components/YouTubeButton.vue";


const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
  // .catch((error) => {
  //   console.log(`Error:: ${error}`);
  // });


});
</script>

<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]"/>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(_, i) of new Array(20)">
            <li v-if="meal[`strIngredient${i + 1}`]">
              {{ i + 1 }}. {{ meal[`strIngredient${i + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, i) of new Array(20)">
            <li v-if="meal[`strMeasure${i + 1}`]">
              {{ i + 1 }}. {{ meal[`strMeasure${i + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4">
        <YouTubeButton
          :class="{ 'pointer-events-none': !meal.strYoutube}"
          :href="meal.strYoutube"
        />
      </div>
    </div>
  </div>
</template>
