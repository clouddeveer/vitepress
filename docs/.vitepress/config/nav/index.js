//导航栏
module.exports = [
    { text: '主页', link: '/', icon: 'reco-home' },
    {
        text: '文档',
        icon: 'reco-document',
        items: [
            { text: 'spring', link: '/java/spring/test1' },
            { text: 'springboot', link: '/java/springboot/' },
        ]
    },
    // {
    //     text: '关于我',
    //     icon: 'reco-message',
    //     items: [
    //         { text: '码云', link: 'https://gitee.com/wyw_miss', icon: 'reco-mayun' }
    //     ]
    // }
]