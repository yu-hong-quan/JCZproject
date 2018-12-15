<template>
    <div id="shouye">
        <Swiper></Swiper>
        <Nav></Nav>
        <router-view/>
    </div>
</template>

<script>
    import Swiper from '@/components/home/swiper/Swiper'
    import Nav from '@/components/home/nav/Nav'
    export default{
        components:{Swiper,Nav}
    }
</script>

<style scoped>
    #shouye{
        width:100%;
        height:100%;
        background: #eee;
    }
</style>