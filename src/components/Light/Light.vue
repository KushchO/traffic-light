<template>
  <div class="traffic-lights__item">
    <span v-if="light && light === currentColor" class="traffic-lights__timer">
      {{getTimer}}
    </span>
    <svg class="traffic-lights__light"  x="0px" y="0px"
      viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;"
      :class="[{'traffic-lights__light--active' : (light && light === currentColor && isLightOn)}, {'traffic-lights__light--active' : !light }, 'traffic-lights__light--'+light]"          
      >          
    <circle class="st0" cx="15" cy="15.1" r="15.1"/>
    </svg>
  </div>
</template>

<script src="./Light.js"></script>
<style  lang="scss">
  @import "./Light.scss";
</style>