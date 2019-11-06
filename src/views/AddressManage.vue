<template>
    <div class="bg-addressManage">
        <Head ></Head> 
       <p class="title">选择收货地址</p>
       <div class="addressManage">
             <div class="address" v-for="(item, i) in list" :key="i">
                 <div class="address-default">
                   <span class="username">{{item.name}}</span> 
                   <span class="usertel">{{item.tel}}</span>
                </div>
     <div class="address-d" >
        <p class="address-detail">{{item.address+item.addressDetail}}</p>
    </div>

    <button class="edit" @click="gotoAddaddress">编辑</button>

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
            list:[],
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
        this.$axios.post("http://192.168.0.18:8080/wx/address/list").then(res=>{
            console.log(res.data.data.list)
            this.list=res.data.data.list;
        })
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