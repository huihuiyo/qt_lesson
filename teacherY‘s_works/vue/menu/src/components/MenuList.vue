<template>
  <!-- 容器组件 -->
  <Menu>
    <template v-for="menu in data">
      <MenuItem :key="menu.id" v-if="!menu.children">
        {{menu.title}}
      </MenuItem>
      <ReSubItem :key="menu.id" :data='menu' v-else>
        
      </ReSubItem>
    </template>
  </Menu>
</template>

<script>
import Menu from './Menu'
import MenuItem from './MenuItem'
import ReSubItem from './ReSubItem'
export default {
  data () {
    return {
    
    }
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    Menu,
    MenuItem,
    ReSubItem
  }
}
</script>

<style scoped>

</style>
