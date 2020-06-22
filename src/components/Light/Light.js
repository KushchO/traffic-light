import {mapActions, mapState, mapGetters} from 'vuex';

export default {
  name: "Light",
  props: {
    light: {
      type: String,
      required: true
    }
  },
  computed:{
    ...mapState(['isLightOn', 'currentColor']),
    ...mapGetters(['getTimer']),
  },
  
}