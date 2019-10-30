<template>
    <div class="postal">
         <Head ></Head> 
       <p class="title">包邮卷</p>
       <div class="deliveryPostal">

       </div>
      
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
            
        }
    },
    components:{
     Head,
    },
   computed: {
       ...mapState(['searchShow']),
   },
    mounted() {
        this.changeSearch(false);
    },
    methods: {
        ...mapMutations(['changeSearch']),
    },
}
</script>

<style  scoped>
   .title{
  float: right;
  height: 0.2rem;
  width: 0.8rem;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
  position: absolute;
  top: 0.18rem;
  left: 0.6rem;
  }
  .deliveryPostal{
    width: 3rem;
    height: 1rem;
    background: -webkit-linear-gradient(to left, #FEA1A5, #FF6D74) !important;
    background: -o-linear-gradient(to left, #FEA1A5, #FF6D74) !important;
    background: -moz-linear-gradient(to left, #FEA1A5, #FF6D74) !important;
    background: linear-gradient(to left, #FEA1A5, #FF6D74) !important;
    margin: auto;
    margin-top: 0.22rem;

  }
  .deliveryPostal:first-child{
    margin-top: 0.5rem;
  }
</style>