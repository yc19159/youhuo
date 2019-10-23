<template>
  <div class="search">
       <Head></Head>
       <van-tabs v-model="active">
  <van-tab title="价格">
    <div class="price">
      <ul class="glist">
        <li class="glist-item" @click="drawer = true">
          <img src="" class="glist-img"/>
          <p class="phont-type">AAAAA Ipone   X</p>
          <p :style="{color:'#3BAD38','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem',border:'1px solid #25A721','border-radius':'0.02rem',width:'0.32rem',
          'text-align':'center',float:'left','margin-top':'0.05rem'}">全新</p>
              <p :style="{color:'#FB9F00','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem',border:'1px solid #FCAC39','border-radius':'0.02rem',width:'0.44rem',
          'text-align':'center',float:'left','margin-top':'0.05rem'}">免押金</p>
          <p class="glist-price">￥9.99/天</p>
        </li>
         <li class="glist-item"></li>
          <li class="glist-item"></li>
      </ul>
    </div> 
    </van-tab>
  <van-tab title="销量 ">内容 2</van-tab>
  <van-tab title="筛选">内容 3</van-tab>
 
</van-tabs>
<el-drawer
  title=""
  :visible.sync="drawer"
  :direction="direction"
  
  >
  <div class="alert-content">
      <div class="zujin ">
        <span class="strong-t">租金</span>
        <span class="normal-c">(元/天)</span>
        <div class="between-price ">
              <p class="l-price">最低价</p>
              <p class="crossing"></p>
               <p class="m-price">最高价</p>
        </div>
      </div>
       <div class="yajin ">
        <span class="strong-t">押金</span>
        <span class="normal-c">(元/天)</span>
        <div class="between-price ">
              <p class="l-price">最低价</p>
              <p class="crossing"></p>
               <p class="m-price">最高价</p>
        </div>
      </div>
        <div class="days ">
        <span class="strong-t">租用天数</span>
        <span class="normal-c">(元/天)</span>
        <div class="between-price ">
              <p class="small-day">半年</p>
              <p class="middle-day">一年</p>
               <p class="large-day">两年</p>
        </div>
      </div>
  </div>
</el-drawer>
 <!-- <ul>
           <li class="glist-item" v-for="(list,keys) in goods " :key="keys">
                <router-link
            :to="{name:'good',params:{goodId:list.goods_id}}">
        
               <img :src="list.thumb_url" alt="">
               <p>{{list.goods_name}}</p>
               <span class="goods-price">￥<span>{{list.group_price/100}}</span></span>
               <span class="goods-mprice">￥<span>{{list.market_price/100}}</span></span>
                </router-link>
            </li>

           
       </ul> -->
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
export default {
  data(){
    return{
    //  value:'',
    //  goods:[],
     drawer: false,
      direction: 'rtl',
    }
  },
  components:{
  Head,
  },
  methods: {
    ...mapMutations(['changeSearch']),
    onSearch(){
     this.$axios.get('/vue/getGoods',{
       params:{value:this.value}
     }).then(res=>{
      this.goods=res.data.result;
     })
    }
  },
  computed: {
     ...mapState(['searchShow']),
  },
  mounted() {
    this.changeSearch(true);
    document.onclick=function(e){
      var smallDay=document.querySelector('.small-day');
      var middleDay=document.querySelector('.middle-day');
      var largeDay=document.querySelector('.large-day');
      var event=e||event;
      var target=event.targrt||event.srcElement;
      if(target.className==='small-day'){
        target.style.backgroundColor="#C7E8FF";
        target.style.color="#1385FF";
        middleDay.style.backgroundColor="#F5F6FA";
        middleDay.style.color='black';
        largeDay.style.backgroundColor="#F5F6FA";
        largeDay.style.color='black';
      }
       if(target.className==='middle-day'){
        target.style.backgroundColor="#C7E8FF";
        target.style.color="#1385FF";
        smallDay.style.backgroundColor="#F5F6FA";
        smallDay.style.color='black';
        largeDay.style.backgroundColor="#F5F6FA";
        largeDay.style.color='black';
      }
       if(target.className==='large-day'){
        target.style.backgroundColor="#C7E8FF";
        target.style.color="#1385FF";
        middleDay.style.backgroundColor="#F5F6FA";
        middleDay.style.color='black';
        smallDay.style.backgroundColor="#F5F6FA";
        smallDay.style.color='black';
      }
   
    }
  },
}
</script>

<style  scoped>
.van-tabs /deep/ .van-tabs__line {
    position: absolute;
    width: 0.2rem !important;
    bottom: 0.15rem;
    left: 0;
    z-index: 1;
    height: 0.03rem;
    background-color: #f44;
    border-radius: 0.03rem;
    background: -webkit-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: -o-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: -moz-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: linear-gradient(to left, #3FE699, #007BFF) !important;
}
  .price{
    width: 100%;
    background: #F5F6FA;
    border-radius: 0.2rem;
    margin-top: 0.15rem;
  }
  .glist{
    width: 3.43rem;
    margin: auto;
    height: 100%;
  }
  .glist::after, .clear::after{
    content:" .";
    display:block;
    clear:both;
    height:0; 
    overflow:hidden; visibility:hidden; 
  }
  .glist .glist-item{
     width: 1.6rem;
     height: 2.53rem;
     background: white;
     border-radius: 0.16rem;
     float: left;
     margin-top: 0.25rem;
     /* margin-bottom: 0.2rem; */
     overflow: hidden;
  }
  .glist .glist-item:nth-child(2n){
    margin-left: 0.23rem;
  }
  .glist-img{
       border: 1px solid;
       /* display: block; */
       width: 0.9rem;
       height: 1.2rem;
       margin: auto;
        margin-top: 0.22rem;
  }
 .phont-type{
   margin-left: 0.12rem;
   margin-top: 0.25rem;
   font-size: 0.14rem;
   font-family: "PingFangSC-Semibold";
   font-weight: bold;
 }
 .glist-price{
    margin-top: 0.28rem;
    font-size: 0.15rem;
    font-family: 'DIN-Bold';
    color: #B3381D;
    font-weight: bold;
    margin-left: 0.12rem;

 }
 .el-dialog__wrapper /deep/.el-drawer{
   width: 3.05rem !important;
   height: 93%;
   top: 7%;
   border-radius: 0.2rem 0 0 0.2rem;
 }
 .alert-content{
   width: 2.7rem;
   height: 100%;
   margin-top: 0.24rem;
   margin: auto;
 }
 .alert-content .strong-t{
   font-size: 0.13rem;
   font-weight: bold;
   font-family: "PingFangSC-Semibold";
 }
 .normal-c{
   margin-left: 0.05rem;
    font-size: 0.13rem;
    color: grey;
 }
 .between-price{
  margin-top: 0.15rem;
 }  
.l-price{
   float: left;
   width: 1.2rem;
   height: 0.31rem;
   border-radius: 0.155rem;
   text-align: center;
   line-height: 0.31rem;
   background-color: #F5F6FA;
  
 }
 .crossing{
      width: 0.15rem;
      height: 0.02rem;
      float: left;
      background-color: #000000;
      margin-top: 0.145rem;
      margin-left: 0.07rem; 
      /* margin-right: 0.07rem; */ 
 }
 .m-price{
  float: left;
   width: 1.2rem;
   height: 0.31rem;
   border-radius: 0.155rem;
   text-align: center;
   line-height: 0.31rem;
   background-color: #F5F6FA;
     margin-left: 0.07rem;
 }
 .zujin{
   height: 0.6rem;
   width: 2.7rem;
 }
 .yajin{
   margin-top: 0.48rem;
   height: 0.6rem;
   width: 2.7rem;
 }
 .days{
   margin-top: 0.48rem;
   height: 0.6rem;
   width: 2.7rem;
 }
 .small-day, .middle-day, .large-day{
   width:0.78rem;
   height: 0.31rem;
   line-height: 0.31rem;
   background-color: #F5F6FA;
   float: left;
   margin-left: 0.15rem;
   text-align: center;
   border-radius: 1.55rem;
 }
 .small-day{
    margin-left: 0;
 }
</style>
