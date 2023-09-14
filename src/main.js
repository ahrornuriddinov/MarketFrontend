import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Router from "@/router";
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as config from './config/configFile'
import AccountServiceApp from "@/account/accountServiceApp";
import store from "@/account/Store";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUi);
config.initVueApp(Vue);

const router=new VueRouter({
  routes:Router
})

router.beforeEach((to,from,next)=>{
  if (!to.matched.length){
    next('/not-found')
  }
  if (to.meta && to.meta.authorities && to.meta.authorities.length>0){
    new AccountServiceApp(router,store).hasAnyAuthorityAndAuth(to.meta.authorities).then(value =>{
      if (!value){
        sessionStorage.setItem("request-url",to.fullPath)
        next("/forbidden")
      }else{
        next();
      }
    })
  }else {
    next();
  }
})

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
