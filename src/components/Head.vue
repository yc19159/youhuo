<template>
    <div class="head">
       <div class="goback" @click="goback">
          
        </div> 
         <van-search placeholder="请输入搜索关键词" @change="onSearch" v-model="value" v-if="searchShow"/>
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
    data() {
        return {
            value:"",
        }
       
    },
     methods: {
           goback(){
                 this.$router.go(-1);
           } ,
           onSearch(){
                console.log(this.value)
           }
        },
        computed: {
     ...mapState(['searchShow']),
  },
}
</script>

<style  scoped>
     .head{
         height: 0.54rem;
         background-color: white;
     }
    .goback{
        width: 0.2rem;
        height: 0.2rem;
        border: 1px solid;
        margin-left: 0.16rem;
        float: left;
         margin-top: 0.16rem;  
    }
     .van-search {
         width: 3rem;
         float: left;
         margin-left: 0.26rem;
     }
    .van-search .van-search__content {

    width: 3rem;
    padding-left: 8px;
    background-color: #f7f8fa;
    border-radius: 0.16rem;
}
</style>