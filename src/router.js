import Vue from 'vue'
import Router from 'vue-router'
import MapView from './views/MapView'
import AnalogLine from './views/AnalogLine'
import PlanGraph from './views/PlanGraph'
import VideoSurveilance from './views/VideoSurveilance'
import EleAnys from './views/ElectricAnalysis'
import LineLoss from './views/LineLoss'
import EventAlert from './views/EventAlert'
import SampleGraph from '@/views/sample-graph'
import GISMap from '@/views/GIS-map'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'map-view',
      component: MapView
    },
    {
      path: '/sample-graph/:id',
      name: 'sample-graph',
      component: SampleGraph,
      children: [{
        path: 'analog-line',
        name: 'analog-line',
        component: AnalogLine
      }, {
        path: 'plan-graph',
        name: 'plan-graph',
        component: PlanGraph
      }, {
        path: 'GIS-map',
        name: 'GIS-map',
        component: GISMap
      }]
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