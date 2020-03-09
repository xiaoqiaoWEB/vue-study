<template>
  <div id="app">
    <Form></Form>
    <Tree/>
  </div>
</template>

<script>
import Form from 'components/form/index.vue'
import Tree from 'components/tree'
export default {
  name: 'App',
  components: {
    Form,
    Tree
  }
}
</script>

<style lang="less">
</style>
