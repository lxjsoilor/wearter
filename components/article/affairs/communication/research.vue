<template>
  <div class="affairs-communication-research">
    <router-view
      path="/affairs/communication/research"
      list-type="public"
      content-name="网上调查"
    />
  </div>
</template>
<script>

export default {
  data() {
    return {
      researchList: []
    }
  }
}
</script>
<style lang="scss" scoped>
.affairs-communication-research {
  width: 100%;
}
</style>
v