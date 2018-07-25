import Vue from 'vue'
import Router from 'vue-router'
import MapView from './views/MapView'
import AnalogLine from './views/AnalogLine'
import PlanGraph from './views/PlanGraph'
import VideoSurveilance from './views/VideoSurveilance'
import EleAnys from './views/ElectricAnalysis'
import LineLoss from './views/LineLoss'
import EventAlert from './views/EventAlert'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'map-view',
      component: MapView
    },
    {
      path: '/analogLine/:id',
      name: 'analog-line',
      component: AnalogLine
    }, {
      path: '/planGraph/:id',
      name: 'plan-graph',
      component: PlanGraph
    }, {
      path: '/videoes/:id',
      name: 'videoes',
      component: VideoSurveilance
    }, {
      path: '/eletricAnys/:id',
      name: 'eletric-anys',
      component: EleAnys
    }, {
      path: '/lineLoss/:id',
      name: 'line-loss',
      component: LineLoss
    }, {
      path: '/eventAlert/:id',
      name: 'event-alert',
      component: EventAlert
    }
  ]
})