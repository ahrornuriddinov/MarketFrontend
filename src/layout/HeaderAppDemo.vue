<script>
export default {
  name: "HeaderAppDemo",
  data(){
      return{
        userName: this.$store.getters.account.email

      }
    },
  computed:{
    authenticated(){
      return this.$store.getters.authenticated;
    }
  },
  methods:{
    login(){
      this.$router.replace("/login")
    },logout(){
      console.log(this.$store.getters.account.email)

      localStorage.getItem("market-token")
      sessionStorage.getItem("market-token")
      this.$store.commit("logout")
      this.$router.replace("/login")

    }
  }
}
</script>

<template>
<div>
  <el-dropdown>
    <i class="el-icon-setting" style="margin-right: 15px"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>View</el-dropdown-item>
      <el-dropdown-item v-if="!authenticated"><span @click="login">Kirish</span></el-dropdown-item>
      <el-dropdown-item v-else-if="authenticated"><span @click="logout">Chiqish</span></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  <span>{{userName}}</span>

</div>
</template>

<style scoped>

</style>