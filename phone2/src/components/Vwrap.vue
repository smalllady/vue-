<template>
    <div id="wraper">
        <Vheader></Vheader>
        <router-view></router-view>
        <Vfooter></Vfooter>
    </div>
</template>
<script>
import Vheader from '../components/header/Vheader'
import Vfooter from '../components/footer/Vfooter'
export default {
    name: "Vwrap",
    data () {
        return {
        }
    },
    components: {
        Vheader,
        Vfooter
    }
}
</script>
<style scoped>
</style>