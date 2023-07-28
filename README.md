# cloudflare-reverse-proxy

本项目是cloudflare反向代理。在cloudflare网站中新建worker，把worker.js文件中的内容复制进去即可使用。

使用方法为在任意url前面加上https://你的域名/proxy/ 即可使用cloudflare加速。

例如https://你的域名/proxy/https://raw.githubusercontent.com/gaboolic/cloudflare-reverse-proxy/main/worker.js

本人另外一个项目是基于[vercel](https://vercel.com/)的反向代理，仓库地址https://github.com/gaboolic/vercel-reverse-proxy 供大家参考

# 详细步骤

0 登录https://www.cloudflare.com/

1 创建应用程序
![创建应用程序](img/1createapp.png)
2 创建worker（pages麻烦一点，需要写一个package.json文件，但pages的好处是分配的域名直接可以用）
![创建worker](img/2createworker.png)
3 点"部署"按钮
![创建worker](img/3deploy.png)
4 编辑代码
![编辑代码](img/4update.png)
5 把worker.js文件中的内容复制进去，点"保存并部署"
![保存并部署](img/5save.png)
6 (可选) 添加自定义域

绑定自己的域名。不需要教程了，现在在cloudflare点添加自定义域名，输入子域名自动添加好dns

免费域名申请：https://secure.nom.za/  https://nic.eu.org/   https://nic.ua

不需要申请，link域名0元免费1年：dynadot.com

# 使用方法

在任意url前面加上https://你的域名/proxy/ 即可使用cloudflare加速。

例1 https://github.com/gaboolic 前面加上https://你的域名/proxy/
![demo1](img/demo1.png)
例2 调用openai的post接口，https://api.openai.com/v1/chat/completions 前面加https://你的域名/proxy/
![demo2](img/demo2.png)

如何在一些常见的开源项目中使用？
一般开源项目都是引用的openai的库，可以看到里面有一个属性是api_base = os.environ.get("OPENAI_API_BASE", "https://api.openai.com/v1")

所以使用的时候只需要设置一下openai.api_base="https://你的域名/proxy/https://api.openai.com/v1" 就可以了

更多使用方法也可以参考https://github.com/gaboolic/vercel-reverse-proxy 
