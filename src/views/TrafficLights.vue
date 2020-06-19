<template>
  <div>
    <ul class="traffic-lights__links">
      <router-link to="/">Старт</router-link>
      <router-link to="/green">Зеленый</router-link>
      <router-link to="/yellow">Желтый</router-link>
      <router-link to="/red">Красный</router-link>
    </ul>
    <div class="traffic-lights">
      <div class="traffic-lights__item">
        <span v-if="light && light === 'green'" class="traffic-lights__timer">
          {{getTimer}}
        </span>
        <svg class="traffic-lights__light traffic-lights__light--green"  x="0px" y="0px"
          viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;"
          :class="[{'traffic-lights__light--active' : (light && light === 'green' && isLightOn)}, {'traffic-lights__light--active' : !light }]"          
          >          
        <circle class="st0" cx="15" cy="15.1" r="15.1"/>
        </svg>
      </div>
      <div class="traffic-lights__item">
        <span v-if="light && light === 'yellow'" class="traffic-lights__timer">
          {{getTimer}}
        </span>
        <svg class="traffic-lights__light traffic-lights__light--yellow"  x="0px" y="0px"
          viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;"
          :class="[{'traffic-lights__light--active' : (light && light === 'yellow' && isLightOn)}, {'traffic-lights__light--active' : !light }]">      
        <circle class="st0" cx="15" cy="15.1" r="15.1"/>
        </svg>
      </div>
      <div class="traffic-lights__item">
        <span v-if="light && light === 'red'" class="traffic-lights__timer">
          {{getTimer}}
        </span>
        <svg class="traffic-lights__light traffic-lights__light--red"  x="0px" y="0px"
          viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;"
          :class="[{'traffic-lights__light--active' : (light && light === 'red' && isLightOn)}, {'traffic-lights__light--active' : !light }]">      
        <circle class="st0" cx="15" cy="15.1" r="15.1"/>
        </svg>
      </div>     
    </div>
  </div>
</template>

<script src="./TrafficLights.js"></script>

<style  lang="scss">
  @import "./TrafficLights.scss";
</style>
