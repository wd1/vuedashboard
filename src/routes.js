import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import ChildDashboardView from './components/views/ChildDashboard.vue'
import TablesView from './components/views/Tables.vue'
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
        path: 'EasternAsia',
        component: TablesView,
        name: 'Eastern Asia',
        meta: [
          { message: 'APNIC' }
        ]
      }, {
        path: 'EasternAsia/china',
        alias: '',
        component: ChildDashboardView,
        name: 'CHINA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'EasternAsia/hongkong',
        alias: '',
        component: ChildDashboardView,
        name: 'HONG KONG SPECIAL ADMINISTRATIVE REGION OF CHINA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'EasternAsia/japan',
        alias: '',
        component: ChildDashboardView,
        name: 'JAPAN',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'EasternAsia/dkorea',
        alias: '',
        component: ChildDashboardView,
        name: 'DEMOCRATIC PEOPLE%27S REPUBLIC OF KOREA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'EasternAsia/rkorea',
        alias: '',
        component: ChildDashboardView,
        name: 'REPUBLIC OF KOREA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'EasternAsia/mongolia',
        alias: '',
        component: ChildDashboardView,
        name: 'MONGOLIA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'EasternAsia/macao',
        alias: '',
        component: ChildDashboardView,
        name: 'MACAO SPECIAL ADMINISTRATIVE REGION OF CHINA',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'EasternAsia/taiwan',
        alias: '',
        component: ChildDashboardView,
        name: 'TAIWAN',
        meta: [
          {message: 'APNIC'},
          {message: 'Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia',
        component: TablesView,
        name: 'South-Eastern Asia',
        meta: [
          { message: 'APNIC' }
        ]
      }, {
        path: 'SouthEasternAsia/brunei',
        alias: '',
        component: ChildDashboardView,
        name: 'BRUNEI DARUSSALAM',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/cocos',
        alias: '',
        component: ChildDashboardView,
        name: 'COCOS AND KEELING ISLANDS',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/christmas',
        alias: '',
        component: ChildDashboardView,
        name: 'CHRISTMAS ISLAND',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/indonesia',
        alias: '',
        component: ChildDashboardView,
        name: 'INDONESIA',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/cambodia',
        alias: '',
        component: ChildDashboardView,
        name: 'CAMBODIA',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/lao',
        alias: '',
        component: ChildDashboardView,
        name: 'LAO PEOPLE%27 DEMOCRATIC REPUBLIC',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/myanmar',
        alias: '',
        component: ChildDashboardView,
        name: 'MYANMAR',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/malaysia',
        alias: '',
        component: ChildDashboardView,
        name: 'MALAYSIA',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/philippines',
        alias: '',
        component: ChildDashboardView,
        name: 'PHILIPPINES',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/singapore',
        alias: '',
        component: ChildDashboardView,
        name: 'SINGAPORE',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/thailand',
        alias: '',
        component: ChildDashboardView,
        name: 'THAILAND',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/timor',
        alias: '',
        component: ChildDashboardView,
        name: 'TIMOR-LESTE',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'SouthEasternAsia/vietnam',
        alias: '',
        component: ChildDashboardView,
        name: 'VIETNAM',
        meta: [
          {message: 'APNIC'},
          {message: 'South-Eastern Asia'}
        ]
      }, {
        path: 'Oceania',
        component: TablesView,
        name: 'Oceania',
        meta: [
          { message: 'APNIC' }
        ]
      }, {
        path: 'Oceania/american',
        alias: '',
        component: ChildDashboardView,
        name: 'AMERICAN SAMOA',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/australia',
        alias: '',
        component: ChildDashboardView,
        name: 'AUSTRALIA',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/cook',
        alias: '',
        component: ChildDashboardView,
        name: 'COOK ISLANDS',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/fiji',
        alias: '',
        component: ChildDashboardView,
        name: 'FIJI',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/micronesia',
        alias: '',
        component: ChildDashboardView,
        name: 'MICRONESIA (FEDERATED STATES OF)',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/guam',
        alias: '',
        component: ChildDashboardView,
        name: 'GUAM',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/kiribati',
        alias: '',
        component: ChildDashboardView,
        name: 'KIRIBATI',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/marshall',
        alias: '',
        component: ChildDashboardView,
        name: 'MARSHALL ISLANDS',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/northern',
        alias: '',
        component: ChildDashboardView,
        name: 'NORTHERN MARIANA ISLANDS',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/new',
        alias: '',
        component: ChildDashboardView,
        name: 'NEW CALEDONIA',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/norfolk',
        alias: '',
        component: ChildDashboardView,
        name: 'NORFOLK ISLAND',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/nauru',
        alias: '',
        component: ChildDashboardView,
        name: 'NAURU',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/niue',
        alias: '',
        component: ChildDashboardView,
        name: 'NIUE',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/zealand',
        alias: '',
        component: ChildDashboardView,
        name: 'NEW ZEALAND',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/french',
        alias: '',
        component: ChildDashboardView,
        name: 'FRENCH POLYNESIA',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/papua',
        alias: '',
        component: ChildDashboardView,
        name: 'PAPUA NEW GUINEA',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/pitcairn',
        alias: '',
        component: ChildDashboardView,
        name: 'PITCAIRN',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/palau',
        alias: '',
        component: ChildDashboardView,
        name: 'PALAU',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/solomon',
        alias: '',
        component: ChildDashboardView,
        name: 'SOLOMON ISLANDS',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/territories',
        alias: '',
        component: ChildDashboardView,
        name: 'FRENCH SOUTHERN TERRITORIES',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/tokelau',
        alias: '',
        component: ChildDashboardView,
        name: 'TOKELAU',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/tonga',
        alias: '',
        component: ChildDashboardView,
        name: 'TONGA',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/tuvalu',
        alias: '',
        component: ChildDashboardView,
        name: 'TUVALU',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/vanuatu',
        alias: '',
        component: ChildDashboardView,
        name: 'VANUATU',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/wallis',
        alias: '',
        component: ChildDashboardView,
        name: 'WALLIS AND FUTUNA ISLANDS',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'Oceania/samona',
        alias: '',
        component: ChildDashboardView,
        name: 'SAMOA',
        meta: [
          {message: 'APNIC'},
          {message: 'Oceania'}
        ]
      }, {
        path: 'SouthernAsia',
        component: TablesView,
        name: 'Southern Asia',
        meta: [
          { message: 'APNIC' }
        ]
      }, {
        path: 'SouthernAsia/afghanistan',
        alias: '',
        component: ChildDashboardView,
        name: 'AFGHANISTAN',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
        ]
      }, {
        path: 'SouthernAsia/bangladesh',
        alias: '',
        component: ChildDashboardView,
        name: 'BANGLADESH',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
        ]
      }, {
        path: 'SouthernAsia/bhutan',
        alias: '',
        component: ChildDashboardView,
        name: 'BHUTAN',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
        ]
      }, {
        path: 'SouthernAsia/india',
        alias: '',
        component: ChildDashboardView,
        name: 'INDIA',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
        ]
      }, {
        path: 'SouthernAsia/british',
        alias: '',
        component: ChildDashboardView,
        name: 'BRITISH INDIAN OCEAN TERRITORY',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
        ]
      }, {
        path: 'SouthernAsia/sri',
        alias: '',
        component: ChildDashboardView,
        name: 'SRI LANKA',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
        ]
      }, {
        path: 'SouthernAsia/maldives',
        alias: '',
        component: ChildDashboardView,
        name: 'MALDIVES',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
        ]
      }, {
        path: 'SouthernAsia/nepal',
        alias: '',
        component: ChildDashboardView,
        name: 'NEPAL',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
        ]
      }, {
        path: 'SouthernAsia/pakistan',
        alias: '',
        component: ChildDashboardView,
        name: 'PAKISTAN',
        meta: [
          {message: 'APNIC'},
          {message: 'Southern Asia'}
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
