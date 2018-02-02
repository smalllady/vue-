<template>
<div id="wraper">
    <Vheader></Vheader>
    <section id="main">
        <div class="error">
            <img src="../../../static/images/error.png" alt="" />
            <h1 class="tc">
                页面找不到了
            </h1>
        </div>
    </section>
<Vfooter></Vfooter>
</div>

</template>
<script>
import Vheader from '../header/Vheader';
import Vfooter from '../footer/Vfooter';
export default {
    name: "Verror",
    data () {
        return {
        }
    },
    components: {
        Vfooter,
        Vheader
    }
}
</script>
<style scoped>
#main{
    background: #fff
}
.error{
    width:100%;
}
.error img{
    width:100%;
    margin-top: 1rem
}
.error h1{
    font-size: 20px
}
</style>