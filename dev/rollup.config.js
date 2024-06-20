import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
export default defineConfig({
  input: './dev/rollup.js',
  output: {
    file: 'dist/sober.min.js',
    format: 'umd',
    sourcemap: false,
    name: 'sober'
  },
  plugins: [nodeResolve(), uglify()]
})


// dev/rollup.config.js 