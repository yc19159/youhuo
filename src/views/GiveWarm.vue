<template>
    <div class="givewarm">
      <div class="top">
          <img src="" alt="" class="weizhi">
          <input type="text" class="search" placeholder="请输入收货地址" v-model="value" @change="getValue">
      </div>
      <div class="tobuy">
          <span class="want">想买点什么...</span>
          <button class="overbooking">去下单</button>
      </div>
      <Foot/>
    </div>
</template>

<script>
import Foot from "@/components/Foot.vue"
export default {
     data(){
        return{
           value:'',
        }
    },
    components:{
    Foot,
    },
    methods: {
        getValue(){
            console.log(this.value)
        }
    },
}
</script>

<style  scoped>
  .givewarm{
      width: 100%;
      height: 100%;
      background: #F5F6FA;
      overflow: hidden;
  }
  .top{
      width: 3.43rem;
      height: 0.4rem;
      margin: auto;
      margin-top: 0.15rem;
      position: relative;
  }
  .top .weizhi{
      position: absolute;
      width: 0.14rem;
      height: 0.16rem;
      background: grey;
      top: 0.13rem;
      left: 0.2rem;
  }
  .top .search{
   width: 100%;
   height: 0.4rem;
   outline: none;
   border: none;
   border-radius: 0.2rem;
   text-indent: 0.45rem;
   background: white;
  }
  .top .search::-webkit-input-placeholder {
    color: #C7C7C7;
    font-size: 0.14rem;
    }
    .tobuy{
       width: 3.43rem;
       height: 0.72rem;
       background: white;
       /* margin: auto; */
       border-radius: 0.2rem;
       position: absolute;
       bottom: 1.2rem;
       left: 0.16rem;
       overflow: hidden;
    }
    .tobuy .want{
    display: block;
    float: left;
     margin-top: 0.25rem;
     color: #5E6165;
     font-size: 0.17rem;
     margin-left: 0.35rem;
     box-sizing: border-box;
    }
    .tobuy .overbooking{
        float: left;
       margin-left: 1.3rem;
       width: 0.75rem;
       height: 0.32rem;
       margin-top: 0.2rem;
       border: none;
       outline: 0;
       border-radius: 0.16rem;
    background: -webkit-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: -o-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: -moz-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: linear-gradient(to left, #3FE699, #007BFF) !important;
    }
</style>