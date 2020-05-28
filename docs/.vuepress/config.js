module.exports = {
    base:'/vuepress-blog/',
    title:'博客',
    description:'my blog',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/miaomiaoji/vuepress-blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: '', link: '/' },
            { text: '', link: '/' }
        ],
        sidebar: [
            ['./pages/blog_vuepress.md', 'VuePress构建个人博客'],
            ['/', '我的第一篇博客']
          ]
    }
}