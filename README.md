
This Repository is an example of a bug in about.tsx cannot find a variable named "__default__" after the SSR model is built
1.  npm run  install
2.  npm run build
2.  npm start

The /dist/server/server-entry.js  will will have this code

const __moduleId = "/Users/klook/project/vite-demo/vite-project/src/pages/about.tsx";
ssrRegisterHelper(__default__, __moduleId);
var about$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": about
});

after /node_modules/@vitejs/plugin-vue-jsx/index.js Replace with /plugin-vue-jsx.js
1.  npm run build
2.  npm start

The bug has been fixed

