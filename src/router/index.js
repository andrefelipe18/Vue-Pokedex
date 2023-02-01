import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HabilidadesComponent from '@/components/HabilidadesComponent.vue'
import SobreComponent from '@/components/SobreComponent.vue'
import StatusComponent from '@/components/StatusComponent.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'habilidades', component: HabilidadesComponent
      },
      {
        path: 'sobre', component: SobreComponent
      },
      {
        path: 'status', component: StatusComponent
      }
    ]
  },
  {
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
