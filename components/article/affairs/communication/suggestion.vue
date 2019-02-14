<template>
  <div class="affairs-communication-suggestion">
    <div class="suggestion-list">
      <div
        v-for="item in currentList"
        :key="'suggestion'+item.id"
        class="suggestion-box"
      >
        <div class="question-box">
          <div class="content">
            <span class="name">{{item.question.name}}：</span>{{item.question.content}}
          </div>
          <span class="time">{{item.question.time}}</span>
        </div>
        <div class="answer-box">
          <div class="content">
            <span class="name">{{item.answer.name}}：</span>{{item.answer.content}}
          </div>
          <span class="time">{{item.answer.time}}</span>
        </div>
      </div>
    </div>
    <page
      :total="totalSuggestion"
      :size="pageSize"
      :current="currentPage"
      @pageChange="pageChange"
    />
    <div class="form-area">
      <Form
        ref="formValidate"
        :model="formValidate"
        label-position="left"
        :rules="ruleValidate"
      >
        <div class="form-row">
          <div class="form-col">
            <label for="name">昵称：</label>
            <div class="input-box">
              <FormItem prop="name">
                <Input v-model="formValidate.name" />
              </FormItem>
            </div>
          </div>
          <div class="form-col">
            <label for="contact">联系方式：</label>
            <div class="input-box">
              <FormItem prop="contact">
                <Input v-model="formValidate.contact" />
              </FormItem>
            </div>
          </div>
        </div>
        <div class="form-content">
          <label for="content">留言：</label>
          <div class="input-box">
            <FormItem prop="content">
              <Input
                type="textarea"
                :rows="5"
                v-model="formValidate.content"
              />
            </FormItem>
          </div>
        </div>
        <div class="form-submit">
          <div class="form-col">
            <label for="code">验证码：</label>
            <div class="input-box">
              <FormItem prop="code">
                <Input v-model="formValidate.code" />
              </FormItem>
            </div>
          </div>
          <img :src="verifyImg" @click="refreshVerifyCode" />
          <button
            class="submit-button"
            @click="submitForm"
          >提交留言</button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>

import page from '../../common-component/page'

export default {
  components: { page },
  mounted() {
    this.setPage(this.$route)
  },
  beforeRouteUpdate(to, from, next) {
    this.setPage(to)
    next()
  },
  data() {
    return {
      totalSuggestion: 15,
      pageSize: 5,
      currentPage: 1,
      currentList: [],
      verifyImg: require('../../img/verify_code.png'),
      formValidate: {
        name: '',
        contact: '',
        content: '',
        code: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        contact: [
          { required: true, message: '联系方式不能为空', trigger: 'blur' },
          {
            message: '请输入正确的联系方式',
            type: "number",
            trigger: 'blur',
            transform(value) {
              let result = Number(value)
              return result == NaN ? false : result
            }
          }
        ],
        content: [
          { required: true, message: '请输入留言' },
          {
            message: '字符长度不能小于10',
            trigger: 'blur',
            transform(value) {
              return value.length < 10 ? false : value
            }
          }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    getData(page) {
      this.currentList = [1, 2, 3, 4, 5].map(item => {
        return {
          id: page + item,
          question: {
            name: '第' + page + '页提问者' + item,
            content: '第' + page + '页第' + item + '条问题',
            time: '2017/4/14 9:15:03'
          },
          answer: {
            name: '第' + page + '页回复者' + item,
            content: '第' + page + '页第' + item + '条回答',
            time: '2017/4/14 9:15:03'
          }
        }
      })
    },
    pageChange(page) {
      this.$router.push('/affairs/communication/suggestion/' + page)
    },
    setPage(route) {
      let page = parseInt(route.params.page)
      this.currentPage = page
      this.getData(page)
    },
    refreshVerifyCode(){
      alert('刷新验证码！！！')
    },
    submitForm(e) {
      e.preventDefault();
      alert('提交成功！')
      // 提交表单逻辑
    }
  }
}
</script>
<style lang="scss" scoped>
.affairs-communication-suggestion {
  width: 100%;
  padding: 20px 0;
  .suggestion-box {
    margin-bottom: 30px;
    display: block;
    font-size: 12px;
    font-family: "宋体";
    border-bottom: 1px dashed #2162a9;
    .time,
    .content {
      display: inline-block;
      vertical-align: top;
      line-height: 25px;
      word-break: break-all;
      .name {
        color: #2162a9;
      }
    }
    .time {
      width: 114px;
      height: 25px;
      text-align: right;
    }
    .question-box {
      margin-bottom: 8px;
      .content {
        width: 810px;
      }
    }
    .answer-box {
      width: 100%;
      margin-bottom: 20px;
      padding: 15px;
      position: relative;
      box-sizing: border-box;
      border: 1px solid #f0f1f2;
      background-color: #f7f8fa;
      .content {
        width: 778px;
      }
    }
    .answer-box:after {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      top: -6px;
      left: 15px;
      border: solid #f0f1f2;
      border-width: 1px 0 0 1px;
      background-color: #f7f8fa;
      transform: rotate(45deg);
    }
  }
  .form-area {
    padding-top: 30px;
    .form-col {
      margin-right: 20px;
      display: inline-block;
    }
    label {
      height: 36px;
      line-height: 36px;
      display: inline-block;
      font-size: 12px;
      font-family: "宋体";
    }
    .input-box {
      width: 350px;
      display: inline-block;
    }

    .form-content {
      display: inline-block;
      .input-box {
        width: 785px;
      }
    }
    .form-submit {
      .input-box {
        width: 110px;
      }
      img {
        height: 22px;
        margin-top: 5px;
        display: inline-block;
        cursor: pointer;
      }
      .submit-button {
        width: 66px;
        height: 32px;
        line-height: 32px;
        display: inline-block;
        margin-left: 20px;
        border-radius: 0;
        border: 0;
        padding: 0;
        background-color: #16499a;
        font-size: 13.333px;
        font-family: "宋体";
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
}
</style>
