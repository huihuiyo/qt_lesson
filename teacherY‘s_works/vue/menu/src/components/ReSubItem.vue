<template>
  <!-- 容器组件 -->
  <SubMenu>
    <template #title>{{data.title}}</template>
    <template v-for="child in data.children">
      <MenuItem
        :key="child.id"
        v-if="!child.children">
        {{child.title}}
      </MenuItem>
      <ReSubItem v-else :data='child' :key="child.id"></ReSubItem>
    </template>
      
  </SubMenu>
</template>

<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'

export default {
  name: 'ReSubItem',
  props: ['data'],
  data () {
    return {

    }
  },
  components: {
    SubMenu,
    MenuItem
  }
}
</script>

<style scoped>

</style>
