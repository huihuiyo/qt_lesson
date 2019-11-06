# Set 和 WeakSet 区别
1. WeakSet 只能存放对象
2. WeakSet 不支持遍历， 没有size
3. WeakSet 存放的对象不会计入到对象的引用计数，因此不会影响GC的回收
4. WeakSet 存放的对象如果在外界消失，呢么WeakSet内部也不会存在

# Map 和 WeakMap 区别
1. WeakMap 只能接收对象作为键名，null除外
2. WeakMap 键名指向对象不会计入到对象的引用计数，