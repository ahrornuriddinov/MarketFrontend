<script>
import axios from "axios";


export default {
  name: "PaymentListProducts",
  data(){
    return{
      paymentList:[],
      productCode:null,
      miqdor:null,
      total:null,
      marketBase:{
        current_price:null,
        price:null,
        quantity:null,
        product:{
          id:null,
          code:null,
          name:name
        }
      }
    }
  },methods:{
    getProduct(){
      axios
          .get(`api/market-base/code?code=${this.productCode}`)
          .then(res=>{
            if (res.data == null || res.data == undefined || res.data==''){
              alert("Product is not in the Base")
              return
            }
            this.marketBase=res.data
            const index = this.paymentList.indexOf(res.data)
            if (index > -1){
                this.paymentList[index].quantityPayment +=1
            }else {
              this.paymentList.push(this.marketBase)
            }
            this.marketBase={}
            this.productCode=null
          })
    },
    deleteRow(row){
        const index = this.paymentList.indexOf(row);
        if (index>-1){
          this.paymentList.splice(index,1)
        }
    },
    saveMiqdor(){
      const sum=this.marketBase*this.miqdor;
      this.total=sum
    }
  }
}
</script>

<template>
<div>
  <el-row>
      <el-col :span="18">
        <el-input
            size="mini"
            style="margin-bottom: 28px;margin-top: 2%"
            v-model="productCode"
            @keyup.enter.native="getProduct"
            placeholder="Product-Code">
          Product-code</el-input>

        <el-table
            :data="paymentList"
            border
            style="width: 100%">
          <el-table-column
              prop="product.code"
              label="Product Code"
              width="160">
          </el-table-column>
          <el-table-column
              prop="product.name"
              label="Product Name"
              width="160">
          </el-table-column>
          <el-table-column
              label="Product Price"
              width="160">
            <template #default="{row}">
             <span>{{row.current_price}}</span>
            </template>
          </el-table-column>
          <el-table-column
              label="Product Quantity"
              width="160">
          </el-table-column>
          <el-input
              size="mini"
              v-model="miqdor"
              @keyup.enter.native="saveMiqdor"
          >Miqdor
          </el-input>
          <el-table-column
              label="Total sum"
              width="180">
            <span>{{total}}</span>
          </el-table-column>
          <el-table-column
              label="Remove sell"
          >
            <template #default="{row}">
              <el-button type="danger" icon="el-icon-delete"
                         @click="deleteRow(row)"
                         circle>

              </el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-col>
      <el-col :span="6">
        ahror
      </el-col>
  </el-row>
</div>
</template>

<style scoped>

</style>