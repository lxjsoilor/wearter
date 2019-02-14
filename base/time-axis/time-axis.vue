<template>
	<div class="time-axis">
		<div class="time-axis-warpper">
			<div class="time-axis-header">{{title}}</div>
			<div class="time-axis-timeline">
				<Steps v-if="datas.length">
	        <Step 
	        	v-for="(item, index) in datas"
	        	:status="activeIndex === index ? 'process' : 'wait'"
	        	:key="index"
	        	@click.native="timelineClick(item, index)">
	        	<div style="font-size: 12px;" @click.stop="timelineClick(item, index)">{{item.time}}</div>
	        </Step>
			   </Steps>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  props: {
	    layerName: {
	      type: String,
	      default: ''
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    datas: {
	      type: Array
	    }
	  },
	  data () {
	    return {
	      activeIndex: 0
	    }
	  },
	  methods: {
	    filterTime (str) {
	      return str.split(' ')[1]
	    },
	    timelineClick (item, index) {
	      this.activeIndex = index
	
	      this.$emit('timelineClick', {
	        item: item,
	        layerName: this.layerName
	      })
	    },
	    refresh () {
	      this.activeIndex = 0
	    }
	  }
	}
	</script>

<style scoped lang="scss">
	@import "~common/scss/color";

	.time-axis {
		width: 100%;
		background-color: white;
		padding: 5px;
		opacity: 0.8;
		.time-axis-warpper {
			width: 100%;
			height: 100%;
			position: relative;
			display: flex;
			align-items: center;
			.time-axis-header {
				flex: 0 0 90px;
				text-align: center;
				font-size: 14px;
			}
			.time-axis-timeline {
				flex: 1;
			}
		}
	}
</style>