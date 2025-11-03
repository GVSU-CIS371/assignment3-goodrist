import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { 
  temps, 
  bases, 
  creamers, 
  syrups,
  type BaseBeverageType,
  type CreamerType,
  type SyrupType
} from '../data/ingredients';

export interface BeverageRecipe {
  id: string;
  name: string;
  temperature: string;
  base: BaseBeverageType;
  creamer: CreamerType;
  syrup: SyrupType;
  createdAt: Date;
}

export const useBeverageStore = defineStore('beverage', () => {
  // Import ingredient data
  const temperatures = ref(temps);
  const baseBeverages = ref(bases);
  const creamerOptions = ref(creamers);
  const syrupOptions = ref(syrups);

  // Current selections
  const currentTemp = ref(temperatures.value[0]); // Default: "Hot"
  const currentBase = ref(baseBeverages.value[2]); // Default: Coffee
  const currentCreamer = ref(creamerOptions.value[0]); // Default: No Cream
  const currentSyrup = ref(syrupOptions.value[0]); // Default: No Syrup

  // Saved recipes
  const savedRecipes = ref<BeverageRecipe[]>([]);

  // Computed properties
  const currentBeverageDescription = computed(() => {
    let description = `${currentTemp.value} ${currentBase.value.name}`;
    if (currentCreamer.value.name !== 'No Cream') {
      description += ` with ${currentCreamer.value.name}`;
    }
    if (currentSyrup.value.name !== 'No Syrup') {
      description += ` and ${currentSyrup.value.name} syrup`;
    }
    return description;
  });

  // Actions
  function setTemperature(temp: string) {
    currentTemp.value = temp;
  }

  function setBase(base: BaseBeverageType) {
    currentBase.value = base;
  }

  function setCreamer(creamer: CreamerType) {
    currentCreamer.value = creamer;
  }

  function setSyrup(syrup: SyrupType) {
    currentSyrup.value = syrup;
  }

  function saveCurrentRecipe(recipeName: string) {
    const newRecipe: BeverageRecipe = {
      id: `recipe-${Date.now()}`,
      name: recipeName || currentBeverageDescription.value,
      temperature: currentTemp.value,
      base: { ...currentBase.value },
      creamer: { ...currentCreamer.value },
      syrup: { ...currentSyrup.value },
      createdAt: new Date()
    };
    savedRecipes.value.push(newRecipe);
    return newRecipe;
  }

  function loadRecipe(recipeId: string) {
    const recipe = savedRecipes.value.find(r => r.id === recipeId);
    if (recipe) {
      currentTemp.value = recipe.temperature;
      currentBase.value = recipe.base;
      currentCreamer.value = recipe.creamer;
      currentSyrup.value = recipe.syrup;
      return true;
    }
    return false;
  }

  function deleteRecipe(recipeId: string) {
    const index = savedRecipes.value.findIndex(r => r.id === recipeId);
    if (index !== -1) {
      savedRecipes.value.splice(index, 1);
      return true;
    }
    return false;
  }

  function clearAllRecipes() {
    savedRecipes.value = [];
  }

  function resetCurrentSelection() {
    currentTemp.value = temperatures.value[0];
    currentBase.value = baseBeverages.value[2];
    currentCreamer.value = creamerOptions.value[0];
    currentSyrup.value = syrupOptions.value[0];
  }

  return {
    // State
    temperatures,
    baseBeverages,
    creamerOptions,
    syrupOptions,
    currentTemp,
    currentBase,
    currentCreamer,
    currentSyrup,
    savedRecipes,
    
    // Computed
    currentBeverageDescription,
    
    // Actions
    setTemperature,
    setBase,
    setCreamer,
    setSyrup,
    saveCurrentRecipe,
    loadRecipe,
    deleteRecipe,
    clearAllRecipes,
    resetCurrentSelection
  };
});