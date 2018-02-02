<template>
    <div class="mu">
        <yd-slider>
            <yd-slider-item>
                <ul>
                    <li v-for="(item,index) in page1" :key="index">
                        <img :src="item.url">
                        <span>{{item.name}}</span>
                    </li>
                    
                </ul>
            </yd-slider-item>
            <yd-slider-item>
                <ul>
                    <li v-for="(item,index) in page2" :key="index">
                        <img :src="item.url">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </yd-slider-item>
        </yd-slider>
        <div class="banner"><img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt=""></div>
    </div>
    
</template>
<script>
export default {
    name: "Vml",
    data () {
        return {
            page1:[
                {name:'美食',url:'//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'下午茶',url:'//fuss10.elemecdn.com/8/a5/78332f1f7ff14afbb97b4f125911cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'商超便利',url:'//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'果疏生鲜',url:'//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'大牌五折',url:'//fuss10.elemecdn.com/6/74/785eafaf358fa6b18df37c64c3510jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'医药健康',url:'//fuss10.elemecdn.com/b/e1/58aa34ef194d216c9f2328f603588jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'浪漫鲜花',url:'//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'麻辣烫',url:'//fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'}
            ],
            page2:[
                {name:'大牌五折',url:'//fuss10.elemecdn.com/6/74/785eafaf358fa6b18df37c64c3510jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'下午茶',url:'//fuss10.elemecdn.com/8/a5/78332f1f7ff14afbb97b4f125911cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},                
                {name:'美食',url:'//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'浪漫鲜花',url:'//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'},
                {name:'麻辣烫',url:'//fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'}
                
            ]
        }
    }
}
</script>
<style scoped>
.mu{
    padding-bottom: 0.2rem;
    background-color: #fff;
    margin-bottom: 0.2rem;
}
.mu ul{
    padding: 0.3rem 0 0.7rem 0;
    overflow: hidden;
}
.mu li{
    width:25%;
    float: left;
    text-align: center;
}
.mu li img{
    width:1rem;
    display: inline
}
.mu li span{
    display: block;
}
.banner{
    text-align: center;
}
.banner img{
    width:6.5rem;
}

</style>