/**
 * 最近最少使用原则
 * @param capacity:number 容量
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.arr = [];   // 数据结构
    this.obj = {};   // 3, 3
    // 使用的空间 arr.length push 
    // get

};
LRUCache.prototype.get = function(key) {
    // 调整优先级
    for(let i = 0; i < this.arr.length; i++) {
        if(this.arr[i].key == key) {
            const numValue = this.arr[i];
            this.arr.splice(i, 1);
            this.arr.push(numValue);
            return numValue;
        }
    }
    return -1;
}
LRUCache.prototype.put = function(key, value) {
    this.obj = {key, value};
    if(this.arr.length >= this.capacity) {
        this.arr.shift();
        this.arr.push(this.obj);
    } else {
        this.arr.push(this.obj);
    }
}

// 测试
let test = new LRUCache(2);
test.put(1, 1);
test.put(2, 2);

console.log(test.get(1));

test.put(3, 3);

console.log(test.get(2));
test.put(4, 4);

console.log(test.get(1));
console.log(test.get(3));
console.log(test.get(4));

console.log(test);



// [] length push 
// [1] push
// [1, 2] 在哪端是最近最常用的？ push
// get(1) 读操作
// 1 所在的位置，从原来的数组里移除，push到队尾 不会带来空间使用量的增加
// [2, 1]
// put(3) 带来空间的分配 回收空间？ 最近最少使用（length>=容量） shift() push(3) 
