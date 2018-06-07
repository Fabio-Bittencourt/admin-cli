import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Usuario from '../components/user/Usuario.vue'
import userForm from '../components/user/userForm.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Dashboard },
  {path: '/meus-dados-cadastrais', component: Usuario,
    children: [
      {path: '/minha-conta-listo', component: userForm},
      {path: '/editar-cadastro', component: userForm}
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})

