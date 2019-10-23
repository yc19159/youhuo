<template>
    <div class="footer">
        <div class="footerBar">
            <ul>
                <li class="footerBarLi"><span>首页</span></li>
                <li class="footerBarLi"><span>送温暖</span></li>
                <li class="footerBarLi"><span>我的</span></li>
            </ul>
        </div>
    <div class="bottomLine"></div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 0.83rem;
    background-color: white;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    /* top: 0; */
}
.footerBar{
    width: 3.43rem;
    height: 0.36rem;
    /* background: blue; */
    margin: auto;
    margin-top: 0.08rem;
}
.footerBar ul .footerBarLi{
    float: left;
    box-sizing: border-box;
    width: 1.1rem;
    height: 0.36rem;
    margin-right: 0.04rem;
    border: 1px solid;
}
.footerBar ul .footerBarLi span{
    font-size: 0.14rem;
    font-family: "PingFangSC-Semibold";
    font-weight: 510;
    line-height: 0.36rem;
}
.footer .bottomLine{
     width: 1.33rem;
     height: 0.05rem;
     border-radius: 0.02rem;
     background: #000000;
     margin: auto;
     margin-top: 0.19rem;
}
</style>