import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Hello1 from '@/components/Hello1';
import Hello2 from '@/components/Hello2';
import notFind from '@/components/notFind';
Vue.use(Router);
export default new Router({
  	routes: [
    	{
      		path: '/',
      		name: 'HelloWorld',
      		component: HelloWorld
		},
		{
			path: '/hello1',
			name: 'Hello1',
			component: Hello1
		},
		{
			path: '/hello2',
			name: 'Hello2',
			component: Hello2
		},
		{
			path: '*',
			name: 'notFind',
			component: notFind
		}
  	]
});