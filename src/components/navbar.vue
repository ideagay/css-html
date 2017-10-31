<template>
    <nav class="nav-bar">
        <div class="container">
            <h1>css&html CODE</h1>
            <router-link :to="{path: '/'}">首页</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {
        };
    }
};
</script>

<style lang="less">
    @import '~src/assets/less/basic.less';
    .nav-bar {
        width: 100%;
        height: 60px;
        font-size: 16px;
        background-color: #fff;
        margin: 0 auto 20px auto;
        display: flex;
        border-bottom: 1px solid rgba(178,186,194,.15);
        h1{
            font-size: 16px;
            line-height: 60px;
            margin-right: 40px;
            color: @primary;
        }
        a{
            line-height: 60px;
            padding: 0 8px;
            margin-right: 10px;
            display: block;
        }
    }
</style>
