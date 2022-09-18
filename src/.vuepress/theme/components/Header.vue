<template>
<v-app-bar
  :app="!$vuetify.breakpoint.mobile"
  :elevation="0"
  clipped-left
  dense>
  <!-- 目录按钮(折叠收缩菜单) -->
  <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
  <!-- 首页按钮 -->
  <!-- <v-btn
    depressed
    icon
    x-large
    @click="toRoot">
    <v-icon>mdi-home</v-icon>
  </v-btn> -->
  <v-spacer></v-spacer>
  <!-- 文档搜索组件 -->
  <!-- <doc-search></doc-search> -->
  <!-- 下拉菜单 -->
  <v-menu
    v-model="showMyProfile"
    :close-on-content-click="false"
    :max-width="300"
    offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="account-menu"
        large
        text
        @click="showMyProfile = !showMyProfile">
        <v-avatar class="mr-2" size="36">
          <img :src="require('../assets/images/me.png')" alt="mulinzi">
        </v-avatar>
        <span class="pl-1 pr-1">Andyyang</span>
        <!-- <span class="pr-11">&nbsp;</span>
        <span class="pr-11">&nbsp;</span> -->
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-card>
      <!-- <v-list>
        <v-list-item>
          <v-list-item-avatar class="white--text" color="primary">
            <span>A</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Andyyang</v-list-item-title>
            <v-list-item-subtitle>一天不动脑，心里不踏实！</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-at</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>
            <a href="Mailto:467675016@qq.com">467675016@qq.com</a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-home</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>深圳</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <div class="d-flex">
              <count-up
                ref="age"
                :autoStart="false"
                :duration="6"
                :endVal="9"
                :startVal="9">
              </count-up>
              <span>0后、阳光开朗、前端工程师</span>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>健身，写博客，看小说</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-currency-usd</v-icon>
          </v-list-item-avatar>
          <v-list-item-content style="overflow: visible">
            <v-btn
              block
              class="justify-start ml-n4"
              depressed
              @click="showReceivingQrCode = !showReceivingQrCode">
              喜欢我的，支持一下吧
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-expand-transition>
        <div v-show="showReceivingQrCode">
          <v-divider></v-divider>
          <img
            :src="require('../assets/images/AlipayQrCode.jpg')"
            alt="AlipayQrCode"
            class="receiving-qr-code mx-auto mt-4"/>
          <img
            :src="require('../assets/images/WechatQrCode.jpg')"
            alt="WechatQrCode"
            class="receiving-qr-code mx-auto"/>
        </div>
      </v-expand-transition>
    </v-card>
  </v-menu>
</v-app-bar>
</template>
<script>
// import DocSearch from './DocSearch.vue'

export default {
  // components: {
  //   DocSearch,
  // },
  data () {
    return {
      showMyProfile: false,
      showReceivingQrCode: false,
    }
  },
  watch: {
    'showMyProfile': {
      handler (val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.age.reset()
            const timer = setTimeout(() => {
              this.$refs.age.start()
              clearTimeout(timer)
            }, 400)
          })
        }
      },
      immediate: true,
    },
  },
  methods: {
    toRoot () {
      if (this.$route.path === '/') return
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.v-btn:not(.v-btn--round).v-size--large 
  padding: 0;

.account-menu
  // border-left: 1px solid #d4d4d4;
  // border-radius: inherit;

.v-list-item__subtitle
  white-space initial

.receiving-qr-code
  width 73%
  display: block

.v-list-item__avatar
  margin 0

.v-list-item__content
  padding 0

.v-list-item
  min-height unset
</style>
