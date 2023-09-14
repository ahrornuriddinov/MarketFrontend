<script>
import axios from "axios";
export default {
  name: "MarketBaseDemo",
  data() {
    return {
      tableData: [],
      marketBaseList:[],
      marketBase:{
        quantity:null,
        price:null,
        current_price:null,
        product: {
          id:null,
          name:null,
          code:null
        }
      },
      productcode:null,
      hasProduct:false,

      product:null
    }
  },
  methods:{
    getProduct(){
      axios
          .get(`api/product/code?code=${this.productcode}`)
          .then(res=>{
            if (res.data !=null && res.data!=undefined && res.data!='' && this.tableData.length==0){
                this.hasProduct=true;
                this.product=res.data
                this.marketBase.product=res.data;
            console.log(res)}
          })
    },onEnter(){
      console.log("onEnter")
      this.getProduct();
    },
    addMarketBase(){
      this.marketBaseList.push(this.marketBase)
      this.marketBase={}
      this.product={}
      this.hasProduct=false
      this.productcode=null
    },
    saveDatas(){
      axios
          .post("api/market-base/list",this.marketBaseList)
          .then(res=>{
            console.log(res)
            this.marketBaseList=[]
          })
    }
  }
}
</script>

<template>
<div>
  <h1>Market-Base</h1>
  <el-row>
    <el-col :span="12">
      <span style="left: 5px"><h2>Register</h2></span>
      <el-input
          size="mini"
          style="margin-bottom: 28px;margin-top: 2%"
          v-model="productcode"
          @keyup.enter.native="onEnter"
          placeholder="Product-Code">
        Product-code</el-input>
      <span v-if="hasProduct">
          <el-col :span="5">{{product.code}}</el-col>
          <el-col :span="4" style="border-left: 1px solid black">{{product.name}}</el-col>
          <el-col :span="5" style="border-left: 1px solid black"><el-input
          size="mini"
          style="width: 110px"
          v-model="marketBase.quantity"
          placeholder="Quantity">

          </el-input></el-col>
          <el-col :span="5" style="border-left: 1px solid black"><el-input
              size="mini"
              style="width: 110px"
              v-model="marketBase.price"
          placeholder="Last Price">

          </el-input></el-col>
          <el-col :span="5" style="border-left: 1px solid black"><el-input
              size="mini"
              style="width: 110px"
              v-model="marketBase.current_price"
              @keyup.enter.native="addMarketBase"
              placeholder="Current Price">

          </el-input></el-col>
      </span>

    </el-col>
    <el-col :span="12" style="border-left: 1px dashed black">
      <span><h2>Products</h2></span>
      <el-button type="success" round style="margin-left: 500px;margin-bottom: 20px" @click="saveDatas">Save all</el-button>
      <el-table
          :data="marketBaseList"
          border
          style="width: 100%">
        <el-table-column
            prop="product.code"
            label="Product-Code"
            width="160">
        </el-table-column>
        <el-table-column
            prop="product.name"
            label="Product-Name"
            width="160">
        </el-table-column>
        <el-table-column
            prop="quantity"
            label="Product-Quantity"
            width="160">
        </el-table-column>
        <el-table-column
            prop="price"
            label="Product-Last-Price"
            width="160">
        </el-table-column>
        <el-table-column
            prop="current_price"
            label="Product-Current-Price"
            width="160">
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</div>
</template>

<style scoped>

</style>