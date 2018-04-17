import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home';
import demos from '@/views/demos';
import loading from '@/components/loading';
import graded from '@/components/graded';
import scheduleCircle from '@/components/schedule-circle';
import modMore from '@/components/mod-more';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: home
        },
        {
            path: '/demos',
            name: 'Demos',
            component: demos,
            children: [
                {
                    path: 'loading',
                    component: loading
                },
                {
                    path: 'graded',
                    component: graded
                },
                {
                    path: 'schedule-circle',
                    component: scheduleCircle
                },
                {
                    path: 'mod-more',
                    component: modMore
                }
            ]
        }
    ]
});
