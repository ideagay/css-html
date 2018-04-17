<template>
    <div class="demo">
        <h2>schedule-circle</h2>
        <p>环形进度</p>
        <div class="demo text-center">
            <svg :width="sWidth" :height="sHeight" class="schedule-circle">
                <circle :r="r" :cx="cx" :cy="cy" fill="none" class="circle1"></circle>
                <circle :r="r" :cx="cx" :cy="cy" fill="none" class="circle2" ref="circle2"></circle>
                <text :x="cx + 10" :y="cy + 15" class="text">{{step}}%</text>
            </svg>
            <h3>
            设置百分比 : <input v-model="percent" @change="init(percent)"/>
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'schedule-circle',
    data () {
        return {
            sWidth: 120,
            sHeight: 120,
            cx: 0,
            cy: 0,
            percent: 60,
            r: 40,
            step: 0
        };
    },
    methods: {
        init (percent) {
            let perimeter = Math.PI * 2 * 40;
            this.step = 0;
            let timer = setInterval(() => {
                this.step++;
                this.$refs.circle2.setAttribute('stroke-dasharray', `${perimeter * this.step / 100} ${(1 - this.step / 100) * perimeter}`);
                if (this.step === +percent) {
                    clearInterval(timer);
                }
            }, 20);
        }
    },
    mounted () {
        this.cx = this.sWidth / 2;
        this.cy = this.sHeight / 2;
        this.$nextTick(() => {
            this.init(this.percent);
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import '~src/assets/less/basic.less';
    .schedule-circle{
        .circle1,.circle2{
            stroke-width: 4px;
            stroke-linecap: round;
        }
        .circle1{
            stroke: #eee;
        }
        .circle2{
            stroke: @primary;
            //stroke-dasharray: 0 318;
            // animation: schedule 2s ease-in-out;
            transform: rotate(-90deg);
            transform-origin: 60px 60px;
            animation-fill-mode: forwards;
        }
        .text{
            transform: translate(-50%, -50%);
        }
        @keyframes schedule{
            0% {
                stroke-dasharray: 0 316;
            }
            100% {
                stroke-dasharray: 300 15;
            }
        }
    }
</style>
