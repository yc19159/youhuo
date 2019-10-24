<template>
  <div >
    <Head title="个人中心" :show="true"></Head>
     <div v-if="isLogin">
           <Uploadavatar :username="isLogin"/>
            <!-- <h2>username =={{isLogin}}</h2> -->
            <Minebody></Minebody>
           <van-button @click="leave" type="danger" >退出登陆</van-button> 
           <p class="username">{{username}}</p>  
       </div>
       <div v-else>
           <Uploadavatar :username="isLogin"/>
            <Minebody></Minebody>
            <van-button @click="gotoLogin" type="primary">立即登录</van-button>
            <p class="username">您未登录</p> 
       </div>
       <Foot/>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";
import Foot from "@/components/Foot.vue"
export default {
    data(){
        return{
            isLogin:false,
            username:"",
        }
    },
    components:{
     Foot,
    },
    methods: {
        ...mapMutations(['changeSearch']),
        gotoLogin(){
            this.$router.push({name:'login'})
        },
        leave(){
            sessionStorage.removeItem('username') 
            this.isLogin=false
        } 
    },
      computed: {
          ...mapState(['searchShow'])
        // leave(){
        //     sessionStorage.removeItem('username') 
        //     this.isLogin=false
        // } 
    },
    mounted() {
         this.changeSearch(false)
        var username=sessionStorage.username;
        if(username){
            this.isLogin=true;
            this.username=username
        };
         
    },
  
}

</script>

<style scoped>
.span1{
    margin-left: 0.1rem;
    line-height: 0.5rem;
}
.van-button {
  left: 42%;
}
.username{
    position: absolute;
    top: 1.4rem;
    left: 28%;
    color: red;
    font-size: 0.4rem;
}
</style>