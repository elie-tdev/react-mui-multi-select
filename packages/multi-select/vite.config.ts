import fs from 'fs-extra'
import path from 'path'
import { defineConfig } from 'vite'

import reactRefresh from '@vitejs/plugin-react-refresh'

const {
  dependencies = {},
  peerDependencies = {},
  devDependencies = {},
} = fs.readJsonSync(path.join(process.cwd(), 'package.json'))

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@multi-select': path.resolve(__dirname, './lib'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'joujilib',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        ...Object.keys(peerDependencies),
      ],
      output: {
        globals: {
          react: 'React',
          '@mui/material': 'MaterialUI',
          '@mui/styles': 'MuiStyles',
          '@mui/system': 'MuiSystem',
          '@mui/types': 'MuiTypes',
          '@mui/utils': 'MuiUtils',
        },
      },
    },
  },
})
