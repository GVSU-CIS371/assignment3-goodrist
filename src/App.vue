<template>
  <div>
    <!-- Drink Display -->
    <Beverage :isIced="store.selectedTemp === 'Cold'" />

    <!-- Drink Name Input -->
    <div>
      <label>Name: </label>
      <input v-model="store.selectedName" placeholder="Enter drink name" />
      <button @click="store.makeBeverage">Make Beverage</button>
    </div>

    <!-- Temperature -->
    <div>
      <h4>Temperature</h4>
      <label v-for="temp in storeTemps" :key="temp">
        <input type="radio" :value="temp" v-model="store.selectedTemp" /> 
        {{ temp }}
      </label>
    </div>

    <!-- Base -->
    <div>
      <h4>Base</h4>
      <label v-for="base in storeBases" :key="base.id">
        <input type="radio" :value="base" v-model="store.selectedBase" /> 
        {{ base.name }}
      </label>
    </div>

    <!-- Creamer -->
    <div>
      <h4>Creamer</h4>
      <label v-for="creamer in storeCreamers" :key="creamer.id">
        <input type="radio" :value="creamer" v-model="store.selectedCreamer" /> 
        {{ creamer.name }}
      </label>
    </div>

    <!-- Syrup -->
    <div>
      <h4>Syrup</h4>
      <label v-for="syrup in storeSyrups" :key="syrup.id">
        <input type="radio" :value="syrup" v-model="store.selectedSyrup" /> 
        {{ syrup.name }}
      </label>
    </div>

    <!-- Saved Beverages -->
    <div id="beverage-container">
      <h3>Saved Beverages</h3>
      <div v-for="bev in store.recipes" :key="bev.name">
        <button @click="store.showBeverage(bev)">
          {{ bev.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const store = useBeverageStore();

// Make arrays from the store so v-for works cleanly
const storeTemps = store.$state.selectedTemp ? ["Hot", "Cold"] : [];
const storeBases = import.meta.glob("./data/bases.ts") ? store.selectedBase ? [] : [] : store.$state.bases || [];
const storeCreamers = store.$state.selectedCreamer ? store.selectedCreamer ? [] : [] : store.$state.creamers || [];
const storeSyrups = store.$state.selectedSyrup ? store.selectedSyrup ? [] : [] : store.$state.syrups || [];
