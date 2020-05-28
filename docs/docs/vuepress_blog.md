使用vuepress+github pages构建个人博客
## What is VuePress?
VuePress是一个静态网站生成器。

使用Markdown书写页面，[markdown-it](https://github.com/markdown-it/markdown-it)将其解析成HTML。Vue、Vue Router和webpack合作构建一个单页应用，生成静态网站。
## What is github pages?
GitHub Pages是一个静态站点托管服务，可以从GitHub上获取html、css和js文件，发布一个网站。

## 具体步骤
### vuepress快速上手
```
# 创建项目目录blog-demo
mkdir blog-demo && cd blog-demo

# 初始化项目
npm init -y

# 本地安装VuePress
npm install -D vuepress

# 新建一个docs文件夹
mkdir docs

# 新建一个markdown文件
echo '# test' > docs/README.md
```
在package.json中添加
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
运行如下命令，启动一个服务器
```
npm run docs:dev
```
默认情况下，文件将会被生成在 .vuepress/dist，目录如下所示
<img src="/images/静态文件.png" style="width:400px" >

访问<http://localhost:8080/>查看博客运行结果
<img src="/images/8080.png" style="width:600px">

### 部署
1. 在github上新建项目vuepress-demo
2. 在本地项目blog-demo根目录中创建deloy.sh文件
```shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:<username>/vuepress-blog.git master:gh-pages

cd -
```
3. 运行deploy.sh脚本，查看github，vuepress生成的静态文件上传成功
<img src="/images/结果.png" style="width:600px" >

4. github上setting中设置github pages
<img src="/images/pages.png" style="width:600px" >

6. 访问上图中的地址，部署成功。


