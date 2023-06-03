# cloudflare-reverse-proxy

本项目是cloudflare反向代理。在cloudflare网站中新建worker，把worker.js文件中的内容复制进去即可使用。

使用方法为在任意url前面加上https://你的域名/proxy/ 即可使用cloudflare加速。

例如https://你的域名/proxy/https://raw.githubusercontent.com/gaboolic/cloudflare-reverse-proxy/main/worker.js

本人另外一个项目是基于[vercel](https://vercel.com/)的反向代理，仓库地址https://github.com/gaboolic/vercel-reverse-proxy 供大家参考

# 详细步骤

0 登录https://www.cloudflare.com/

1 创建应用程序
![创建应用程序](img/1createapp.png)
2 创建worker
![创建worker](img/2createworker.png)
3 点"部署"按钮
![创建worker](img/3deploy.png)
4 编辑代码
![编辑代码](img/4update.png)
4 编辑代码
![编辑代码](img/4update.png)
5 把worker.js文件中的内容复制进去，点"保存并部署"
![保存并部署](img/5save.png)
6 (可选) 添加域名
查看routers
![查看routers](img/6router.png)
添加路由
![添加路由](img/7addrouter.png)

# 使用方法

在任意url前面加上https://你的域名/proxy/ 即可使用cloudflare加速。
例1 https://github.com/gaboolic 前面加上https://你的域名/proxy/
![demo1](img/demo1.png)
例2 调用openai的post接口，https://api.openai.com/v1/chat/completions 前面加https://你的域名/proxy/
![demo2](img/demo2.png)
更多使用方法也可以参考https://github.com/gaboolic/vercel-reverse-proxy 
