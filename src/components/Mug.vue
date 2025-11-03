<template>
  <div class="mug-container">
    <div class="mug">
      <slot />
      <div class="handle"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.mug-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mug {
  position: relative;
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, #e8e8e8 0%, #d0d0d0 100%);
  border-radius: 0 0 100px 100px;
  border: 8px solid #c0c0c0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: visible;
}

.handle {
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 80px;
  border: 8px solid #c0c0c0;
  border-left: none;
  border-radius: 0 50px 50px 0;
  background: transparent;
}
</style>