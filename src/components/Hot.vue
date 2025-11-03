<template>
  <div class="steam-container">
    <div class="steam steam1"></div>
    <div class="steam steam2"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.steam-container {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 60px;
  z-index: 10;
}

.steam {
  position: absolute;
  width: 8px;
  height: 50px;
  background: rgba(139, 98, 66, 0.4);
  border-radius: 50%;
  animation: rise 3s ease-in-out infinite;
}

.steam1 {
  left: 30%;
  animation-delay: 0s;
}

.steam2 {
  left: 60%;
  animation-delay: 1.5s;
}

@keyframes rise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-40px) scale(0.8);
    opacity: 0;
  }
}
</style>