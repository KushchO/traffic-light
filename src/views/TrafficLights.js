
import {mapActions, mapState, mapGetters} from 'vuex';
import Light from '../components/Light/Light.vue'

export default {
  name: "TrafficLights",
  components: { Light },
  props: {
    light: {    
      type: String, 
      default: false,
      required: true
    }
    
  },
  data(){
    return {
      lights: ['green', 'yellow', 'red']
    }
  },
  watch: {
    done: function(){         
      if(this.done) {
        this.$router.push(this.next)
      }
    },
    light: function(){
      if(this.light){
        this.initTimer(this.light);
        return;
      }
      this.clearMyInterval();
      this.resetCurrentColor();
    }
  },
  computed:{
    ...mapState(['isLightOn', 'done', 'next']),
    ...mapGetters(['getTimer']),
  },
  methods: {
    ...mapActions(['initTimer', 'clearMyInterval', 'resetCurrentColor'])
  },
  mounted(){    
    if(this.light){
      this.initTimer(this.light);
    }    
  }
}