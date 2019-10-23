<template>
    <div>
        <Head title="我的购物车" :show="true"></Head>
      
<van-card 
v-for="(myshop,i) in myshops" :key="i"
  
  :price="myshop.goodprice"
  desc="单价"  
  :title="myshop.goodname"
  :thumb="myshop.goodimg"
  :num="'总价：'+myshop.count*myshop.goodprice"
  :thumb-link=" '/#/good/'+myshop.goodId "
>

<div slot="footer">
  
    <!-- <button size="mini" type="info" class="add" @click="dese">-</button>
    <input type="text" class="count" :value="myshop.count"> 
    <button size="mini" type="info" class="desc" @click="dese">+</button><br> -->
    <span>数量：{{myshop.count}}</span><br>
    <van-button size="mini" @click="buynow" :goodId='myshop.goodId' type="warning" class="buy">购买</van-button>
    <van-button size="mini" @click="todoDelete" :goodId='myshop.goodId'  type="danger">删除</van-button>
  </div>
  
 </van-card> 


 </div>
 </template>

<script>
var username=sessionStorage.username
export default {
  data() {
    return {
     myshops:{},
     
    };
  },
  methods: {
    buynow(){
      var target=event.target;
        sessionStorage.goodId=target.getAttribute("goodId");
     
      this.$router.push({name:"jiesuan"})
    },
    
     todoDelete(e){
        var target=event.target
        if(username){
        this.$axios.post('/vue/tododelete',{
          username: username,
          goodId: target.getAttribute("goodId")
        }).then(res=>{
           this.$axios.get("/vue/myshoppingcar",{
         params:{
       username:sessionStorage.username
         }
        }).then(res=>{
        //  console.log(res.data.result)
        this.myshops=res.data.result

     })
        })
       
        }
      }
  },
  computed: {
    
  },
  mounted() {
        // var countInput=document.getElementsByClassName('count')
     this.$axios.get("/vue/myshoppingcar",{
         params:{
       username:sessionStorage.username
         }
        }).then(res=>{
        //  console.log(res.data.result)
        this.myshops=res.data.result

     }) 
  },
}
</script>

<style lang="scss" scoped>
.van-card__content{
    height: 1.7rem;
}
.count{
    width: 0.8rem;
    outline: none;
    border: none;
    margin-left: 0.10rem;
    text-align: center;
}
.desc{
     margin-right: 0.5rem;
}
.add, .desc{
   background:#1989FA;
   border: none;
   outline: none;
}


</style>
