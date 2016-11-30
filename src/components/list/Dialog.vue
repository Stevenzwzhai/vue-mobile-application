<template>
	<div class="dialog">
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="list">
		  	<li>
		  		<p class="title">
		  			基础设置
		  		</p>
		  		<mt-checklist title="多选" v-model="settle" :options="settleList" align="right"></mt-checklist>
		  	</li>
		  	<li>
		  		<p class="title">
		  			显示类别 
		  			<span v-text="type"></span>
		  		</p>
		  		<mt-radio title="单选" v-model="type" :options="typeList" align="right"></mt-radio>
		  	</li>
		  	<li>
		  		<p class="title">
		  			币别
		  			<span v-text="currency"></span>
		  		</p>
		  		<mt-radio title="单选" v-model="currency" :options="currencys" align="right"></mt-radio>
		  	</li>
		</ul>
		<div class="footer">
			<div class="btn">
				<mt-button size="large" type="default" @click="cancle">取消</mt-button>
			</div>
			<div class="btn">
				<mt-button size="large" type="primary" @click="sure">确定</mt-button>
			</div>
			
		</div>
	</div>
</template>

<script>
import API from '../../api/API'
const api = new API();
export default{
	beforeMount(){
		let that = this;
        //获取货币列表
        api.getCurrency({})
            .then(function(res){
                let data = JSON.parse(res.data.DataJson).Data.datalist;
                that.currencyList= data;
            })
            .catch(err=>{
                console.log(err);
            });
	},
	data(){
		return {
			settle:[],
			settleList:['包括未过账凭证', '包括余额为零的科目', '包括没有业务发生的科目'],
			type:'',
			typeList:['全部', '资金类', '往来类','成本类','期间费用'],
			currency:'',
			currencyList:[]
		}	
	},
	// props:['currencyList'],
	computed:{
		currencys (){
			return this.currencyList.map(item=>{
				return item.fname;
			})
		}
	},
	methods:{
		loadMore() {
  			this.loading = true;
  		},
  		cancle(){
  			this.$emit('changeView','MainList');
  		},
  		sure(){
  			this.$emit('changeView','MainList');
  		}
	}
}
</script>
<style>
	.dialog{
		position:absolute;
		z-index:100;
		top:0;
		bottom: 0;
		width:100%;
		background: #fff;
		font-size: 0.3rem;
	}
	.dialog .title{
		line-height: 0.8rem;
		background-color: #f1f1f1;
    	padding-left: .2rem;
    	margin:0;
	}
	.dialog .list{
		margin-bottom: 0.9rem;
	}
	.dialog .footer{
		height:0.9rem;
		width:100%;
		position:fixed;
		bottom:0;
		z-index: 100;
		background: #fff;
		line-height: 0.9rem;
		text-align: center;
	}
	.dialog .footer .btn{
		width:30%;
		display: inline-block;
		padding:0 5%;
	}
</style>