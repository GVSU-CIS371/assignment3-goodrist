<template>
  <div 
    class="syrup" 
    :style="{ backgroundColor: currentSyrup.color }"
    :class="{ 'no-syrup': currentSyrup.name === 'No Syrup' }"
  ></div>
</template>

<script setup lang="ts">
import { currentSyrup } from "../stores/beverage";
</script>

<style lang="scss" scoped>
.syrup {
  width: 100%;
  flex: 1;
  min-height: 20px;
  transition: background-color 0.3s ease;
  
  &.no-syrup {
    display: none;
  }
}
</style>