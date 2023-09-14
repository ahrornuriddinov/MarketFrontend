<script>
import axios from "axios";
import AccountServiceApp from "@/account/accountServiceApp";
export default {
  name: "LoginAppPage",
  data(){
    return{
      loginVM:{
      email:null,
      password:null,
      },
      checked:false

    }
  },
  methods:{
    login(){
      axios.post('api/authentication',this.loginVM)
          .then(res =>{
            console.log(res.data.token)
            const token = res.data.token;
            if (!this.checked){
            localStorage.setItem('market-token',token);}
            else {
              sessionStorage.setItem('market-token',token);
            }
            new AccountServiceApp(this.$route,this.$store).retrieveAccount();
            this.$router.replace("/")
          })
    }
  }
}
</script>

<template>
<div style="margin-top: 200px">
  <el-row :gutter="15" style="margin-right: 400px">
    <el-col :span="20" :offset="6" style="margin-top: -50px">
        <el-card shadow="always">
            <el-row :gutter="20">
              <el-col :span="15" :offset="3">
                <div class="grid-content bg-purple">
                  <el-input
                      size="small"
                      v-model="loginVM.email"
                      placeholder="Login">
                  </el-input>
                  <el-input
                      placeholder="Password"
                      v-model="loginVM.password"
                      show-password>

                  </el-input>
                </div>
              </el-col>
            </el-row >
            <el-row :gutter="20" style="margin-top: 5px">
              <el-col :span="12">
                <el-checkbox v-model="checked" >RememberMe</el-checkbox>
              </el-col>
              <el-col :span="12" :offset="8" >
                <el-button type="primary" plain style="margin-right: -100px" @click="login">Primary</el-button>
              </el-col>
            </el-row>
        </el-card>
    </el-col>
  </el-row>
</div>
</template>

<style scoped>

</style>