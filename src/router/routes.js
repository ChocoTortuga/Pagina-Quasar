
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home.vue') },
      { path: 'tabla', component: () => import('src/pages/Tabla.vue') },
      { path: 'form', component: () => import('pages/Formulario.vue') },
      { path: 'nada', component: () => import('pages/Nada.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
