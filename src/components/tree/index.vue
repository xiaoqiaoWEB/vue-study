<template>
  <div>
    <ul>
      <Item class="item" :model="menuDate"></Item>
    </ul>
  </div>
</template>

<script>
import Item from './item'
export default {
  data () {
    return {
      menuDate: {
        title: '全站开发工程师',
        children: [
          {
            title: '前端开发',
            children: [
              {
                title: 'js',
                children: []
              },
              {
                title: 'css',
                children: []
              },
              {
                title: 'html',
                children: []
              },
              {
                title: 'vue',
                children: [
                  {
                    title: 'vuex',
                    children: []
                  },
                  {
                    title: 'router',
                    children: []
                  }
                ]
              }
            ]
          },
          {
            title: '后台开发',
            children: []
          },
          {
            title: 'UI色合集',
            children: []
          }
        ]
      }
    }
  },
  components: {
    Item
  }
}
</script>
