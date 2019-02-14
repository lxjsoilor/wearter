import loading from 'base/loading/loading'
import interactModel from 'base/interact-model/interact-model'

// 指挥状态下loading
import commandLoading from 'base/loading/command-loading.vue'

// 自定义滚动条
import scroll from 'base/scroll/scroll.vue'

// 左右无限滚动
import roll from 'base/roll/roll.vue'

// 页面小标题
import baseTitle from 'base/base-title/base-title.vue'

// 错误消息警告框
import warnModel from 'base/warn-model/warn-model.vue'

// 提示信息框
import comfimModel from 'base/comfim-model/comfim-model.vue'

// 正常情况下模态框
import normalMaskModel from 'base/normal-mask-model/normal-mask-model.vue'

// 时间轴
import timeAxis from 'base/time-axis/time-axis.vue'

// 加载中
// export const loadingMixin = {
// components: {
// 'loading': loading
// }
// }
// 可移动模态框
export const interactModelMixin = {
  components: {
    'interact-model': interactModel
  }
}

// 公用组件mixin

// loading
// import loading from 'base/loading/loading.vue';
export const loadingMixin = {
  components: {
    'loading': loading
  }
}
export const commandLoadingMixin = {
  components: {
    'command-loading': commandLoading
  }
}
export const scrollMixin = {
  components: {
    'scroll': scroll
  }
}
export const rollMixin = {
  components: {
    'roll': roll
  }
}
export const baseTitleMixin = {
  components: {
    'base-title': baseTitle
  }
}
export const warnModelMixin = {
  components: {
    'warn-model': warnModel
  }
}
export const comfimModelMixin = {
  components: {
    'comfim-model': comfimModel
  }
}
export const normalMaskModelMixin = {
  components: {
    'normal-mask-model': normalMaskModel
  }
}
export const timeAxisMixin = {
  components: {
    'time-axis': timeAxis
  }
}
