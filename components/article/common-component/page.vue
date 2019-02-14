<template>

  <div class="page-area">
    <div
      class="ivu-page-item button first "
      @click="switchPage('first')"
    >首页</div>
    <div class="inside">
      <Page
        :total="total"
        :page-size="size"
        :current="current"
        @on-change="changePage"
      />
    </div>
    <div
      class="ivu-page-item button last"
      @click="switchPage('last')"
    >末页</div>
  </div>
</template>
<script>

export default {
  props: ['total', 'size', 'current'],
  methods: {
    changePage(page) {
      this.$emit('pageChange', page)
    },
    switchPage(type) {
      let page = type == 'first' ? 1 : Math.floor(this.total / this.size)
      this.$emit('pageChange', page)
    }
  }
}
</script>
<style lang="scss" scoped>
.page-area {
  padding: 10px 0;
  text-align: center;
  .button {
    vertical-align: middle;
    display: inline-block;
  }
  .first {
    margin-right: 8px;
  }
  .last {
    margin-left: 8px;
  }
  .inside {
    vertical-align: middle;
    display: inline-block;
  }
}
</style>
