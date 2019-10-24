<template>
    <div class="main-content">
       <Head ></Head> 
       <p class="title">填写订单</p>
       <div class="bg-address">
<div class="address">
    <div class="address-default">
        <span class="sp1">默认</span>
        <span class="sp2">湖北省武汉市江汉区</span>
    </div>
    <div class="address-d">
        <p class="address-detail">湖北省武汉市江汉区世纪中心508</p>
        <span class="more">></span>
    </div>
    <span class="username">小橙子</span>
    <span class="usertel">18834568888</span>
</div>
 </div>
     <div class="bg-content">
         <div class="content">
             <div class="goods-desc">
                      <img src="" alt="">
                     <div class="goods-right">
                         <p class="goods-name">Apple Iphone x11(A2322) 128Gb 黑色 移动联通电信4G手机 双卡双待</p>
                         <div class="goods-model">
                            <span>{颜色：黑色} </span>
                            <span>{规格：256GB}</span>
                            
                         </div>
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">9.99</span> 
                         </p>
                         <p class="goods-number">×200</p>
                         </div>
                     </div>
             </div>
             <div class="carrier">
                 <span class="carrier-p">运费</span>
                 <span class="carrier-arrive">到付</span>
             </div>
              <div class="daoqimd">
                 <span class="carrier-p">到期买断金额</span>
                 <span class="carrier-arrive">￥{19.00}</span>
             </div>
              <div class="yunxian">
                 <span class="carrier-p">运险费</span>
                 <span class="carrier-arrive">￥10.00</span>
             </div>
              <div class="liuyan">
                 <span class="carrier-p">订单留言</span>
                <input type="text" class="dd-liuyan" placeholder="选填，建议请先和商家协商一致"> 
             </div>
             <div class="total">
                  <span class="total-number">共200件 </span>
                  <span class="xiaoji"> 小计：<span 
                  :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">999.00</span> </span>
             </div>
         </div>
     </div>
       <div class="bg-foot"> 
            <div class="foot">
                 <span class="heji"> 合计：<span 
                  :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">999.00</span> </span>
                  <button class="submit" @click="submit">提交订单</button>
            </div>
       </div>
       <div class="pay">
       <div class="bg-paycontent">
          <div class="pay-content">
             <div class="pay-top">
                <span class="close" @click="close">×</span>
                <span class="payfor">确认付款</span>
             </div>
             <p class="paynum" >￥<span :style="{'font-size':'0.38rem'}">
                 999.<span :style="{'font-size':'0.22rem'}">00</span> </span> </p>
                 <div class="zifubao">
                      <img src="" alt="">
                      <span class="zfb-text">支付宝支付</span>
                      <p class="zfb-check"></p>
                 </div>
                   <div class="weixin">
                       <img src="" alt="">
                      <span class="wx-text">微信支付</span>
                      <p class="wx-check"></p>
                 </div>
                 <button class="pay-sure" @click="paySure">确认支付</button>
          </div>
       </div>
    </div>
    </div>
</template>



<script>
//  console.log( sessionStorage.goodId)
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
export default {
    data(){
        return{
            chosenAddressId: '1',
           count: sessionStorage.count,
            good:{},
            dizhi:[],
   
        }
    },
   components:{
       Head,
   },
     methods: {
         ...mapMutations(['changeSearch']),
         submit(){
 document.getElementsByClassName('pay')[0].style.display="block";
         },
         close(){
    document.getElementsByClassName('pay')[0].style.display="none";
    this.$router.push({name:"waitforpay"})
         },
         paySure(){
        document.getElementsByClassName('pay')[0].style.display="none";
        this.$router.push({name:"paysuccess"})
         },
         onEdit(){
        //   addaddress
          this.$router.push({name:"addressedit"})
              },
        onSubmit(){
            var username=sessionStorage.username;
            var goodId=this.good.goodId
           if(goodId){
        this.$axios.post('/vue/delete',{
          username,
          goodId,
        }).then(res=>{
      
        })
           }
               
              },
         deladdres(){
             var target=event.target;
             console.log(target.parentElement.parentElement)
            var ele=target.parentElement.parentElement
               var id=event.target.getAttribute('id')
              this.$axios.post('/vue/deladdress',{
                    id,
            }).then(res=>{
           ele.remove()
           })
              },
        onAdd(){
          this.$router.push({name:"addaddress"})
        }
     },
     computed: {
         ...mapState(['searchShow']),
        
     },
     mounted() {
         this.changeSearch(false);
         
        //  this.$axios.post('/vue/getaddress',{
        //      username:sessionStorage.username
        //  }).then(res=>{
        //     this.dizhi=res.data.result;
        //     // console.log(this.dizhi[0])
        //  })

        //  this.$axios.post("/vue/jiesuanshangping",{
        //      username:sessionStorage.username,
        //      goodId:sessionStorage.goodId,
        //  }).then(res=>{
            
        //      this.good=res.data.result;
        //      console.log( this.good)
        //     if(!res.data.result){
        //         this.$axios.post("/vue/jiesuanshangping1",{
        //      username:sessionStorage.username,
        //      goodId:sessionStorage.goodId,
        //  }).then(res=>{
        //      this.good=res.data.result     
        //  })
        //     }
            
        //  })
     },
}
</script>
<style scoped lang="scss">
 .title{
  float: right;
  height: 0.2rem;
  width: 0.8rem;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
  position: absolute;
  top: 0.18rem;
  left: 0.5rem;
 }
 .main-content{
   background: #F5F6FA;
   width: 100%;
   height: 100%;

 }
  .address{
      width: 3.43rem;
      margin: auto;
      background: white;
      overflow: hidden;
      margin-top: 0.20rem;
  }
  .bg-address{
      width: 100%;
      height: 1.19rem;
     background: white;
     overflow: hidden;
  }
  .address-default .sp1{
      border-radius: 0.03rem;
      background: #D0E7FF;
      color: #1988FF;
      font-size: 0.12rem;
      padding: 0.03rem 0.06rem;
  }
  .address-default .sp2{
      font-size: 0.13rem;
      color: #2F3031;
      margin-left: 0.1rem;
  }
  .address-d{
      height: 0.35rem;
  }
  .address .address-detail{
      font-size: 0.16rem;
      font-weight: bold;
      margin-top: 0.11rem;
      float: left;
      width: 2.8rem;
  }

  .address .more{
      float: right;
      margin-top: 0.11rem;
  }
  .address .username{
      display: block;
      width: 0.5rem;
      margin-top: 0.11rem;
      font-size: 0.12rem;
      color: #2F3031;
      float: left;
  }
   .address .usertel{
        display: block;
      margin-top: 0.11rem;
      font-size: 0.12rem;
      color: #2F3031;
    float: left;
   }
   .bg-content{
       height: 3.96rem;
       width: 100%;
       background: white;
       margin-top: 0.12rem;
       border-radius: 0.2rem;
       overflow: hidden;
   }
   .content{
       width: 3.43rem;
       height: 3.96rem;
       margin: auto;
       overflow: hidden;
   }
   .content .goods-desc{
       width: 100%;
       height: 0.9rem;
       margin-top: 0.24rem;
   }
   .content .goods-desc img{
       width: 0.63rem;
       height: 0.88rem;
       border: 1px solid;
       float: left;
   }
   .content .goods-desc .goods-right{
       width: 2.51rem;
       height: 0.9rem;
       float: right;
       margin-left: 0.13rem;
   }
   .content .goods-desc .goods-name{
       font-size: 0.14rem;
       font-weight: bold;
       line-height: 0.23rem;
       margin-top: -0.04rem;
   }
   .content .goods-desc .goods-model span{
       font-size: 0.12rem;
       color: #C7C7C7;
       margin-left: 0.3rem;
   }
   .content .goods-desc .goods-model span:first-child{
          margin-left: 0;
   }
    .content .goods-desc .goods-right .goods-price{
        font-size: 0.13rem;
        font-weight: bold;
        color: #B3381D;
        margin-top: 0.06rem;
        float: left;
    }
     .content .goods-desc .goods-right .goods-number{
            float: right;
            margin-top: 0.14rem;
            color: #C7C7C7;
            font-size: 0.12rem;
     }
     .carrier{
         margin-top: 0.46rem;
          height: 0.15rem;
     }
      .carrier-p{
         font-size: 0.13rem;
         font-weight: bold;
         float: left;
         line-height: 0.15rem;
     }
      .carrier-arrive{
         font-size: 0.12rem;
         color: #2F3031;
         float: right; 
         line-height: 0.15rem;
     }
     .daoqimd , .yunxian , .liuyan{
          margin-top: 0.3rem;
          height: 0.26rem;
     }
    .liuyan .dd-liuyan{
         outline: none;
         border: none;
         float: left;
         margin-left: 0.2rem;
         font-size: 0.14rem;
         color: black;
          margin-top: -0.02rem;
    }
    .dd-liuyan::-webkit-input-placeholder {
    color: #C7C7C7;
    font-size: 0.12rem;
    }
    .total{
        margin-top:  0.16rem;
    }
    .total .total-number{
        margin-left: 1.72rem;
        color: #C7C7C7;
        font-size: 0.12rem;
    }
    .total .xiaoji{
        margin-left: 0.14rem;
        font-size: 0.13rem;
        font-weight: bold;
    }
    .bg-foot{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.5rem;
        background: white;
        line-height: 0.5rem;
    }
    .foot{
        width: 3.43rem;
        margin: auto;
    }
    .foot .heji{
        margin-left: 0.05rem;
        font-size: 0.14rem;
        font-weight: bold;
        float: left;
    }
    .foot .submit{
        border: none;
        outline: none;
        float: right;
        width: 1.35rem;
        height: 0.4rem;
        margin-top: 0.05rem;
        border-radius: 0.2rem;
        line-height: 0.4rem;
         background: -webkit-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: -o-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: -moz-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: linear-gradient(to left, #007BFF, #3FE699) !important;
    }
    .pay{
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
  max-width: 3.75rem;
//   background-color: hsla(0, 0%, 80%, 0.39);
 background:rgba(0,0,0,0.6);;

  .bg-paycontent{
      opacity: 1 !important;
    width: 100%;
    height: 68%;
    background: white;
    position: relative;
    top: 32%;
    border-radius: 0.2rem 0.2rem 0 0;
    .pay-content{
      width: 3.43rem;
      margin: auto;
      height: auto;
      overflow: hidden;
      .pay-top{
          width: 100%;
          height: auto;
          margin-top: 0.15rem;
      .close{
      font-size: 0.2rem;
      font-weight: bold;
      }
      .payfor{
      font-size: 0.17rem;
      font-weight: bold;
      text-align: center;
      margin-left: 1.2rem;
      }
      }
      .paynum{
          width: 1.51rem;
          margin: auto;
          margin-top: 0.7rem;
          font-size: 0.22rem;
          font-weight: bold;
      }
      .zifubao{
          width: 100%;
          height: 0.3rem;
          line-height: 0.3rem;
          margin-top: 0.3rem;
          img{
              width: 0.3rem;
              height: 0.3rem;
              background: gray;
              border-radius: 50%;
              float: left;
              
          }
          .zfb-text{
                  margin-left: 0.12rem;
              }
          .zfb-check{
              width: 0.15rem;
              height: 0.15rem;
              border: 1px solid grey;
              border-radius: 50%;
              float: right;
              margin-top: 0.07rem;
          }
      }
      .weixin{
          width: 100%;
          height: 0.3rem;
          line-height: 0.3rem;
          margin-top: 0.3rem;
          img{
              width: 0.3rem;
              height: 0.3rem;
              background: gray;
              border-radius: 50%;
              float: left;
              
          }
          .wx-text{
                  margin-left: 0.12rem;
              }
          .wx-check{
              width: 0.15rem;
              height: 0.15rem;
            //   border: 1px solid grey;
             background: #017CFF;
              border-radius: 50%;
              float: right;
              margin-top: 0.07rem;
          }
      }
    .pay-sure{
        width: 3.43rem;
        height: 0.44rem;
        border-radius: 0.22rem;
        outline: none;
        border: none;
        position: absolute;
        bottom: 0.36rem;
        color: white;
        background: -webkit-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: -o-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: -moz-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: linear-gradient(to left, #007BFF, #3FE699) !important;
    }
    }
  }
}
</style>