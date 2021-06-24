import { createApp } from './main'
import { renderToString } from '@vue/server-renderer';

export async function render(url: string) {
  const { app, router } = createApp()
  router.push(url);
  await router.isReady();
  const matchedRoute = router.currentRoute.value.matched
  const matchedComponents = [];
  matchedRoute.map((route) => {
    matchedComponents.push(...Object.values(route.components));
  });
  const ctx = {}
  const html = await renderToString(app, ctx)
  return { html };
}
