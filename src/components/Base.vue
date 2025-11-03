<template>
  <div class="base" :style="{ backgroundColor: currentBase.color }"></div>
</template>

<script setup lang="ts">
import { currentBase } from "../stores/beverage";
</script>

<style lang="scss" scoped>
.base {
  width: 100%;
  height: 100%;
}
</style>