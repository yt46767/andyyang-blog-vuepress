<template>
<v-app-bar
  :app="!$vuetify.breakpoint.mobile"
  :elevation="0"
  clipped-left
  dense>
  <!-- 目录按钮(折叠收缩菜单) -->
  <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
  <v-spacer></v-spacer>
  <!-- 文档搜索组件 -->
  <doc-search></doc-search>
  <!-- 下拉菜单 -->
  <v-menu
    v-model="showMyProfile"
    :close-on-content-click="false"
    :max-width="300"
    offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        large
        text
        @click="showMyProfile = !showMyProfile">
        <v-avatar class="mr-2" size="36">
          <img :src="require('../assets/images/me.png')" alt="mulinzi">
        </v-avatar>
        <span>Andyyang</span>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar class="white--text" color="primary">
            <span>A</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Andyyang</v-list-item-title>
            <v-list-item-subtitle>一天不动脑，心里不踏实！</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
              <span>0后阳光开朗男孩，前端一枚</span>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>爬山，旧地旅行，钓鱼，晒女友</v-list-item-content>
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
            :src="require('../assets/images/receivingQrCode.jpg')"
            alt="receivingQrCode"
            class="receiving-qr-code"/>
        </div>
      </v-expand-transition>
    </v-card>
  </v-menu>
</v-app-bar>
</template>
<script>
import DocSearch from './DocSearch.vue'

export default {
  components: {
    DocSearch,
  },
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
}
</script>
<style lang="stylus" scoped>
.v-list-item__subtitle
  white-space initial

.receiving-qr-code
  width 100%

.v-list-item__avatar
  margin 0

.v-list-item__content
  padding 0

.v-list-item
  min-height unset
</style>
