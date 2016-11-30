import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import List from './components/list/List.vue'
import Detail from './components/detail/Detail.vue'
Vue.use(VueRouter);
Vue.use(MintUI)


const routes = [
	
	{ path: '/', component: List },
	{ path: '/detail', component: Detail }
]

const router = new VueRouter({
  routes 
})

const app = new Vue({
	router,
	render:h=>h(App)
}).$mount('#app')

