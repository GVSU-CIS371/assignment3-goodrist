import { defineStore } from "pinia";
import { ref } from "vue";

import bases from "../data/bases.ts";
import creamers from "../data/creamers.ts";
import syrups from "../data/syrups.ts";
import temps from "../data/temps.ts";

export const useBeverageStore = defineStore("beverageStore", () => {
  const selectedName = ref("");
  const selectedBase = ref(bases[0]);
  const selectedCreamer = ref(creamers[0]);
  const selectedSyrup = ref(syrups[0]);
  const selectedTemp = ref(temps[0]);

  const recipes = ref<any[]>([]);

  function makeBeverage() {
    if (!selectedName.value.trim()) return;

    recipes.value.push({
      name: selectedName.value,
      base: selectedBase.value,
      creamer: selectedCreamer.value,
      syrup: selectedSyrup.value,
      temp: selectedTemp.value
    });

    selectedName.value = "";
  }

  function showBeverage(recipe: any) {
    selectedBase.value = recipe.base;
    selectedCreamer.value = recipe.creamer;
    selectedSyrup.value = recipe.syrup;
    selectedTemp.value = recipe.temp;
  }

  return {
    selectedName,
    selectedBase,
    selectedCreamer,
    selectedSyrup,
    selectedTemp,
    recipes,
    makeBeverage,
    showBeverage
  };
});
