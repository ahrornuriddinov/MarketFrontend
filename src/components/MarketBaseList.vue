<script>
import axios from "axios";
export default {
  name: "MarketBaseList",
  data(){
    return{
      marketBaseList:[]
    }
  },
  methods:{
    loadDate(){
      axios
          .get("api/market-base")
          .then(res=>{
            console.log(res)
            this.marketBaseList=res.data.content;
          })
    }
  },
  created() {
    this.loadDate();
  }
}
</script>

<template>
    <div>
      <el-table
        :data="marketBaseList"
        border
        style="width: 100%">
          <el-table-column
          prop="product.code"
          label="Product Code"
          width="200">
          </el-table-column>
        <el-table-column
            prop="product.name"
            label="Product Name"
            width="200">
        </el-table-column>
        <el-table-column
            prop="quantity"
            label="Product Quantity"
            width="200">
          <template #default="{row}">
            <span>{{row.quantity}} {{row.product.type}}</span>
          </template>
        </el-table-column>
        <el-table-column
            prop="price"
            label="Last Price"
            width="200">
        </el-table-column>
        <el-table-column
            prop="current_price"
            label="Product Current Price"
            >
        </el-table-column>


      </el-table>
    </div>
</template>

<style scoped>

</style>