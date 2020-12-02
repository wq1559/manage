import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

const instance = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/255617',
})

instance.defaults.timeout = 25000;

instance.interceptors.request.use(function(config) {
  return config;
}, function(config) {
  // Vue.message('请求出错');
  return config;
})

instance.interceptors.response.use(function(config) {
  return config;
}, function(config) {
  // Vue.message('请求成功');
  return config;
})

Vue.prototype.$axios = instance;

// router.beforeEach((to, from, next) => {
//   if(store.state.userInfo == '' && to.name !== 'Login'){
//     next('/login')
//   } else {
//     next();
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
