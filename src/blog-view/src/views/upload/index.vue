<template>
  <div>
    <div>
      <span>Element-UI</span>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <hr/>
    <div>
      <span>HTML5</span>
      <input type="file" @change="selectHandler" webkitdirectory/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        fileList: [
          {
            name:'1.jpg',
            url:'http://www.baidu.com'
          },
          {
            name:'2.jpg'
          }
        ]
      }
    },
    props: [],
    created() {

    },
    computed: {},
    mounted() {

    },
    methods: {
      handleChange(file, fl) {
        this.fileList = fl.slice(-3);
      },
      selectHandler(e){
        let uploadUrl = 'http://192.168.20.91:8000/upload'
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }

        console.dir(e.target.files)
//        console.dir('文件上传数量 : ' + e.target.files.length)

        let list = e.target.files

        let uploadParams = new FormData()
        uploadParams.append('count',list.length)
        uploadParams.append('path',list.length)

        let tasks =[]
        for(let file of list){

          let uploadParams = new FormData()
          uploadParams.append('resource', file)
          uploadParams.append('name', file.name)
          uploadParams.append('path', '/')
          let taskPromise = axios.post('http://192.168.20.91:8000/api/upload', uploadParams, config)
          tasks.push(taskPromise)
        }

        Promise.all(tasks).then(result=>{
          this.$message({
            message:'上传成功',type:'success'
          })
        }).catch(err=>{
          this.$message({
            message:'上传失败',type:'error'
          })
        })

      }
    },
    watch: {}
  }
</script>

<style  ref="stylesheet/scss" lang="scss" scoped>

</style>
