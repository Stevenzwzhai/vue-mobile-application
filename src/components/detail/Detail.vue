<template>
	<div class="detail">
        <div class="content">
            <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul class="list">
                    <li v-for="item in list" class="default-icon-more">
                        
                        <p>
                            <span class="title1">{{item.faccountname}}{{item.fcurrencynumber}}</span>
                            <span class="title2">借贷方向：{{parseInt(item.fdc)?"贷方":"借方"}}</span>
                        </p>
                        <p>
                            <span class="span1">期初余额：</span>
                            <span class="span2">{{item.fbeginbalancefor}}</span>
                            <span class="span1">期末余额：</span>
                            <span class="span2">{{item.fendbalancefor}}</span>
                        </p>
                        <p>
                            <span class="span1">本期借方：</span>
                            <span class="span2">{{item.fdebit}}</span>
                            <span class="span1">本期贷方：</span>
                            <span class="span2">{{item.fcredit}}</span>
                        </p>
                        
                    </li>
                </ul>
            </mt-loadmore>
       </div>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import API from '../../api/API'
const api = new API();
import { Indicator } from 'mint-ui'
	export default{
        beforeRouteEnter(to, from, next){
            console.log(12);
            
            next(vm=>{

                vm.getDetail (vm.$route.params.id)
                console.log(vm.$route.params.id);
            });
        },
		data(){
			return {
				list:[],
                allLoaded:true,
			}
		},
        methods:{
            getDetail (id) {
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'triple-bounce'
                });
                let that = this;
                //获取信息列表
                let param = { "StartYear": "2016", "EndYear": "2016", "StartPeriod": "02", "EndPeriod": "02", "CurrencyID": "1", "AcctLevel": "1", "StartAccount": "", "EndAccount": "", "keyword": "", "userid": "19394", "bUnposted": "1", "bViewItem": "0", "bNoUnUsed": "1", "bNoZeroBal": "1", "acctgroupname": "全部" };
                param.StartAccount = id;
                param.EndAccount = id;
                let response = api.getList(param);
                response.then(function(res){
                        if(!JSON.parse(res.data.DataJson).Data){
                            that.list = [];
                            Toast({
                              message: '无数据',
                              duration: 2000
                            });
                        }
                        let data = JSON.parse(res.data.DataJson).Data.datalist;
                        Indicator.close();
                        that.list = data;
                        console.log(that.list);
                    })
                    .catch(function(err){
                        console.log(err);
                        that.list = [];
                        Indicator.close();
                        Toast({
                              message: '无数据',
                              duration: 2000
                            });
                    });
            },
            loadTop (id){
                let that = this;
                let response = api.getList({ "StartYear": "2016", "EndYear": "2016", "StartPeriod": "02", "EndPeriod": "02", "CurrencyID": "1", "AcctLevel": "1", "StartAccount": "", "EndAccount": "", "keyword": "", "userid": "19394", "bUnposted": "1", "bViewItem": "0", "bNoUnUsed": "1", "bNoZeroBal": "1", "acctgroupname": "全部" });
                response.then(function(res){
                        // console.log('res');

                        let data = JSON.parse(res.data.DataJson).Data.datalist;
                        that.list = data;
                        that.$refs.loadmore.onTopLoaded(id);
                    })
                    .catch(function(err){
                        // console.log(err);
                    });
            },
            loadBottom () {

            },
            handleTopChange (status) {
                console.log(status);
            }
        }
	}
</script>

<style>
	.detail .content{
        margin:0;
    }
</style>