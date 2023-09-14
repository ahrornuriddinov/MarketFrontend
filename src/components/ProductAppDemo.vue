<script>
import axios from "axios";
export default {
  name: "ProductAppDemo",
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      loadingButton: false,
      product: {
        id: null,
        name: null,
        code: null,
        type: null,
        status: null
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.product = row;
      this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.deleteProduct(row.id);
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    },
    save() {
      this.loadingButton = true
      axios.post("api/product", this.product)
          .then(res => {
            this.loadingButton = false;
            this.dialogFormVisible = false;
            this.loadDatas()
            console.log(res)
            this.$message({
              type: 'success',
              message: 'Save completed'
            });
          })
    },
    loadDatas() {
      axios
          .get("api/product")
          .then(res => {
            this.tableData = res.data.content;
          })
    },
    closeModel() {
      this.dialogFormVisible = false;
      this.product = {};
    },
    deleteProduct(id) {
      axios
          .delete(`api/product/${id}`)
          .then(res => {
            console.log(res)
            this.loadDatas()
          });
    }
  },


  created() {
    this.loadDatas()
  }
}

</script>

<template>
  <div>
    <h1>Products</h1>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <el-button type="primary" round @click="dialogFormVisible=true">Primary</el-button>
          <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="Id"
          width="50">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="Name"
          width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
            <el-table-column
                label="Code"
                width="160">
              <template slot-scope="scope">
                  <span>{{ scope.row.code }}</span>
              </template>
            </el-table-column>
            <el-table-column
                label="Type"
                width="160">
              <template slot-scope="scope">
                <span>{{ scope.row.type }}</span>
              </template>
            </el-table-column>
            <el-table-column
                label="Status"
                width="160">
              <template slot-scope="scope">
                  <span>{{ scope.row.status }}</span>
              </template>
            </el-table-column>
      <el-table-column
          label="Operations">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
      </el-col>
    </el-row>
    <el-dialog title="Editing a product" :visible.sync="dialogFormVisible">
          <el-form :model="product">
            <el-form-item label="Product name" :label-width="formLabelWidth">
              <el-input v-model="product.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Product code" :label-width="formLabelWidth">
              <el-input v-model="product.code" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Product type" :label-width="formLabelWidth">
              <el-select v-model="product.type" placeholder="Please select a type">
                <el-option label="Kg" value="KG"></el-option>
                <el-option label="Litr" value="L"></el-option>
                <el-option label="Pieces" value="PIECES"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Product status" :label-width="formLabelWidth">
              <el-select v-model="product.status" placeholder="Please select a status">
                <el-option label="Active" value="ACTIVE"></el-option>
                <el-option label="Passive" value="DEAVTIVE"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
                <el-button @click="closeModel">Cancel</el-button>
                <el-button type="primary" @click="save" :loading="loadingButton">Confirm</el-button>
          </span>
    </el-dialog>

  </div>
</template>

<style scoped>

</style>