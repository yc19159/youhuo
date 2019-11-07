<template>
    <div class="bg-addressManage">
        <Head ></Head> 
       <p class="title">选择收货地址</p>
       <div class="addressManage">
<<<<<<< HEAD
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
           
=======
           <v-touch v-on:swipeleft="swiperleft(i)" v-on:swiperight="swiperright(i)" v-for="(item, i) in list" :key="i"  class="wrapper">
             <div class="address"  ref="address">
                 <div class="address-default">
                   <span class="username">{{item.name}}12</span> 
                   <span class="usertel">{{item.tel}}12</span>
                </div>
     <div class="address-d" >
        <p class="address-detail">12{{item.address+item.addressDetail}}</p>
    </div>

    <button class="edit" @click="gotoAddaddress">编辑</button>
      <div id="delete" ref="delete" >删除</div>
             </div>
             </v-touch>
>>>>>>> 6b47cbf7425fefb18d70ee18b44b460a9a0c2177
             
       </div>
        
    </div>
</template>

<script>

import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
<<<<<<< HEAD
            addressList:[
                {name:'小橙子',phone:'18834568888',address:'请编辑地址请编辑地址'},
                {name:'小橙子2',phone:'18834568888',address:'请编辑地址请编辑地址'},
                {name:'小橙子3',phone:'18834568888',address:'请编辑地址请编辑地址'},
            ]
=======
           list:[
                {name:'小橙子',tel:'18834568888',address:'请编辑地址请编辑地址'},
                {name:'小橙子2',tel:'18834568888',address:'请编辑地址请编辑地址'},
                {name:'小橙子3',tel:'18834568888',address:'请编辑地址请编辑地址'},
            ],
>>>>>>> 6b47cbf7425fefb18d70ee18b44b460a9a0c2177
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
        // this.$axios.post("http://192.168.0.18:8080/wx/address/list").then(res=>{
        //     console.log(res.data.data.list)
        //     this.list=res.data.data.list;
        // })
    },
    methods: {
        ...mapMutations(['changeSearch']),
        swiperleft(index){
            this.$refs.delete[index].style.left="3.03rem"
            console.log(this.$refs.delete[0].offsetLeft)
           console.log(1)
        },
        swiperright(index){
        this.$refs.delete[index].style.left="3.75rem"
        },
        gotoAddaddress(){
            this.$router.push({name:"addaddress"})
        }
    },
}
</script>

<style  scoped>
#delete{
    position: absolute;
    left: 3.75rem;
    top: 0;
    background: skyblue;
    transition: 1s;
    width: 0.55rem;
    height: 0.5rem;
    border-radius: 0.03rem;
    color: white;
    line-height: 0.5rem;
    text-align: center;
}
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
    /* overflow: hidden; */
    margin-top: 0.3rem;
    position: relative;
    transition: 1s;
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
     /* margin-top: 0.1rem; */
     float: left;
     font-size: 0.14rem;
     color: #5E6165;
     height: 0.28rem;
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
    padding-top:0.1rem; 
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