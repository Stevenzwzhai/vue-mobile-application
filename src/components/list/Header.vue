<template>
	<div class="header">
        <div class="search">
            <mt-search v-model="value" cancel-text="取消" placeholder="科目名称代码|核算项目名称代码"></mt-search>
        </div>
        <div class="date">
            <input type="text" class="date-picker" v-model="begindate" @click="openPicker('begin')" readonly="readonly">
            <span>至</span>
            <input type="text" class="date-picker" v-model="enddate" @click="openPicker('end')" readonly="readonly">
            <mt-button type="primary" size="small" @click="changeAction">高级</mt-button>
        </div>
    </div>
</template>

<script>
	export default{
		data(){
			return {
				pickerVisible:new Date(),
				pickerBegin:new Date(),
				pickerEnd:new Date(),
				currentPicker:null
			}
		},
		computed:{
			begindate () {
            let pickerDate = this.pickerBegin;
            return pickerDate.getFullYear()+"年"+parseInt(parseInt(pickerDate.getMonth())+1)+"期"
	        },
	        enddate () {
	            let pickerDate = this.pickerEnd;
	            return pickerDate.getFullYear()+"年"+parseInt(parseInt(pickerDate.getMonth())+1)+"期"
	        }
		}
	}
</script>

<style>
	.header{
        height:1.8rem;
        top: 0;
        right: 0;
        left: 0;
        position: fixed;
        z-index: 1;
        -webkit-box-align: center;
        align-items: center;
        background-color: #26a2ff;
        box-sizing: border-box;
        color: #fff;
        
        white-space: nowrap;

    }
    .header .mint-search{
        height:100% !important;
    }
    .header .mint-searchbar{
        background-color:#26a2ff; 
    }
    .search{
        height:0.9rem;
    }
    .date{
        height: 0.6rem;
        line-height: 0.1rem;
        padding: 0.1rem;
        text-align: center;
    }
    .date-picker{
        width:34%;
        height:0.4rem;
        line-height: 0.5rem;
        text-align: center;
        outline:none;
        border:1px solid #48b993;
        border-radius:0.4rem;
        display: inline-block;
        padding:0.1rem;
    }
</style>