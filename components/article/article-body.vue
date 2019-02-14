<template>
  <div class="forecast">
    <div class="article-content-nav">
      <article-content-nav
        :nav-list="navList"
        :current="current"
      />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>

import articleContentNav from "./article-contentnav";

export default {
  props: ['parent-path'],
  components: {
    articleContentNav
  },
  mounted() {
    let navData = {}
    this.$store.state.navList.forEach(item=>{
      navData[item.name] = item.children
    })
    this.navData = navData
    this.current = this.$router.history.current.matched[1].name
  },
  watch: {
    $route (to, from) {
      this.current = this.$router.history.current.matched[1].name
    }
  },
  computed: {
    navList () {
      return this.navData[this.parentPath]
    }
  },
  data: function () {
    return {
      current: '',
      navData: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.forecast {
  width: 100%;
  .content {
    width: 992px;
    float: left;
    box-sizing: border-box;
    border: 5px solid #c2c8cc;
    background-color: #ffffff;
  }
}
</style>

