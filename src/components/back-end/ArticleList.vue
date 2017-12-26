<template>
  <div style="width:99%">
    <el-table
      :data="tableData"
      border
      :row-key="tableData.articleId"
      style="width: 100%">
      <el-table-column
      type="index">
      </el-table-column>
      <el-table-column
        prop="time"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="sign"
        label="分类">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
      label="操作">
      <!-- 通过slot-scope传递table的值，利用scope调用 -->
      <template slot-scope="scope">
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button @click="deleteArticle(scope.row.articleId)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created(){
      api.getArticles()
      .then(({data:{articles}})=>{
          this.tableData = articles
          var json = JSON.stringify(articles)
      })
  },
  methods:{
    deleteArticle(done) {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$notify({
              title: '成功',
              message: '成功删除文章',
              type: 'success'
          });
        }).catch(() => {
            this.$notify.info({
              title: '取消',
              message: '取消删除',
          });          
        });
      }
  }
}
</script>

