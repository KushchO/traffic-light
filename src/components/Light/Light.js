import {mapActions, mapState, mapGetters} from 'vuex';

export default {
  name: "Light",
  props: {
    light: {
      type: String,
      requrid: true
    }
  },
  computed:{
    ...mapState(['isLightOn', 'currentColor']),
    ...mapGetters(['getTimer']),
  },
  
}