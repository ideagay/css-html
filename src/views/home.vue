<template>
  <div class="home">
    <h1>welcome to css&html !</h1>
    <router-link to="demos">go to demos</router-link>
  </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '~src/assets/less/basic.less';
  .home{
    text-align: center;
    h1{
      color: @primary;
      margin: 40px 0 10px 0;
    }
    a{
      font-size: 16px;
    }
  }
</style>
