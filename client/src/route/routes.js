const msite = ()=>import('../views/msite.vue') 
const login = ()=>import('../views/login.vue')

const home = ()=>import('../views/home.vue') 
const personalTrip = ()=>import('../views/personalTrip')

const travel = ()=>import('../views/travel.vue')
const history = ()=>import('../views/history.vue')
const historyDetail = ()=>import('../views/historyDetail.vue')


const user = ()=>import('../views/user.vue') 
const tripOverview = ()=>import('../views/tripOverview.vue')
const tripTrend = ()=>import('../views/tripTrend')
const tripAnalysis = ()=>import('../views/tripAnalysis')

const routes = [
    { path: '/', redirect:'/login' },
    { path: '/login', name: 'login', component: login},
    { path:'/msite', component: msite, children:[
        { path: '', redirect: '/home'},
        { path: '/home', name: 'home', component: home},
        { path: '/travel', name: 'travel', component: travel},
        { path: '/user', name:'user',component: user},
        { path: '/history', name:'history',component: history },
        { path: '/historyDetail/:id', name: "historyDetail", component: historyDetail}
    ]},
    { path: '/tripOverview', name: 'tripOverview', component: tripOverview},
    { path: '/tripTrend', name: 'tripTrend', component: tripTrend},
    { path: '/tripAnalysis', name: 'tripAnalysis', component: tripAnalysis},
    { path: '/personalTrip', name: 'personalTrip', component: personalTrip}
]
export default routes;