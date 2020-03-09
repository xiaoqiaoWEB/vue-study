<template>
  <div class="box" v-if="isShow">
    <h3>{{title}}</h3>
    <p class="box-content">{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title-title'
    },
    message: {
      type: String,
      default: '123'
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
      setTimeout(this.hide, this.duration)
    },
    hide () {
      this.isShow = false
      this.remove()
    }
  }
}
</script>

<style lang="less" scope>
  .box{
    width: 100px;
    height: 200px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -100px;
    margin-left: -50px;
    background: red;
  }
</style>
