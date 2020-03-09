<template>
  <div>
    <label v-if="lable">{{lable}}</label>
    <slot></slot>
    <span v-if="errorMessage">{{errorMessage}}</span>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  // inject 接受跨层级 传值
  inject: ['form'],
  props: ['lable', 'prop'],
  data () {
    return {
      errorMessage: ''
    }
  },
  mounted () {
    this.$on('validate', this.validate())
  },
  methods: {
    // 校验
    validate () {
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const desc = { [this.prop]: rules }
      const schema = new Schema(desc)
      // 返回验证结果的 promise
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>
