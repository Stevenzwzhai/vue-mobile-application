<template>
    <div id='list'>
        <keep-alive>
          <component :is="currentView" @changeView="change" :data-list="list" :currency-list="currencyList">
            <!-- 非活动组件将被缓存！ -->
          </component>
        </keep-alive>
    </div>
</template>

<script>

import MainList from "./Main.vue"
import DialogChose from './Dialog.vue'

export default{
    
    mounted(){
        
    },
    data(){
        return {
            currentView:'MainList',
            list:[],
            currencyList:[]
        }
    },
    methods:{
        change (view) {
            this.currentView = view;
        }
    },
    components:{
        MainList,
        DialogChose
    },
    
}
</script>

<style>
    
</style>
