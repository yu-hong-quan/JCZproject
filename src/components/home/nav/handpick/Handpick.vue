<template>
    <div id="Handpick">
        <div class="Handpick_topShope">
            <ul class="Handpick_topShope_UL">
                <li v-for="(item,key) in axiosDataTwo" :key="item+key">
                    <span class="spanC">
                        <img :src="item.icon" alt="" class="imgD">
                    </span>
                </li>
            </ul>
        </div>
        <div class="HandpickContenr">
            <ul class="HandpickContenr_ul">
                <li v-for="(item,key) in axiosData" :key="item+key">
                    <div class="left">
                        <img class="ImgTwo" :src="item.value.cover" alt="">
                    </div>
                    <div class="right">
                        <p style="font-size:15px;">{{item.value.shortTitle}}</p>
                        <p style="color:red;font-size:14px;">{{item.value.price}}</p>
                        <p class="P">
                            <span>{{item.value.mallName}} | <span>{{item.value.pubDate | dateFrm}}</span>
                            </span>
                            <span><img src="111" alt="">123</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    export default{
        name:'Handpick',
        data(){
            return {
                axiosData:[],
                axiosDataTwo:[],
                monentData:''
            }
        },
        mounted() {
            this.$http.get('http://localhost:3000/api/home?sectionId=99&pageNo=1&pageSize=20')
            .then((resp)=>{
                this.axiosData = resp.data.listIndex;
            });
            this.$http.get('http://localhost:3000/api/home?sectionId=99')
            .then((resp)=>{
                this.axiosDataTwo = resp.data.sunplazaEntrys;
            });
        },
        filters:{
            dateFrm(el){
                
                return moment(el).format("mm"+"分钟之前");
            }
        },
    }
</script>

<style scoped>
    #Handpick{
        margin-top: 5rem;
        width:100%;
        height:100%;
        margin-bottom: 3.6rem;
    }
    .Handpick_topShope{
        width: 100%;
        height: 11rem;
        background: #fff;
        position: relative;
        top: 10px;
    }
    .Handpick_topShope_UL{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
    .Handpick_topShope_UL>li{
        width: 46%;
        height:37%;
        display:flex;
        overflow: hidden;
    }
    .imgD{
        width: 100%;
    }
    .spanC{
        width: 100%;
        height: 100%;
    }
    .spanC{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .HandpickContenr{
        width: 100%;
        margin-top: 18px;
        background: #fff;
    }
    .HandpickContenr_ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 3rem;
    }
    .HandpickContenr_ul>li{
        display: flex;
        border-bottom: 1px solid #eee;
    }
    .left{
        width:35%;
        height: 100%;
        padding: 10px;
    }
    .ImgTwo{
        width: 100%;
        height: 100%;
    }
    .right{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .P{
        color:#888;
        font-size:12px;
        display: flex;
        justify-content: space-between;
    }
</style>