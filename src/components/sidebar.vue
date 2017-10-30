<template>
    <div class="side-bar">
        <router-link :to="item.path" v-for="(item, $index) in demos" :key="$index">{{item.name}} {{item.alias}}</router-link>
    </div>
</template>

<script>
import demos from '@/router/demos.json';

export default {
    name: 'sidebar',
    data () {
        return {
            demos: demos
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .side-bar {
        width: 200px;
        background-color: #fff;
        margin-right: 10px;
        border: 1px solid rgba(178,186,194,.15);
        a{
            line-height: 40px;
            padding: 0 8px;
            display: block;
            color: #999;
            border-bottom: 1px solid rgba(178,186,194,.15);
            &:hover{
                color: #666;
            }
        }
    }
</style>
