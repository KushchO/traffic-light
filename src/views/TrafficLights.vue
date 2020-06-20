<template>
  <div>
    <ul class="traffic-lights__links">
      <router-link to="/">Старт</router-link>
      <router-link to="/green">Зеленый</router-link>
      <router-link to="/yellow">Желтый</router-link>
      <router-link to="/red">Красный</router-link>
    </ul>
    <div class="traffic-lights">
      <light v-for="(light, index) in lights" :key="index" :light="light"></light>         
    </div>
  </div>
</template>

<script src="./TrafficLights.js"></script>

<style  lang="scss">
  @import "./TrafficLights.scss";
</style>
