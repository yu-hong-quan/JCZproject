<template>
    <div id="OlineShopping">
        <div id="Favorable">
            <div class="HandpickContenr">
                <ul class="HandpickContenr_ul">
                    <li v-for="(item,key) in axiosData" :key="item+key">
                        <div class="left">
                            <img class="ImgTwo" :src="item.cover" alt="">
                        </div>
                        <div class="right">
                            <p style="font-size:15px;">{{item.shortTitle}}</p>
                            <p style="color:red;font-size:14px;">{{item.price}}</p>
                            <p class="P">
                                <span>{{item.mallName}} | <span>{{item.pubDate}}</span>
                                </span>
                                <span><img src="111" alt="">123</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'OlineShopping',
        data(){
            return {
                axiosData:[],
            }
        },
        mounted() {
            this.$http.get('http://localhost:3000/api/home?sectionId=1&pageNo=1&pageSize=20')
            .then((resp)=>{
                this.axiosData = resp.data.data;
            });
        },
    }
</script>

<style scoped>
    #OlineShopping{
         margin-top: 5.5rem;
        width:100%;
        height:100%;
        margin-bottom: 3.6rem;
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