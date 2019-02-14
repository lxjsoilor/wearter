 <template>
  <div class="forecast">
    <article-content-nav
      :list="list"
      :current="current"
    />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

import articleContentNav from "../article-contentnav";

export default {
  components: {
    articleContentNav
  },
  mounted () {
    if (this.$router.history.current.name === "warning") {
      this.$router.replace('/article/warning/foshan')
      return
    } else {
      this.current = this.$router.history.current.matched[2].name
    }
  },
  // updated() {
  //   this.currentPath = this.$router.history.current.name
  // },
  beforeRouteUpdate (to, from, next) {
    if (to.name === "warning") {
      this.$router.replace('/article/warning/foshan')
    } else {
      this.current = to.matched[2].name
      next()
    }
  },
  data: function () {
    return {
      current: '',
      list: [{
        path: 'foshan',
        title: '佛山气象预警',
        icon: require('../img/content-nav/L3_1.png'),
        iconCurrent: require('../img/content-nav/L3_1_2.png')
      }, {
        path: 'province',
        title: '全省气象预警',
        icon: require('../img/content-nav/L3_1.png'),
        iconCurrent: require('../img/content-nav/L3_1_2.png')
      }, {
        path: 'meaning',
        title: '预警信号含义',
        icon: require('../img/content-nav/L3_3.png'),
        iconCurrent: require('../img/content-nav/L3_3_2.png')
      }, {
        path: 'disaster',
        title: '地质灾害预警',
        icon: require('../img/content-nav/L3_2.png'),
        iconCurrent: require('../img/content-nav/L3_2_2.png')
      }]
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

