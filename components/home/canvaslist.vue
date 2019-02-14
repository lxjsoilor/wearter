<template>
  <div class="canvaslist">
    <canvas class="canvasx" id="canvasx"></canvas>
  </div>
</template>

<script>
import $ from "jquery"

export default {
  data () {
    return {

    }
  },
  methods: {
    _getlist () {
      $(function() {
        console.log(1)
        //温度走势图start
        var forecast = new Array();
				forecast[0] = new Array();
				forecast[1] = new Array();
				forecast[2] = new Array();
				forecast[3] = new Array();
				forecast[4] = new Array();
				forecast[5] = new Array();
				forecast[6] = new Array();
				forecast[7] = new Array();
				forecast[8] = new Array();
        forecast[9] = new Array();
        forecast[10] = new Array();
				forecast[11] = new Array();
				forecast[12] = new Array();
				forecast[13] = new Array();
				forecast[14] = new Array();

				forecast[0]["high"] = 23;
				forecast[0]["low"] = 11;
				forecast[1]["high"] = 23;
				forecast[1]["low"] = 11;
				forecast[2]["high"] = 34;
				forecast[2]["low"] = 13;
				forecast[3]["high"] = 23;
				forecast[3]["low"] = 11;
				forecast[4]["high"] = 27;
				forecast[4]["low"] = 15;
				forecast[5]["high"] = 22;
				forecast[5]["low"] = 11;
				forecast[6]["high"] = 23;
				forecast[6]["low"] = 11;
				forecast[7]["high"] = 34;
				forecast[7]["low"] = 13;
				forecast[8]["high"] = 23;
				forecast[8]["low"] = 11;
				forecast[9]["high"] = 27;
        forecast[9]["low"] = 15;
        forecast[10]["high"] = 22;
				forecast[10]["low"] = 11;
				forecast[11]["high"] = 23;
				forecast[11]["low"] = 11;
				forecast[12]["high"] = 34;
				forecast[12]["low"] = 13;
				forecast[13]["high"] = 23;
				forecast[13]["low"] = 11;
				forecast[14]["high"] = 27;
				forecast[14]["low"] = 15;
        var maxTemp = forecast[0]["high"];
        var minTemp = forecast[0]["low"];
        console.log(forecast)

        var high_tep_arr = [];
        for (var x = 0; x < forecast.length; x++) {
          var high_tep = forecast[x]["high"];
          if (high_tep > maxTemp) {
            maxTemp = high_tep;
          }
          high_tep_arr.push(high_tep);
        }
        var low_tep_arr = [];
        for (var x = 0; x < forecast.length; x++) {
          var low_tep = forecast[x]["low"];
          if (low_tep < minTemp) {
            minTemp = low_tep;
          }
          low_tep_arr.push(low_tep);
        }
        var canvasx = document.getElementById("canvasx")
        var context = canvasx.getContext("2d");
        canvasx.width = 1386;
        // canvas.style.height = '300px';
        // canvas.width = 1000;
        // canvasx.height = 170;
        var item_width = 77;
        var wencha = maxTemp - minTemp;
        var tem_pexi = 80 / (maxTemp - minTemp); //计算每度对应的px。80是自己设定的，这里画布总高是174,所以我设定这几天最高温度和最低温度之间间距为80。
        context.translate(30, maxTemp * tem_pexi + 40); //画布的偏移量，53是画布x轴从左向右方向偏移。后面的值是y轴（细说一下：web里面的坐标轴和我们数学知识上学习的坐标系，y轴是相反的。故这里画点为了让温度高的点显示在温度低的上面，我们要取反。取反以后这个点就跑到画布以外去了，所以我们要向正方向偏移出来。偏移的数值，我这里是选择了最高温度所占对应px加上每个点上要写文字的距离，从而计算出来）。
        //折线走势
        var new_high_x = [];
        var new_high_y = [];
        function draw_line(a, high_color_line) {
          // console.log(a)
          new_high_x = [];
          new_high_y = [];
          for (var j = 0; j < a.length; j++) {
            //a温度数组
            //画点
            context.beginPath();
            var high_y = parseInt(Number(a[j]) * tem_pexi);
            var high_x = j * item_width;
            context.arc(high_x, -high_y, 3, 0, 2 * Math.PI, true);
            context.strokeStyle = high_color_line;
            context.stroke();
            context.fillStyle = high_color_line;
            context.fill();
            context.closePath();
            //画线
            new_high_x.push(high_x);
            new_high_y.push(-high_y);
            //写文字
            if (a == high_tep_arr) {
              context.beginPath();
              context.font = "13px 微软雅黑";
              context.fillStyle = "#333";
              context.fillText(a[j] + "°", high_x - 10, -high_y - 10, 50);
              context.stroke();
              context.closePath();
            } else {
              context.beginPath();
              context.font = "13px 微软雅黑";
              context.fillStyle = "#333";
              context.fillText(a[j] + "°", high_x - 10, -high_y + 30, 50);
              context.stroke();
              context.closePath();
            }
          }
          for (var z = 0; z < 15; z++) {
            // if (z == 6) {
            //   continue;
            // }
            context.beginPath();
            context.moveTo(new_high_x[z], new_high_y[z]);
            context.lineTo(new_high_x[z + 1], new_high_y[z + 1]);
            context.strokeStyle = high_color_line;
            context.lineWidth = 3;
            context.stroke();
            context.closePath();
          }
        }
        draw_line(high_tep_arr, "#fcc370");
        draw_line(low_tep_arr, "#94ccf9");
        //温度走势图end
      });
    }
  },
  created () {
    this._getlist()
  }
}

</script>

<style lang="scss" scoped>
// .canvaslist {
//   width: 750px;
//   overflow: hidden;
//   overflow-x: scroll;
// }
</style>
