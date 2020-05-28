module.exports = {
    base: '/vuepress-blog/',
    title: 'MiaoMiao的博客',
    description: ' ',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/miaomiaoji/vuepress-blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: '博文',
                items: [{
                    text: '构建博客',
                    link: '/article/'
                }, ]
            },
            {
                text: '笔记',
                link: '/notes/'
            }
        ],
        sidebar: {
            '/article/': [{
                    title: '博文',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ''
                    ]
                },
                {
                    title: '测试',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        'test',
                    ]
                }
            ],
            '/notes/': [{
                title: '笔记',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '',
                    'test',
                    'thePragmaticProgrammer'
                ]
            }],
            '/': [
                '',
            ]
        }
    }
}