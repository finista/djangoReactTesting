import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    root: "./client",
    plugins: [react()],
    experimental: {
      renderBuiltUrl(filename) {
        return process.env.APP_URL + filename;
      }
    },
    resolve: {
      alias: {
        "@imports": path.resolve(__dirname, "./imports"),
        "@public": path.resolve(__dirname, "./public"),
      }
    }
  }
})
