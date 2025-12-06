import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 项目仓库名，确保静态资源路径正确
  base: '/github-action/',
})
