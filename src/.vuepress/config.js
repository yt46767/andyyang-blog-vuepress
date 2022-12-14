const resolve = dir => require('path').join(__dirname, dir)
const sideNav = require('./util/sideNav.js')
const isProd = process.env.NODE_ENV === 'production'
const baiduAnalytics = require('./plugins/baiduAnalytics')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  // temp: './src/.vuepress/temp/',
  // tempPath: './temp/',
  base: '/andyyang-blog-vuepress/',
  dest: resolve('../../dist'),
  title: 'andy的博客',
  description: 'My note space build with vuepress',
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { content: 'IE=edge', ['http-equiv']: 'X-UA-Compatible' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: 'rgba(255, 255, 255, 0.95)' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/andyyang-blog-vuepress/icons/icon-152x152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/andyyang-blog-vuepress/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'preconnect', href: 'https://ZHEDSTO6YB-dsn.algolia.net', crossorigin: true }],
  ],
  markdown: {
    lineNumbers: false, // 是否显示行号，默认为false
  },
  shouldPrefetch: () => false, // 要适配移动端，不开启prefetch
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@assets', resolve('../assets'))
    config.recordsPath(resolve('../../records.json')) // https://segmentfault.com/a/1190000015919928
    if (!isServer) {
      // config.optimization.runtimeChunk(true)
      config.optimization.splitChunks({
        chunks: 'all',
        minSize: 20000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: { // // vuepress 每次打包都会变化，不知道为什么
            name: 'chunk-default',
            test: /[\\/]node_modules[\\/](?!@vuepress)(.*)/,
            priority: -10,
            reuseExistingChunk: true,
          },
          // vuetify: {
          //   name: 'chunk-vuetify',
          //   priority: -8,
          //   test: /[\\/]node_modules[\\/]vuetify[\\/]/,
          //   reuseExistingChunk: true,
          // },
          // vuepress: { // vuepress 这样子的写法会导致 css 顺序不正确
          //   name: 'chunk-vuepress',
          //   priority: -8,
          //   test: /[\\/]@vuepress[\\/]/,
          //   reuseExistingChunk: true,
          // },
          default: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      })
      if (isProd) {
        config.plugin('extract-css').tap(args => {
          return [{
            filename: 'assets/css/styles.[contenthash:8].css',
          }]
        })

        // config.plugin('analyze').use(BundleAnalyzerPlugin,
        //   [{
        //     analyzerMode: 'static',
        //     reportFilename: '../report.html',
        //   }],
        // )
      }
    }
  },
  themeConfig: {
    sideNav,
    enablePrevAndNext: true,
    author: {
      name: 'mulinzi',
    },
  },
  plugins: [
    // 文件会根据git提交的最后时间，得到this.$site.pages[n].lastUpdated。如果文件是新建没有提交，this.$site.pages[n]就没有lastUpdated属性。
    [
      '@vuepress/last-updated',
      {
        transformer: timestamp => timestamp,
      },
    ],
    'vuepress-plugin-nprogress',
    [
      'demo-code',
      {
        showText: '显示代码',
        hideText: '隐藏代码',
        minHeight: 0,
        onlineBtns: {
          codepen: true,
          jsfiddle: false,
          codesandbox: false,
        },
        demoCodeMark: 'demo',
        copyOptions: false,
      },
    ],
    // [
    //   '@vssue/vuepress-plugin-vssue',
    //   // yt46767/note 必须为公开库
    //   {
    //     // set the platform api
    //     // api: GiteeV5,
    //     // platform: 'gitee',
    //     platform: 'github',
    //     owner: 'yt46767',
    //     repo: 'andyyang-blog-vuepress',
    //     prefix: '[comment]',
    //     clientId: 'bcc03f8171b13e2105b4',
    //     clientSecret: '692d64b96f86a154780fc591e77cba6c25b31bc6',
    //     autoCreateIssue: isProd,
    //   },
    // ],
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     'ga': 'UA-96097921-2',
    //   },
    // ],
    baiduAnalytics,
    [ // 打包方式影响
      '@vuepress/pwa',
      {
        popupComponent: 'MySWUpdatePopup',
        updatePopup: {
          message: '作者又有了新的笔记哟，点击刷新查看',
          buttonText: '刷新',
        },
      },
    ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.frontmatter.title,
        description: $page => $page.frontmatter.description,
        tags: $page => $page.frontmatter.tags,
        author: (_, $site) => $site.themeConfig.author,
        twitterCard: _ => '',
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    ['container', {
      type: 'tip',
      defaultTitle: '提示',
      before: info => `<v-alert color="primary" text icon="mdi-lightbulb-multiple">${info}\n`,
      after: () => '</v-alert>\n',
    }],
    ['container', {
      type: 'alert',
      defaultTitle: '警告',
      before: info => `<v-alert type="warning" text icon="mdi-alert-outline">${info}\n`,
      after: () => '</v-alert>\n',
    }],
    ['container', {
      type: 'table',
      before: () => '<simple-table>\n',
      after: () => '</simple-table>\n',
    }],
  ],
}
