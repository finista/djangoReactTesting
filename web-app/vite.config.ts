import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [react()],
    experimental: {
      renderBuiltUrl(filename) {
        return process.env.APP_URL + filename;
      }
    }
  }
})
