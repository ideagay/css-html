<template>
    <div class="demo">
        <h2>graded</h2>
        <p>移动渐变实现光线移动效果</p>
        <div class="demo animated-background">
            <div class="item-1"></div>
            <div class="item-2"></div>
            <div class="item-3"></div>
            <div class="item-4"></div>
            <div class="item-5"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    data () {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .animated-background{
        width: 400px;
        height: 40px;
        position: relative;
        background-color: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #e1e1e1 18%, #eeeeee 33%);
        background-size: 800px 104px;
        animation: placeHolderShimmer 1s linear infinite;
        .item-1{
            background-color: #fff;
            height: 12px;
            left: 40px;
            width: 10px;
            top: 0;
            position: absolute;
        }
        .item-2{
            background-color: #fff;
            height: 8px;
            left: 40px;
            width: 360px;
            top: 12px;
            position: absolute;
        }
        .item-3{
            background-color: #fff;
            height: 8px;
            left: 40px;
            width: 10px;
            top: 20px;
            position: absolute;
        }
        .item-4{
            background-color: #fff;
            height: 8px;
            right: 0;
            width: 100px;
            top: 20px;
            position: absolute;
        }
        .item-5{
            background-color: #fff;
            height: 28px;
            right: 0;
            width: 360px;
            top: 28px;
            position: absolute;
        }
        @keyframes placeHolderShimmer{
            0% {
                background-position: -400px 0
            }
            100% {
                background-position: 400px 0
            }
        }
    }
</style>
