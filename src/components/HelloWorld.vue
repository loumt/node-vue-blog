<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <div id="select_frame">
    
    <div ref="select_frame" class="box">
        将文件拖拽到这里
    </div>
        <div class="filebox">
        <p v-if="fileList.length<1">暂无文件</p>
        <ol>
            <li v-for="item in fileList">{{item.name}}</li>
        </ol>
        </div>
        <button style="outline:none;float:right;"  type="submit" class="btn btn-primary">解 析</button>
    </div>

    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fileList: []
    }
  },
  methods: {

  },
  mounted () {
    this.$refs.select_frame.ondragleave = (e) => {
      // 阻止离开时的浏览器默认行为
      e.preventDefault()
    };
    this.$refs.select_frame.ondrop = (e) => {
      // 阻止拖放后的浏览器默认行为
      e.preventDefault()
      // 获取文件对象
      const data = e.dataTransfer.files
      if (data.length < 1) {
        // 检测是否有文件拖拽到页面
        return
      }
      console.log(e.dataTransfer.files)
      const formData = new FormData()
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        console.log(e.dataTransfer.files[i])
        if (e.dataTransfer.files[i].name.indexOf('map') === -1) {
          alert('只允许上传.map文件')
          return
        }
        formData.append('uploadfile', e.dataTransfer.files[i], e.dataTransfer.files[i].name)
      }
      this.fileList = this.fileList.concat(e.dataTransfer.files[0])
      console.log(formData, this.fileList, e.dataTransfer.files[0])
    };
    this.$refs.select_frame.ondragenter = (e) => {
      // 阻止拖入时的浏览器默认行为
      e.preventDefault()
      this.$refs.select_frame.border = '2px dashed red'
    };
    this.$refs.select_frame.ondragover = (e) => {
      // 阻止拖来拖去的浏览器默认行为
      e.preventDefault()
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
