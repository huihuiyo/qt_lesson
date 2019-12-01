- 服务器部署
<!-- 连接 -->
ssh root@144.34.213.152 -p 28541

pwd
cd /
ls
cd etc/yum.repos.d/

touch nginx.repo

<!-- 进入修改模式 -->
vim nginx.repo

[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

<!-- 安装ngnix -->
sudo yum install nginx

<!-- 启动nginx -->
nginx

<!-- 查看网络状态 -->
netstat -ntlp

<!-- 管道符，过滤 含有 80 -->
netstat -ntlp | grep 80

<!-- 杀掉进程 -->
sudo kill xxx

<!-- 查找ngnix文件 -->
whereis nginx

<!-- 查看nginx配置 -->
cat nginx.conf


- 程序打包后 live-server检测
## h5 history api VS hash
刷新的时候:
1. hash 后面的 不会发送给后端（url丑‘#’，但刷新后url不掉）
2. history api 表示请求后端的url接口（url好看，但刷新后url会掉）

后端无论收到什么请求都 返回 index.html
app.get(*, () => {
  render(index)
})

<script src="/static/a.js" />
publicPath /   改为->   ./
html: index.html static/
后续
ip/static/a.js
没有拦截到
location / {
  root /usr/share/nginx/html
}