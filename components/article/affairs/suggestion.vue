<template>
  <div class="affairs-sugestion">
    <div class="title">使 用 须 知</div>
    <div class="content">
      <p>1.《领导信箱》是佛山市气象局密切联系群众的重要桥梁，是群众对佛山市气象建设、管理工作行使公众监督权的重要渠道，是群众向佛山市气象局提出意见、建议，要求解决问题的重要途径。您的信件，我们会认真处理。</p>
      <p>2. 对您的个人信息我们将严格保密。同时我们希望您能写上真实联系电话号码和电子邮件，便于我们联络、调查处理以及获得您掌握的证据资料。本栏目不接受匿名信息。 </p>
      <p>3.本栏目主要受理您对佛山气象工作的意见和建议，其他内容可通过本站咨询建议或网上信访反映。不属于意见和建议范围内的信息概不处理或回复。</p>
      <p>4.请您以负责的态度完成信息编写，内容须用词礼貌，健康充实，不侵犯他人权利，因内容失实引起的法律责任，由投信者独自承担。</p>
      <p>一、注意事项。</p>
      <p>请遵守中华人民共和国各项法律和规定，不得发表含有侮辱、猥亵、色情、人身攻击等内容的言论。</p>
      <p>二、温馨提醒。</p>
      <p>为了提高办理质量和效率，每个邮件原则上反映一个问题，如需反映多个问题，请分别提交。</p>
    </div>
    <div class="affairs-sugestion-form">
      <Form
        ref="formValidate"
        :model="formValidate"
        label-position="left"
        :rules="ruleValidate"
      >
        <div class="form-row">
          <div class="form-col">
            <label for="name">姓名：</label>
            <div class="input-box">
              <FormItem prop="name">
                <Input v-model="formValidate.name" />
              </FormItem>
            </div>
            <span class="red-point">*</span>
          </div>
          <div class="form-col">
            <label for="tel">联系电话：</label>
            <div class="input-box">
              <FormItem prop="tel">
                <Input v-model="formValidate.tel" />
              </FormItem>
            </div>
            <span class="red-point">*</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-col">
            <label for="question">问题：</label>
            <div class="input-box">
              <FormItem prop="question">
                <Input v-model="formValidate.question" />
              </FormItem>
            </div>
            <span class="red-point">*</span>
          </div>
          <div class="form-col">
            <label for="mail">邮箱地址：</label>
            <div class="input-box">
              <FormItem prop="mail">
                <Input v-model="formValidate.mail" />
              </FormItem>
            </div>
            <span class="red-point">*</span>
          </div>
        </div>
        <div>
          <div class="form-content">
            <FormItem prop="content">
              <Input
                type="textarea"
                :rows="5"
                v-model="formValidate.content"
              />
            </FormItem>
          </div>
          <span class="red-point">*</span>
        </div>
        <button class="submit-button" @click="submitForm">提交内容</button>
      </Form>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      formValidate: {
        name: '',
        mail: '',
        tel: '',
        question: '',
        content: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        tel: [
          { required: true, message: '联系电话不能为空', trigger: 'blur' },
          {
            message: '请输入正确的联系电话',
            type: "number",
            trigger: 'blur',
            transform(value) {
              let result = Number(value)
              return result == NaN ? false : result
            }
          }
        ],
        question: [{ required: true, message: '请输问题' }],
        mail: [
          { required: true, message: '邮箱地址不能为空', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容' },
          {
            message: '字符长度不能小于10',
            trigger: 'blur',
            transform(value) {
              return value.length < 10 ? false : value
            }
          }
        ]
      }
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      alert('提交成功！')
      // 提交表单逻辑
    }
  }
}
</script>
<style lang="scss" scoped>
.affairs-sugestion {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fafbfc;
  font-family: "宋体";
  .title {
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #f60;
  }
  p {
    line-height: 24px;
    text-indent: 36px;
    font-size: 12px;
    font-weight: 400;
    color: #333333;
  }
  .content {
    margin-bottom: 10px;
  }
  .affairs-sugestion-form {
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
    .red-point {
      color: red;
    }
    .form-content {
      width: 650px;
      display: inline-block;
    }
    .submit-button {
      width: 66px;
      height: 28px;
      line-height: 28px;
      display: block;
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
</style>
