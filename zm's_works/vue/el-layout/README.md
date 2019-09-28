## html -> js -> html
<template>
  <div>
    <slot></slot>
    <ELButton></ELButton>
  </div>
</template>
里面的东西 都会 被编译为
h('div',[h('slot'), h('ELButton')])

## h函数的返回
  一个对象
  {
    详细的描述了，该标签（<div />、<component />）上的信息：props、id、class、子节点
  }
  虚拟节点(virtual node)(VNode)

  虚拟 DOM : VNode 建立起来的一个树