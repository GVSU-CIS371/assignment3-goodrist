<template>
  <div>
    <div class="flake"></div>
    <div class="flake"></div>
    <div class="flake"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@mixin risingSteam($dist, $duration, $delay) {
  animation: move-and-fade $duration linear infinite;
  animation-delay: $delay;

  @keyframes move-and-fade {
    0% {
      opacity: 0;
      transform: translateY(0);
    }

    50% {
      opacity: 0.5;
    }

    75% {
      opacity: 0;
    }

    100% {
      transform: translateY(-$dist);
      opacity: 0;
    }
  }
}

.flake {
  position: absolute;
  margin-top: -55px;
  margin-left: 125px;
  opacity: 0;
  @include risingSteam(15px, 2.5s, 0.4s);

  &:before {
    content: "*";
    position: absolute;
    color: white;
    height: 80px;
    width: 80px;
    margin-top: 0px;
    font-size: 70px;
  }

  &:first-child {
    margin-left: 90px;
    margin-top: -70px;
    @include risingSteam(10px, 2.5s, 0.2s);
  }

  &:last-child {
    margin-left: 50px;
    margin-top: -45px;
    @include risingSteam(20px, 2.5s, 0s);
  }
}
</style>