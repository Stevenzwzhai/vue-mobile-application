<template>
    <div id='main'>
        <div class="header">
            <div class="search">
                <mt-search v-model="value" placeholder="科目名称代码|核算项目名称代码"></mt-search>
            </div>
            <div class="date">
                <input type="text" class="date-picker" v-model="begindate" @click="openPicker('begin')" readonly="readonly">
                <span>至</span>
                <input type="text" class="date-picker" v-model="enddate" @click="openPicker('end')" readonly="readonly">
                <mt-button type="primary" size="small" @click="changeAction">高级</mt-button>
            </div>
        </div>
        <ContentList></ContentList>
        <mt-datetime-picker v-model="pickerVisible" ref="picker" type="date"  year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm">
        </mt-datetime-picker>

    </div>
</template>

<script>
import ContentList from './Content.vue'

export default {
    beforeMount(){
        
    },
    data () {
        return {
            value: '',
            pickerVisible:new Date(),
            pickerBegin:new Date(),
            pickerEnd:new Date(),
            currentPicker:null,
            isDialog:false
        }
    },
    // props:['dataList'],
    watch:{
        
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
    },
    components:{
        ContentList
    },
    methods:{
        openPicker(currentPicker) {
            this.$refs.picker.open();
            this.currentPicker = currentPicker;
        },
        handleConfirm () {
            let oldDate = new Date();
            this.currentPicker=="begin" ? (oldDate = this.pickerBegin,this.pickerBegin = this.pickerVisible) : (oldDate = this.pickerEnd,this.pickerEnd = this.pickerVisible);
            this.pickerBegin>this.pickerEnd?(Toast({
                                                  message: '开始日期大于结束日期',
                                                  duration: 2000
                                                }), this.currentPicker=="begin" ? this.pickerBegin=oldDate:this.pickerEnd=oldDate): null;
        },
        changeAction () {
            let view = "DialogChose";
            this.$emit('changeView', view);
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
    .hearder .mint-searchbar a{
        color:#fff !important;
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
