
import {mapActions, mapState, mapGetters} from 'vuex';

export default {
  name: "TrafficLights",  
  props: {
    light: {    
      type: String, 
      default: false,
      requred: true
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
    }
  },
  computed:{
    ...mapState(['isLightOn', 'done', 'next']),
    ...mapGetters(['getTimer']),
  },
  methods: {
    ...mapActions(['initTimer', 'clearMyInterval'])
  },
  mounted(){    
    if(this.light){
      this.initTimer(this.light);
    }    
  }
}