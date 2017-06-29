import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import TablesView from './components/views/Tables.vue'
import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'APNIC',
        meta: []
      }, {
        path: 'tables',
        component: TablesView,
        name: 'Eastern Asia',
        meta: [
          { message: 'APNIC' }
        ]
      }, {
        path: 'tables/china',
        alias: '',
        component: DashboardView,
        name: 'CHINA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'tables/hongkong',
        alias: '',
        component: DashboardView,
        name: 'HONG KONG SPECIAL ADMINISTRATIVE REGION OF CHINA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'tables/japan',
        alias: '',
        component: DashboardView,
        name: 'JAPAN',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'tables/dkorea',
        alias: '',
        component: DashboardView,
        name: 'DEMOCRATIC PEOPLE%27 REPUBLIC OF KOREA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'tables/rkorea',
        alias: '',
        component: DashboardView,
        name: 'REPUBLIC OF KOREA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'tables/mongolia',
        alias: '',
        component: DashboardView,
        name: 'MONGOLIA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'tables/macao',
        alias: '',
        component: DashboardView,
        name: 'MACAO SPECIAL ADMINISTRATIVE REGION OF CHINA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'tables/taiwan',
        alias: '',
        component: DashboardView,
        name: 'TAIWAN',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'South-Eastern Asia',
        meta: [
          { message: 'APNIC' }
        ]
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Oceania',
        meta: [
          { message: 'APNIC' }
        ]
      }, {
        path: 'access',
        component: AccessView,
        name: 'Southern Asia',
        meta: [
          { message: 'APNIC' }
        ]
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers'}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
