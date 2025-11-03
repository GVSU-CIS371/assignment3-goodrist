<template>
  <div v-if="currentCreamer.name !== 'No Cream'" class="froth" :style="{ backgroundColor: currentCreamer.color }">
    <div v-for="n in 5" :key="n" class="foam" :style="{ backgroundColor: getFoamColor() }"></div>
  </div>
</template>

<script setup lang="ts">
import { currentCreamer } from "../stores/beverage";

const getFoamColor = () => {
  // Make foam bubbles slightly lighter/whiter than the base creamer color
  if (currentCreamer.value.name === 'Milk') return '#F0F8FF';
  if (currentCreamer.value.name === 'Cream') return '#FFFEF0';
  if (currentCreamer.value.name === 'Half & Half') return '#FFFFF0';
  return '#e4e0d2';
};
</script>

<style lang="scss" scoped>
.froth {
  overflow: visible;
  position: relative;
  flex: 1;
  min-height: 35px;
  width: 100%;
}

.foam {
  display: block;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  position: absolute;
  opacity: 0.95;
  top: -5px;
}

.foam:nth-child(1) {
  top: -8px;
  left: 5px;
  width: 38px;
  height: 38px;
}

.foam:nth-child(2) {
  top: -6px;
  left: 35px;
  width: 32px;
  height: 32px;
}

.foam:nth-child(3) {
  width: 36px;
  height: 36px;
  top: -7px;
  left: 60px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  top: -5px;
  right: 35px;
}

.foam:nth-child(5) {
  top: -8px;
  right: 8px;
  width: 37px;
  height: 37px;
}
</style>