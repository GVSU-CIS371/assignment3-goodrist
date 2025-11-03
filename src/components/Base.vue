<template>
  <div class="base" :style="{ backgroundColor: store.currentBase.color }"></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";

const store = useBeverageStore();
</script>

<style lang="scss" scoped>
.base {
  width: 100%;
  flex: 4;
  min-height: 60px;
  transition: background-color 0.3s ease;
}
</style>