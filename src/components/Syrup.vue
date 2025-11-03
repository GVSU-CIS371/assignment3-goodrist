<template>
  <div v-if="store.currentCreamer.name !== 'No Cream'" class="froth" :style="{ backgroundColor: store.currentCreamer.color }">
    <div v-for="n in 5" :key="n" class="foam" :style="{ backgroundColor: getFoamColor() }"></div>
  </div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";

const store = useBeverageStore();

const getFoamColor = () => {
  // Make foam bubbles slightly lighter/whiter than the base creamer color
  if (store.currentCreamer.name === 'Milk') return '#F0F8FF';
  if (store.currentCreamer.name === 'Cream') return '#FFFEF0';
  if (store.currentCreamer.name === 'Half & Half') return '#FFFFF0';
  return '#e4e0d2';
};
</script>

<style lang="scss" scoped>
.froth {
  overflow: visible;
  position: relative;
  flex: 1;
  min-height: 40px;
  width: 100%;
  z-index: 10;
}

.foam {
  display: block;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  position: absolute;
  opacity: 0.95;
  top: 0px;
}

.foam:nth-child(1) {
  top: -3px;
  left: 5px;
  width: 38px;
  height: 38px;
}

.foam:nth-child(2) {
  top: -1px;
  left: 35px;
  width: 32px;
  height: 32px;
}

.foam:nth-child(3) {
  width: 36px;
  height: 36px;
  top: -2px;
  left: 60px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  top: 0px;
  right: 35px;
}

.foam:nth-child(5) {
  top: -3px;
  right: 8px;
  width: 37px;
  height: 37px;
}
</style>