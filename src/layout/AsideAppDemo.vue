<script>
import AccountServiceApp from "@/account/accountServiceApp";
export default {
  name: "AsideAppDemo",
  data(){
    return{
      hasAnyAuthorityValue:false
    }
  },
  computed:{
    authenticated(){
      return this.$store.getters.authenticated;
    }
  },
  methods:{
    hasAnyAuth(authorities){
      new AccountServiceApp(this.$router,this.$store)
          .hasAnyAuthorityAndAuth(authorities)
          .then(value => {
            this.hasAnyAuthorityValue=value;
          });
      return this.hasAnyAuthorityValue;
    }
  }
}
</script>

<template>
<div>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)" v-if="hasAnyAuth('ADMIN') && authenticated">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Datastore</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" >
            <router-link to="/product">Products</router-link>
          </el-menu-item>
          <el-menu-item index="1-1" >
            <router-link to="/market-base">Register Products</router-link>
          </el-menu-item>
          <el-menu-item index="1-1" >
            <router-link to="/market-base/list">Products in Base</router-link>
          </el-menu-item>
          <el-menu-item index="1-1" >
            <router-link to="/payment-list">Sell Products</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</div>
</template>

<style scoped>

</style>