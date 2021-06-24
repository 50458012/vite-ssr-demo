import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes: Object.entries(import.meta.glob('./pages/*.(vue|tsx|ts)')).map(([path, component]) =>  ({
      path: path.slice(7).replace(/\..+$/, '').toLowerCase(),
      component
    }))
  })
}