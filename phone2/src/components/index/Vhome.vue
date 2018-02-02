<template>
    <section id="main">
        <Vml></Vml>
        <VshopList></VshopList>
    </section>  
</template>
<script>
import Vml from '../index/Vml'
import VshopList from '../shop/VshopList'

export default {
    name: "Vhome",
    data () {
        return {
        }
    },
    components: {
        Vml,
        VshopList
    }
}
</script>
<style scoped>


</style>