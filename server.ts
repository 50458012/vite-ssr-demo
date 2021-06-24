import { render } from  './dist/server/server-entry'
import fs from 'fs'
import path from 'path'
import Koa from 'koa'
const resolve = (p: string) => path.resolve(__dirname, p);
const staticPath = require('koa-static');
const startServer = async() => {
  const app = new Koa()
  app.use(staticPath(resolve('./dist/client'), { index: false }));
  app.use(async (ctx) => {
    debugger
    const url = ctx.originalUrl
    try {
      let template = fs.readFileSync(resolve('./dist/client/index.html'), 'utf-8');
      const { html } = await render(url)
      ctx.status = 200
      ctx.type = 'text/html; charset=UTF-8'
      ctx.body = template.replace(`<div id="app"></div>`, `<div id="app">${html}</div>`)
    }  catch (err) {
      ctx.status = 500
      ctx.message = err.message
    }
  })
  app.listen(3008, () => {
    console.log(`Server listening on http://localhost:3008`)
  })
  return app
}



export default startServer()

