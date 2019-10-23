<template>
    <div class="main-content">
       <Head ></Head> 
       <p class="title">填写订单</p>
       <div class="bg-address">
<div class="address">
    <div class="address-default">
        <span>默认</span>
        <span>湖北省武汉市江汉区</span>
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
<style scoped >
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

 }
  .address{
      width: 3.43rem;
      margin: auto;
      background: white;
  }
  .bg-address{
      width: 100%;
     background: white;
  }
</style>