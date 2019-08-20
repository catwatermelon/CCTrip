import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

//路由守卫进行前端拦截
router.beforeEach((to, from, next)=>{
    const isLogin = localStorage.getItem('token') ? true : false;
    if(to.path == '/login'){
        next();
    } else {    
        isLogin ? next() : next('/login');
    }
})
export default router;