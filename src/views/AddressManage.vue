<template>
    <div class="bg-addressManage">
        <Head ></Head> 
       <p class="title">选择收货地址</p>
       <div class="addressManage">
           <!-- 渲染用户地址 -->
           <!-- 当前页面模拟滑动删除 -->
            <div class="address"
                 v-for="(item,index) in addressList">
                 <div class="address-default">
                   <span class="username">{{item.name}}</span> 
                   <span class="usertel">{{item.phone}}</span>
                 </div>
                <div class="address-d" >
                     <p class="address-detail">{{item.address}}</p>
                </div>

                <button class="edit" @click="gotoAddaddress">编辑</button>
                <button class="delete">删除</button>
            </div>
           
             
       </div>
        
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
            addressList:[
                {name:'小橙子',phone:'18834568888',address:'请编辑地址请编辑地址'},
                {name:'小橙子2',phone:'18834568888',address:'请编辑地址请编辑地址'},
                {name:'小橙子3',phone:'18834568888',address:'请编辑地址请编辑地址'},
            ]
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
        gotoAddaddress(){
            this.$router.push({name:"addaddress"})
        }
    },
}
</script>

<style  scoped>
.title{
  float: right;
  height: 0.2rem;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
  position: absolute;
  top: 0.18rem;
  left: 0.6rem;
 }
 .bg-addressManage{
     width: 100%;
     height: auto;
 }
 .addressManage{
     width: 100%;
     height: auto;
    overflow: hidden;
 }
 .address{
     width: 3.43rem;
     height: auto;
     margin: auto;
    overflow: hidden;
    margin-top: 0.3rem;
 }
 .address-default{
     float: left;
 }
 .address-default .username{
     font-weight: bold; 
 }
 .address-default .usertel{
     font-size: 0.12rem;
     color: #5E6165;
     margin-left: 0.12rem;
 }
 .address .address-d{
     margin-top: 0.1rem;
     float: left;
     font-size: 0.14rem;
     color: #5E6165;
 }
 .address .address-d .address-detail{
     width: 2.64rem;
     line-height: 0.28rem;
 }
 .address .edit{
    border: none;
    outline: none;
    background: white;
    color: #5E6165;
    line-height: 0.28rem;
    font-size: 0.14rem;
 } 
 .address .delete{
    border: none;
    outline: none;
    background: white;
    color: #5E6165;
    line-height: 0.28rem;
    font-size: 0.14rem;
    margin-top: 0.06rem;
 }
</style>