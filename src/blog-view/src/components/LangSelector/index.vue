<template>
  <el-dropdown trigger="click" class="international" placement="bottom-end" @command="selectLanguage">
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
      <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import SvgIcon from "../SvgIcon/index.vue";

  export default {
    components: {SvgIcon},
    computed: {
      language() {
        return this.$store.getters.language
      }
    },
    methods: {
      selectLanguage(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
        this.$message({
          message: 'Switch Language Success',
          type: 'success'
        })
      }
    }
  }
</script>

<style scoped>
  .international-icon {
    font-size: 25px;
    cursor: pointer;
    vertical-align: -15px!important;
  }
</style>

