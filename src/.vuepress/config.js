const resolve = dir => require('path').join(__dirname, dir)
const sideNav = require('./util/sideNav.js')
const isProd = process.env.NODE_ENV === 'production'
const baiduAnalytics = require('./plugins/baiduAnalytics')
// import the api package for specific platform
// const GiteeV5 = require('@vssue/api-gitee-v5')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  // base: '/my-blog-vuepress2/',
  dest: resolve('../../docs'),
  title: 'Andyyang的笔记空间',
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
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
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

        config.plugin('analyze').use(BundleAnalyzerPlugin,
          [{
            analyzerMode: 'static',
            reportFilename: '../report.html',
          }],
        )
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
    [
      '@vssue/vuepress-plugin-vssue',
      // yt46767/note 必须为公开库
      {
        // set the platform api
        // api: GiteeV5,
        // platform: 'gitee',
        platform: 'github',
        owner: 'yt46767',
        repo: 'note',
        prefix: '[comment]',
        clientId: 'b470d603ce3c78d55ced990a97b6cfa0c02c9ad5123939698631d3feb4d055b4',
        clientSecret: '2ce9350ef0400b2c3ee2c08b4b4ff488abe3d6c8e30b9bf36310a47c812a19e0',
        autoCreateIssue: isProd,
      },
    ],
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
