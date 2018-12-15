<template>
    <div class="tabble-warpper">
        <ul>
            <li v-for="(item,key) in data" :key="item+key" @click="ShowChick(item,key)" ref="listChild">
                <p><i :class="item.icon" style="font-size:20px;"></i></p>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'Tabble',
        data(){
            return {
                data:[
                    {title:'首页',name:'首页',path:'/Home',icon:'iconfont icon-shouye'},
                    {title:'分类',name:'分类',path:'/Classify',icon:'iconfont icon-fenlei'},
                    {title:'我的',name:'我的',path:'/My',icon:'iconfont icon-wode'},
                ]
            }
        },
        methods:{
            ShowChick(item,key){
                let List = this.$refs.listChild;
                for(let j=0; j<List.length;j++){
                    List[j].style.color=""
                }
                List[key].style.color="red"
                this.$router.push({path:item.path})
            },
        },
        mounted() {
            let List = this.$refs.listChild;
            List[0].style.color="red";
        },
    }
</script>

<style scoped>
    .tabble-warpper{
        width:100%;
        height:45px;
        background:#eee;
        position:fixed;
        bottom:0;
        font-size:14px;
        border-top: 1px solid #ccc;
    }
    .tabble-warpper ul{
        width:100%;
        height:100%;
        display:flex;
    }
    .tabble-warpper ul>li{
        flex:1;
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
</style>