// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })


const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = {
  plugins: [createVuePlugin()],
  server: {
    host: "0.0.0.0"
  }
};