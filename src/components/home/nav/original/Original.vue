<template>
    <div id="Original">
        <ul>
            <li class="Li" v-for="(item,key) in axiosData" :key="item+key">
                <img class="Img" :src="item.hdCover" alt="">
                <div class="li_i">
                    <span>1312</span>
                    <span>
                        <p style="margin-top:3px;font-size:14px;">{{item.title}}</p>
                        <p style="font-size:12px;color:#888;">{{item.synopsis}}</p>
                        <p style="display:flex;justify-content: space-between;font-size:12px;color:#888;"><span>{{item.createName}}</span><span>{{item.goodCount}}</span></p>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'Original',
        data(){
            return {
                axiosData:[],
            }
        },
        mounted() {
            this.$http.get('http://localhost:3000/api/home?sectionId=34&pageNo=1&pageSize=10')
            .then((resp)=>{
                this.axiosData = resp.data.data;
                console.log(this.axiosData)
            });
        },
    }
</script>

<style scoped>
    #Original{
        margin-top: 5.5rem;
        width:100%;
        background: #eee;
        margin-bottom: 3.6rem;
    }
    .Li{
        width: 100%;
        background: #fff;
        margin-bottom: 8px;
    }
    .Img{
        width: 100%;
        height: 60%;
        margin-bottom: -4.5px;
    }
    .li_i{
        width: 100%;
        height: 33%;
        display: flex;
    }
    .li_i>span{
        display: inline-block;
    }
    .li_i>span:nth-child(1){
        flex: 2;
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }
    .li_i>span:nth-child(2){
        flex: 10;
    }
    .Li .li_i p{
        margin-top: 6px;
        text-overflow: -o-ellipsi-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
    }
</style>