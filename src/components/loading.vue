<template>
    <div class="demo">
        <h2>loading</h2>
        <p>纯css实现loading旋转</p>
        <div class="text-center" ref="svg">
            <svg width="200" height="200" class="loading-circle">
                <circle class="loading-path" r="40" cx="100" cy="100"></circle>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    data () {
        return {
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.loading-circle{
    animation: loading-rotate 2s linear infinite;
    margin: 0 auto;
}
.loading-path{
    stroke: #ffdc00;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: 160, 300;
    stroke-dashoffset: 0;
    fill: none;
    animation: loading-dash 1.5s ease-in-out infinite;
    animation-fill-mode: forwards
}
@keyframes loading-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes loading-dash {
    0% {
        stroke-dasharray: 1, 300;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 160, 300;
        stroke-dashoffset: -90;
    }
    75% {
        stroke-dasharray: 160, 300;
        stroke-dashoffset: -120;
    }
    100% {
        stroke-dasharray: 160, 300;
        stroke-dashoffset: -160;
    }
}
</style>
