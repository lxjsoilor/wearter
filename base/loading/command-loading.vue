<template>
	<div class="command-loading">
		<Spin fix :style="{backgroundColor: bgColor}">
      <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
      <div v-if="show==='true'">加载中...</div>
    </Spin>
	</div>
</template>

<script>
	export default {
	  props: {
	    bgColor: {
	      type: String,
	      default: 'rgba(255, 255, 255, 0.6)'
	    },
	    show: {
	      type: String,
	      default: 'true'
	    }
	  }
	}
</script>

<style lang="scss">
	.command-loading {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		user-select: none;
		.ivu-spin-text {
			// color: white;
		}
		.demo-spin-icon-load{
      animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
      from { transform: rotate(0deg);}
      50%  { transform: rotate(180deg);}
      to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
      height: 100px;
      position: relative;
      border: 1px solid #eee;
    }
	}
</style>