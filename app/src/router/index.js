import Vue from 'vue';
import Router from 'vue-router';
import BasicInfo from '../components/pages/BasicInfo.vue'
import Survey from '../components/pages/Survey.vue';
import Counseling from '../components/pages/Counseling.vue'
import Confirmation from '../components/pages/Confirmation.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/basic_info',
            name: 'BasicInfo',
            component: BasicInfo
        },
        {
            path: '/survey',
            name: 'Survey',
            component: Survey
        },
        {
          path: '/counseling',
          name: 'Counseling',
          component: Counseling
        },
        {
            path: '/confirming',
            name: 'Confirmation',
            component: Confirmation
        },
      ]
});