import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// import permission from './modules/permission';
import getters from './getters'
// import { createLSPlugin } from 'plugin/vuex-autorestore'
import createWebSocketPlugin from 'plugin/vuex-websocket'
import ls from '@/utils/localStorage'

const LS_KEY = 'user' // localStorage key
const lsData = ls.getItem(LS_KEY) // 获取本地数据
// const mapping = {
//   user: ['uid', 'uname', 'email', 'Access-Token', 'ID-Token'] // 需要保存的键名
// }
// const mWhiteList = [] // mutation 白名单

if (lsData) {
  // const { user: ls_user } = lsData
  // Object.assign(user, { state: lsData.val }) // 将本地数据恢复到 state
  Object.assign(user, { state: lsData })
}

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
    // permission
  },
  getters,
  plugins: [
    // createLSPlugin(LS_KEY, mapping, mWhiteList),
    createWebSocketPlugin()
  ]
})

export default store
