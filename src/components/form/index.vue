<template>
  <div>
    <h5>表单</h5>
    <HForm :rules="rules" :model="model" ref="loginForm">
      <HFormItem lable="姓名" prop="userName">
        <HInput v-model="model.userName" autocomplete="off" placeholder="请输入用户名"></HInput>
      </HFormItem>
      <HFormItem lable="密码" prop="pwd">
        <HInput v-model="model.pwd" autocomplete="off" type="password" placeholder="请输入密码"></HInput>
      </HFormItem>
      <HFormItem>
        <button @click="submit('loginForm')">提交</button>
      </HFormItem>
    </HForm>

  </div>
</template>

<script>
import HForm from './form'
import HFormItem from './formItem'
import HInput from './input'
import Create from '@/utils/create.js'
import Notice from 'components/notice/index.vue'

export default {
  data () {
    return {
      model: {
        userName: '',
        pwd: ''
      },
      rules: {
        userName: [{ required: true, message: 'name' }],
        pwd: [{ required: true, message: '请输入密码！' }]
      }
    }
  },
  components: {
    HForm,
    HFormItem,
    HInput
  },
  methods: {
    submit (name) {
      this.$refs[name].validate(valid => {
        // console.log(valid, 'valid')
        // if (valid) {
        //   alert('请求登陆！')
        // } else {
        //   alert('表单校验失败！')
        // }
        const notice = Create(Notice, {
          title: '这里是哪里',
          message: valid ? '请求登陆' : '校验失败',
          duration: 1000
        })
        console.log(notice)
        notice.show()
      })
    }
  }
}
</script>
