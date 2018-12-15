<template>
    <div id="Swiper">
        <ul class="itemUl">
                <div class="swiper-container">
                    <div class="swiper-wrapper" >
                        <div class="swiper-slide" v-for="(item,key) in img" :key="item+key">
                            <img :src="item.imageUrl" alt="" class="Img">
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                <div class="swiper-pagination">123123</div>
            </div>
        </ul>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
export default{
    name:'Swiper',
    data(){
        return {
            img:[],
        }
    },
    methods:{

    },
    mounted() {
        this.$http.get('http://localhost:3000/zh-cn/api/focus')
        .then((resp)=>{
            this.img=resp.data.focus;
            console.log(this.img)
        });
        var mySwiper=new Swiper('.swiper-container',{
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要滚动条
            autoplay : 3000,
　　　　　　 autoplayDisableOnInteraction : false,

            observer:true,
            observeParents:true,
        });
    },
}
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    #Swiper{
        width:100%;
        background:rgba(0, 0, 0, 0.5);
        overflow: hidden;
    }
    .itemUl{
        width:100%;
        height:11rem;
    }
    .Img{
        width:100%;
        height:11rem;
    }
    .swiper-pagination,.swiper-pagination-bullets{
        width: 100%;
    }
    .swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{
        /* bottom: -20px; */
        position: absolute;
        z-index: 9999;
    }
    .swiper-container,.swiper-container-horizontal{
        overflow: visible;
    }
</style>