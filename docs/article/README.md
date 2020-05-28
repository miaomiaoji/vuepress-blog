# VuePress构建个人博客
使用vuepress+github pages构建个人博客，使用官方文档过程中遇到很多问题，遂单独整理

## What is VuePress?
VuePress是一个静态网站生成器。

使用Markdown书写页面，[markdown-it](https://github.com/markdown-it/markdown-it)将其解析成HTML。Vue、Vue-Router和webpack合作构建一个单页应用，生成静态网站。
## What is github pages?
GitHub Pages是一个静态站点托管服务，可以从GitHub上获取html、css和js文件，发布一个网站。

## 快速上手
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
默认情况下,静态文件生成在 .vuepress/dist，目录类似如下所示
<img src="/vuepress-blog/images/静态文件.png" style="width:400px" >

访问<http://localhost:8080/>查看运行结果
<img src="/vuepress-blog/images/8080.png" style="width:600px">

### 部署
1. 在github上新建项目vuepress-blog
2. 在本地项目blog-demo根目录下创建deploy.sh文件
```shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入静态文件的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push origin 本地分支:远端希望创建的分支
git push -f git@github.com:<username>/vuepress-blog.git master:gh-pages

cd -
```
3. 运行deploy.sh脚本，查看github，生成的静态文件上传成功<br>

  <img src="/vuepress-blog/images/结果.png" style="width:600px;margin-top:10px;" >

4. github上setting中设置github pages

  <img src="/vuepress-blog/images/pages.png" style="width:600px;margin-top:10px;" >

6. 访问上图中的地址，访问成功即部署成功。

整体流程和最主要的功能已经完成，在此基础上添加页面和其他功能。

## Yaml语法
VuePress支持YAML语法形式的Markdown,官方文档示例的[首页](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)
```

```

## vuepress踩坑
### 侧边栏和导航栏
这里遇到的坑最多。为了实现VuePress官网类似的侧边栏，并且在选择不同的导航栏之后可以显示不同的侧边栏。

最好的例子是VuePress官方文档本身的[config.js源码](https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js)。

**每个页面必须有且仅有一个一级标题**
```markdown
# 一级标题
```
由于各种理由，个人很少使用一级标题，markdown文件都没有一级标题，于是侧边栏花费了很长时间，这一点官方文档也没有明确说明。

**导航栏中路径不能写完全的路径**
```markdown
nav: [{
    text: '指南',
    link: '/zh/guide/'
    <!-- link:'/zh/guide/README.md'写法不行 -->
}]
```
VuePress官方文档示例

<img src="/vuepress-blog/images/config.png" style="">

### 静态资源路径

vuepress默认使用.vuepress/public存放静态资源(可以修改)，在config.js中base值会影响静态资源引用路径。
例如，config.js中设置了base
```js
module.exports = {
    base:'/vuepress-blog/',
    // ……
}
```
静态资源位置如下所示<br>

<img src="/vuepress-blog/images/path.png" style="width:400px;margin-top:10px;" >

引用资源路径如下所示
```html
<!-- .md文件 -->
<img src="/vuepress-blog/images/path.png"  >
```
当前能看得到图片，就说明成功
> 一个 base 路径一旦被设置，它将会自动地作为前缀插入到 .vuepress/config.js 中所有以 / 开始的资源路径中。
### 新的分支
这个例子中使用gh-pages分支来维护静态资源。

如果想在已有项目中增加一个说明文档/使用文档，使用VuePress(静态网站生成器，hexo等生成器原理相同)生成静态文件(.vuepress/dist文件夹中的内容)，上传至一个新的分支gh-pages。

github pages基于该分支构建网站，与主分支master互不影响，并且需要维护的资源也少。

查看github-[vuepress-blog](https://github.com/miaomiaoji/vuepress-blog)，master分支负责维护博客源码，gh-pages分支提供给github pages构建网站。

### 更新github pages
每次修改完之后，运行deploy.sh文件。该文件生成新的静态文件，并更新至gh-pages分支，刷新网页即可查看更新后的效果

### 博客源码分支
可以查看push.sh文件，运行该脚本更新源码到master分支。
```shell
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 上传
git init
git add -A
git commit -m 'update'

# 上传源码部分到master分支
git push -f git@github.com:<USERNAME>/vuepress-blog.git master
```
根据实际需要增加分支


