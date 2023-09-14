import HelloWorld from "@/components/HelloWorld.vue";
import LoginAppPage from "@/components/LoginAppPage";
import ProductAppDemo from "@/components/ProductAppDemo.vue";
import MarketBaseDemo from "@/components/MarketBaseDemo.vue";
import MarketBaseList from "@/components/MarketBaseList.vue";
import PaymentListProducts from "@/components/PaymentListProducts.vue";
export default [
    {path:'/',component:HelloWorld},
    {path: '/login',component: LoginAppPage},
    {path: '/product',component: ProductAppDemo},
    {path:'/market-base',component: MarketBaseDemo},
    {path:'/market-base/list',component: MarketBaseList},
    {path:'/payment-list',component: PaymentListProducts}


]