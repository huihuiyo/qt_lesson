# 预编译 四部曲 发生在函数执行之前
1. 创建AO对象
2. 找形参和变量声明，将变量声明和形参作为AO属性名，值为undefined
3. 将实参值和形参值统一
4. 在函数体里找函数声明，将函数声明作为AO对象属性名，值赋予函数体

AO {
  a: function,
  b: undefined,
  d: function
}

->

AO {
  a: 123,
  b: function,
  d: function
}

# 预编译也发生在全局
1. 创建GO对象，
2. 找形参和变量声明，将变量声明和形参作为GO属性名，值为undefined
3. 将实参值和形参值统一
4. 在全局找函数声明，将函数声明作为GO对象属性名，值赋予函数体

GO {
  global: undefined,
  fn: function(){}
}

-> fn内部，即在fn未被调用之时， 在函数体内创建AO对象。 ->

GO {
  global: 100,
  fn: function(){}
}

// 
GO {
  global: undefined, 100
  fn: function(){}
}
AO {
  global: undefined, 200, 300,
}
