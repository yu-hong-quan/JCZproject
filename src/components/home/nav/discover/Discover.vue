<template>
    <div id="Discover">
        <ul class="Discover_ul">
            <li v-for="(item,key) in axiosData" :key="item+key">
                <img class="Img" :src="item.cover" alt="">
                <p style="font-size:14px;">{{item.title}}</p>
                <p><span>{{item.mallName}}</span><span>{{item.pubDate}}</span></p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'Discover',
        data(){
            return {
                axiosData:[],
            }
        },
        mounted() {
            this.$http.get('http://localhost:3000/api/home?sectionId=2&pageNo=1&pageSize=25')
            .then((resp)=>{
                this.axiosData = resp.data.data;
            });
        },
    }
</script>

<style scoped>
    #Discover{
         margin-top: 5.5rem;
        width:100%;
        margin-bottom: 3.6rem;
    }
    .Discover_ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .Discover_ul>li{
        width: 50%;
        background: #fff;
        box-sizing: border-box;
        text-align: center;
        padding-bottom: 10px;
    }
    .Discover_ul>li>p{
        margin-top: 15px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .Discover_ul>li>p:nth-child(3){
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        color: #888;
        font-size: 12px;
    }
    .Img{
        width: 90%;
    }
</style>