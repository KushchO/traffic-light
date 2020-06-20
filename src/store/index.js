import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

const SET_COLOR = "SET_COLOR"
const RESET_COLOR = "RESET_COLOR"
const SET_TIMER = "SET_TIMER"
const TOGGLE_LIGHT = "TOGGLE_LIGHT"
const SET_LIGHT_ON = "SET_LIGHT_ON"
const TOGGLE_NEXT = "TOGGLE_NEXT"
const RESET_TIMER = "RESET_TIMER"
const SET_DONE = "SET_DONE"
const RESET_DONE = "RESET_DONE"

console.log(vuexLocal)


export default new Vuex.Store({
  state: {
    colors: {
      green: {
        stop: 15,
        current: null,
        next: 'yellow'
      },
      red: {
        stop: 10,
        current: null,
        next: 'green'
      },
      yellow: {
        stop: 3,
        current: null
      }
    },
    currentColor: null,
    currentTimer: null,    
    isLightOn: true,
    next: null,
    previousMajorColor: null,
    currentTick: localStorage.currentTick,
    done: false,
    timer: null

  },
  mutations: {
    [SET_COLOR]: (state, color) => {
      state.currentColor = color
    },
    [RESET_COLOR]: (state) => {
      state.currentColor = null
    },
    [SET_TIMER]: (state) => {         
      state.currentTick = localStorage.currentTick ? localStorage.currentTick : 0
    },    
    [RESET_TIMER]: (state, color) => {           
    if(color !== state.previousMajorColor) {
      localStorage.currentTick = 0; 
      state.currentTick = 0; 
    }
      clearInterval(state.currentTimer);    
    },
    [SET_LIGHT_ON]: (state) => {     
      state.isLightOn = true;
    },
    [TOGGLE_LIGHT]: (state) => {      
      state.isLightOn = state.isLightOn ? false : true;
    },
    [SET_DONE]: (state) => {
      state.done = true;
    },
    [RESET_DONE]: (state) => {
      state.done = false;
    },
    [TOGGLE_NEXT]: (state, color) => {
      switch(color) {
        case 'green': 
          state.previousMajorColor = 'green';
          state.next = 'yellow';
          break;
        case 'red':
          state.previousMajorColor = 'red';
          state.next = 'yellow';
          break;
        case 'yellow':
          if(state.previousMajorColor === 'green') {            
            state.next = 'red';
            break
          }
          state.next = 'green';
          break;
        case '':
          state.previousMajorColor = null;
          state.next = null;
      }
    },
  },
  actions: {
    clearMyInterval: ({state}) => {
      clearInterval(state.currentTimer);
    }, 
    resetCurrentColor: ({commit}) => {
      commit(RESET_COLOR);
    }, 
    initTimer: ({commit, state}, color) => { 
      console.log('!!!')    
      commit(RESET_TIMER, color);              
      commit(RESET_DONE);      
      commit(SET_LIGHT_ON);
      commit(SET_COLOR, color);      
      commit(SET_TIMER);
      commit(TOGGLE_NEXT, color);            
      state.currentTimer = setInterval(()=>{             
        state.currentTick++;
        localStorage.currentTick = state.currentTick;       
        if(state.currentTick === state.colors[color].stop) {
          commit(SET_DONE);          
        }
        if(state.currentTick >= state.colors[color].stop -3){                 
          commit(TOGGLE_LIGHT);
        }
      }, 1000);
    }
  },
  getters: {
    getTimer: state => {     
      return state.colors[state.currentColor].stop - state.currentTick;
    },
  },
  plugins: [vuexLocal.plugin]
})
