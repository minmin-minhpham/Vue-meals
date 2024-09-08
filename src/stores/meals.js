import axiosClient from "@/axiosClient";
import { defineStore } from "pinia";

export const useMealStore = defineStore("meals", {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredient: {},
  }),
  actions: {
    searchMeals(keyWord) {
      axiosClient
        .get(`/search.php?s=${keyWord}`)
        .then(({ data }) => {
          this.searchedMeals = data.meals;
        })
        .catch((errorMessages) => {
          console.log(errorMessages);
        });
    },

    searchMealsByLetter(letter) {
      axiosClient
        .get(`search.php?f=${letter}`)
        .then(({ data }) => {
          this.mealsByLetter = data.meals;
        })
        .catch((errorMessages) => {
          console.log(errorMessages);
        });
    },

    searchMealsByIngredient(ing) {
      axiosClient
        .get(`filter.php?i=${ing}`)
        .then(({ data }) => {
          this.mealsByIngredient = data.meals;
        })
        .catch((errorMessages) => {
          console.log(errorMessages);
        });
    },
  },
});
