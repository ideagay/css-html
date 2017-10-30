<template>
    <div class="code-box">
        <div class="box"><slot name="html"></slot></div>
        <div class="box"><slot name="css"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'codeBox',
    data () {
        return {
        };
    }
};
</script>

<style lang="less">
    @import '~src/assets/less/basic.less';
    .code-box {
        display: flex;
        .box{
            width: 45%;
            height: 200px;
            margin-right: 20px;
            textarea{
                border: 1px solid rgba(178,186,194,.15);
                border-radius: 4px;
                width: 100%;
                height: 100%;
                padding: 10px;
            }
        }
    }
</style>
