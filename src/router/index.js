// import Vue from 'vue'
import Router from 'vue-router'

const getOpenId = () =>
    import ('../pages/getOpenId.vue')
const login = () =>
    import ('../pages/login.vue')

const index = () =>
    import ('../pages/index.vue')
const Daykeliu = () =>
    import ('../pages/MainData/Daykeliu.vue')
const StoreDayCharts = () =>
    import ('../pages/MainData/StoreDayCharts.vue')
const DayKeliuList = () =>
    import ('../pages/MainData/DayKeliuList.vue')
const home = () =>
    import ('../pages/home.vue')

const StoresManage = () =>
    import ('../pages/StoresManage.vue')
const HeatChart = () =>
    import ('../pages/HeatChart.vue')
const portrait = () =>
    import ('../pages/portrait.vue')
const BillsManage = () =>
    import ('../pages/BillsManage.vue')
const DataExports = () =>
    import ('../pages/DataExports.vue')

const Helps = () =>
    import ('../pages/Helps.vue')
const Definitions = () =>
    import ('../pages/Helps/Definitions.vue')
const Questions = () =>
    import ('../pages/Helps/Questions.vue')
const FirstSet = () =>
    import ('../pages/Helps/FirstSet.vue')
const Suggest = () =>
    import ('../pages/Helps/Suggest.vue')
const AgainSet = () =>
    import ('../pages/Helps/AgainSet.vue')
const WebGuide = () =>
    import ('../pages/Helps/WebGuide.vue')

const Contacts = () =>
    import ('../pages/Contacts.vue')

const Score = () =>
    import ('../pages/portrait/Score.vue')
const Live = () =>
    import ('../pages/portrait/Live.vue')
const ComeGo = () =>
    import ('../pages/portrait/ComeGo.vue')
const Area = () =>
    import ('../pages/portrait/Area.vue')
const Appinfo = () =>
    import ('../pages/portrait/Appinfo.vue')

Vue.use(Router);
const router = new Router({
    // mode:'history',
    routes: [{
            path: '/getOpenId',
            name: 'getOpenId',
            component: getOpenId
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            children: [{
                path: 'Daykeliu',
                name: 'Daykeliu',
                component: Daykeliu
            }, {
                path: 'StoreDayCharts',
                name: 'StoreDayCharts',
                component: StoreDayCharts
            }, {
                path: 'DayKeliuList',
                name: 'DayKeliuList',
                component: DayKeliuList
            }]
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/portrait',
            name: 'portrait',
            component: portrait,
            children: [{
                path: 'Score',
                component: Score
            }, {
                path: 'Live',
                component: Live
            }, {
                path: 'ComeGo',
                component: ComeGo
            }, {
                path: 'Area',
                component: Area
            }, {
                path: 'Appinfo',
                component: Appinfo
            }]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/StoresManage',
            name: 'StoresManage',
            component: StoresManage
        },
        {
            path: '/HeatChart',
            name: 'HeatChart',
            component: HeatChart
        },
        {
            path: '/BillsManage',
            name: 'BillsManage',
            component: BillsManage
        },
        {
            path: '/DataExports',
            name: 'DataExports',
            component: DataExports
        },
        {
            path: '/Contacts',
            name: 'Contacts',
            component: Contacts
        },


        {
            path: '/Helps',
            name: 'Helps',
            component: Helps,
            children: [{
                path: 'Definitions',
                component: Definitions
            }, {
                path: 'Questions',
                component: Questions
            }, {
                path: 'FirstSet',
                component: FirstSet
            }, {
                path: 'AgainSet',
                component: AgainSet
            }, {
                path: 'Suggest',
                component: Suggest
            }, {
                path: 'Suggest',
                component: Suggest
            }, {
                path: 'WebGuide',
                component: WebGuide
            }]
        }
    ]
})
export default router;