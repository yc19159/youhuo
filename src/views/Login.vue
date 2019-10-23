<template>
    <div>
        <Head title="登录/注册" :show="true" ></Head>
  <van-tabs v-model="active" class="login-box">
      <!-- <span id="tishi" style="color:red"></span> -->
            <van-tab title="注册">
                <van-cell-group>
                    <van-field
                        v-model="register.username"
                        required
                        clearable
                        label="用户名"
                        class="username"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('请输入2-6位长度的用户名')"
                    />
 <van-field
                        v-model="register.mobile"
                        required
                        clearable
                        type="tel"
                        label="手机号"
                        placeholder="请输入手机号"
                        right-icon="question-o"
                        @click-right-icon="$toast('请输入11位长度的手机号')"
                    />
                    <van-field
                        v-model="register.pwd"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                        right-icon="question-o"
                        @click-right-icon="$toast('请输入6-12位长度的密码')"
                    />
                    <van-field
                        v-model="register.dbpwd"
                        type="password"
                        required
                        clearable
                        label="确认密码"
                        placeholder="请输入确认密码"
                    />
                    <van-button @click="todoRegister" type="primary" size="large">立即注册</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title="登录">
                <van-cell-group>
                    <van-field
                        v-model="login.keys"
                        required
                        clearable
                        label="用户名/手机号"
                        placeholder="请输入用户名/手机号"
                    />
                    <van-field
                        v-model="login.pwd"
                        type="password"
                        label="密码"
                        placeholder="请输入密码"
                        required
                    />
                    <van-button @click="todoLogin" type="danger" size="large">马上登录</van-button>
 </van-cell-group>
      </van-tab>
        </van-tabs>
       
    </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";

export default {
   data(){
       return{
           active:0,
           register:{

           },
           login:{},
    
       }
   },
   computed: {
        ...mapState(['searchShow'])
   },
   mounted() {
       this.changeSearch(false)
   },
   methods: {
       ...mapMutations(['changeSearch']),
       todoLogin(){
           
        //   console.log(this.login)
           this.$axios.post("/vue/login",this.login).then(res=>{
               
            console.log(res.data)
               if(res.data.type){
                   sessionStorage.username=this.login.keys
                   setTimeout(()=>{
                      location.href="http://182.92.4.245/yc";
                    },600); 
               }
         
           })
       },
       todoRegister(){
            var reg=/^[\u4e00-\u9fa50-9a-zA-Z_$]{2,6}$/
             var regtel=/^1[0-9]{10}$/
             var regpwd=/^[0-9a-zA-Z]{6,15}$/
            var tishi=document.querySelector('#tishi')
            var loginInput=document.getElementsByClassName('van-field__control')
            var username=loginInput[0].value;
            var phonenumber=loginInput[1].value;
            var pwd=loginInput[2].value;
            var dbpwd=loginInput[3].value;
            if(reg.test(username)){
              if(regtel.test(phonenumber)){
                   if(regpwd.test(pwd)){

                       if(pwd==dbpwd){
    this.$axios.post("/vue/register",this.register).then(res=>{
               if(res.data.type){
                   this.active=1;
               }else{
                    console.log("注册失败")
               }
                this.register = {};
           })
                       }else{
            //    tishi.innerHTML="请确认两次密码输入一样"
                this.$notify({message:'请确认两次密码输入一样', color: 'black',background: '#FF4444'});
                       }
                   }else{
                // tishi.innerHTML="请输入6-15位密码"
                 this.$notify({message:'请输入6-15位密码', color: 'black',background: '#FF4444'});
                   }
              }else{
                //    tishi.innerHTML="请输入正确的手机号"
                this.$notify({message:'请输入正确的手机号', color: 'black',background: '#FF4444'});
              }
            }else{
            //  tishi.innerHTML="请输入长度为2-6位的用户名"
            this.$notify({message: '请输入长度为2-6位的用户名', color: 'black',background: '#FF4444'});
            }
       
       
       }
   },
  
}
</script>

<style>
#tishi{
   margin-left: 30%;
    text-align: center
}
</style>
