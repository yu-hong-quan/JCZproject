<template>
    <div class="Navwapper">
        <ul class="NavwapperUl">
            <li v-for="(item,key) in Datas" 
                :key="item+key" 
                @click="provViewShow(item,key)" 
                ref="list"
                :class="neaxtHash === item.path?'active':''">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'Nav',
        data(){
            return {
                neaxtHash:'/Handbpick',
                Datas:[
                    {path:'/Home/Handpick',name:'精选',title:'精选'},
                    {path:'/Home/Favorable',name:'优惠',title:'优惠'},
                    {path:'/Home/OlineShopping',name:'海淘',title:'海淘'},
                    {path:'/Home/Discover',name:'发现',title:'发现'},
                    {path:'/Home/Original',name:'原创',title:'原创'}
                ],
            }
        },
        methods:{
            provViewShow(item,key){
                let List = this.$refs.list;
                for(var i=0;i<List.length;i++){
                    List[i].className="";
                }
                List[key].className="active";
                this.$router.push({path:item.path})
            }
        },
        mounted() {
            let List = this.$refs.list;
            List[0].className="active"
        },
        created() {
            this.neaxtHash = window.location.hash.substring(1);
            console.log(this.neaxtHash)
             
        },
    }
</script>

<style scoped>
    .Navwapper{
        position: absolute;
        top: 11rem;
        left: 0;
        right: 0;
        width: 100%;
        background: #fff;
        font-size: 14px;
        margin-top:30px;
    }
    .NavwapperUl{
        width: 100%;
        height: 3.1rem;
        display: flex;
        box-sizing: border-box;
    }
    .NavwapperUl>li{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    .active{
        color: red;
        border-bottom: 1px solid red;
    }
</style>