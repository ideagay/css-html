// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import plugins from '@/assets/js/plugins';
import codeBox from '@/components/code-box';

Vue.config.productionTip = false;

Vue.use(plugins);
Vue.component('codeBox', codeBox);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
