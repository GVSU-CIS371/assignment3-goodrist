<template>
  <div>
    <Beverage :isIced="store.currentTemp === 'Cold'" />
    <ul>
      <!-- Temperature Selection -->
      <li>
        <template v-for="temp in store.temperatures" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="store.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      
      <!-- Base Beverage Selection -->
      <li>
        <template v-for="base in store.baseBeverages" :key="base.id">
          <label>
            <input
              type="radio"
              name="baseBeverage"
              :id="base.id"
              :value="base"
              v-model="store.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      
      <!-- Creamer Selection -->
      <li>
        <template v-for="creamer in store.creamerOptions" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="creamer.id"
              :value="creamer"
              v-model="store.currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      
      <!-- Syrup Selection -->
      <li>
        <template v-for="syrup in store.syrupOptions" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="syrup.id"
              :value="syrup"
              v-model="store.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    
    <!-- Recipe Management Section -->
    <div class="recipe-controls">
      <button @click="handleSaveRecipe">Save Recipe</button>
      <button @click="store.resetCurrentSelection">Reset</button>
    </div>
    
    <!-- Saved Recipes List -->
    <div v-if="store.savedRecipes.length > 0" class="saved-recipes">
      <h3>Saved Recipes</h3>
      <ul>
        <li v-for="recipe in store.savedRecipes" :key="recipe.id">
          <span>{{ recipe.name }}</span>
          <button @click="store.loadRecipe(recipe.id)">Load</button>
          <button @click="store.deleteRecipe(recipe.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const store = useBeverageStore();

function handleSaveRecipe() {
  const recipeName = prompt("Enter a name for this recipe:");
  if (recipeName) {
    store.saveCurrentRecipe(recipeName);
  }
}
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
}

.recipe-controls {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  
  button {
    padding: 10px 20px;
    background-color: #8b6f47;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
      background-color: #6f5535;
    }
  }
}

.saved-recipes {
  margin-top: 30px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  
  h3 {
    color: white;
    margin-bottom: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      margin-bottom: 10px;
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: 5px;
      
      span {
        flex: 1;
        color: white;
      }
      
      button {
        padding: 5px 15px;
        background-color: #8b6f47;
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-size: 12px;
        
        &:hover {
          background-color: #6f5535;
        }
        
        &:last-child {
          background-color: #a0522d;
          
          &:hover {
            background-color: #8b4513;
          }
        }
      }
    }
  }
}
</style>