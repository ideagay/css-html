<template>
    <div class="demos">
        <navbar></navbar>
        <div class="container">
            <sidebar></sidebar>
            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '@/components/sidebar.vue';
import navbar from '@/components/navbar.vue';

export default {
    name: 'demos',
    data () {
        return {};
    },
    components: {
        sidebar,
        navbar
    },
    mounted () {
        this.setBodyBg('#f4f5f5');
    },
    destroyed () {
        this.setBodyBg('');
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .demos {
        .container{
            display: flex;
            min-height: 800px;
        }
        .content{
            flex: 1;
            background-color: #fff;
            border: 1px solid rgba(178,186,194,.15);
            padding: 20px;
        }
        .demo{
            h2{margin-bottom: 10px};
            p{margin-bottom: 40px};
        }
    }
</style>
