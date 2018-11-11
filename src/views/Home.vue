<template>
  <Form ref="formCustom" style="font-size: 36px;width: 30%;margin-top: 50px;margin: 0 auto;"  :model="formCustom" :rules="ruleCustom" :label-width="80">
    <FormItem label="服务名称" prop="server">
      <Input type="text" v-model="formCustom.server"/>
    </FormItem>
    <FormItem label="服务配置" prop="serverload">
      <Input type="text" v-model="formCustom.serverload"/>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'home',
  data () {
    const validateServer = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入服务名称'))
      } else {
        // if (this.formCustom.serverload !== '') {
        //   // 对第二个密码框单独验证
        //   this.$refs.formCustom.validateField('passwdCheck')
        // }
        callback()
      }
    }
    const validateServerLoadCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入服务配置'))
      } else {
        callback()
      }
    }
    return {
      formCustom: {
        server: '',
        serverload: ''
      },
      ruleCustom: {
        server: [
          { validator: validateServer, trigger: 'blur' }
        ],
        serverload: [
          { validator: validateServerLoadCheck, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
          this.$router.push('/server/list')
        } else {
          this.$Message.error('提交失败!')
        }
      })
    }
  }
}
</script>
