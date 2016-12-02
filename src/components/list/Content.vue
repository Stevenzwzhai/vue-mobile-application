<template>
	<div class="content">
        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul class="list">
                <li v-for="item in list" class="default-icon-more">
                    <router-link :to="'/detail/'+item.faccountid">
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
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
   </div>
</template>

<script>
import API from '../../api/API'
const api = new API();
import { Indicator } from 'mint-ui'
import {Toast} from 'mint-ui'

export default{
	beforeMount(){
		Indicator.open({
            text: '加载中...',
            spinnerType: 'triple-bounce'
        });
        let that = this;
        //获取信息列表
        let response = api.getList({ "StartYear": "2016", "EndYear": "2016", "StartPeriod": "02", "EndPeriod": "02", "CurrencyID": "1", "AcctLevel": "1", "StartAccount": "", "EndAccount": "", "keyword": "", "userid": "19394", "bUnposted": "1", "bViewItem": "0", "bNoUnUsed": "1", "bNoZeroBal": "1", "acctgroupname": "全部" });
        console.log(response);
        response.then(function(res){
                let data = JSON.parse(res.data.DataJson).Data.datalist;
                Indicator.close();
                that.list = data;
            })
            .catch(function(err){
                console.log(err);
            });
	},
	data(){
		return {
			list:[],
			allLoaded:false
		}
	},
	methods:{
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
	.content{
        margin-top:1.9rem;
        /*position:relative;*/
    }

    .content .list {
        width: 100%;
        font-size: 0px;
    }
    .content .list li {
        background-size: 0.3rem 0.3rem;
        background-position: 98% center;
        padding: 0.1rem 0.46rem 0.1rem 0;
        border-bottom: solid 1px #e0e0e0;
        
    }
    .content .list li span {
                display: inline-block;
                box-sizing: border-box;
                padding: 0.1rem 0rem 0.1rem 0.1rem;
                vertical-align: top;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color:#000;
            }
    .content .list li .title1 {
                width: 60%;
                font-size: 15px;
            }
    .content .list li .title2 {
                width: 40%;
                font-size: 15px;
                text-align: right;
            }
    .content .list li .span1 {
                width: 21%;
                color: #848c93;
                font-size: 12px;
                vertical-align: top;
                letter-spacing: -0.01rem;
                padding: 0.1rem 0rem 0.1rem 0.1rem;
            }
    .content .list li .span2 {
                width: 29%;
                font-size: 13px;
                text-align: right;
                word-break: break-all;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                letter-spacing: -0.01rem;
                padding: 0.1rem 0rem;
            }
</style>