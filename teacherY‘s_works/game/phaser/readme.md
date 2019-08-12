- callback
    回头一笑 
    addEventListener(event_type, callback);
    定义时，不执行，注册了
    时间发生时，将注册的回调函数拿出来调用一下 异步

- fs 文件模块
    异步是需要花时间，注册行为，callback
    err

- 操作系统
    addEventListener时间操作 I/O操作
    Input/Output CPU(运算和指令集) 内存，外部存储设备 典型的慢操作
    fs.readFile(path, 'utf8', callback)