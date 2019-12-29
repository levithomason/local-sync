const path = require('path')
const { terser } = require('rollup-plugin-terser')

const makeOutput = (format, minify) => ({
  file: path.join(__dirname, 'dist', format, minify ? 'local-sync.min.js' : 'local-sync.js'),
  name: 'LocalSync',
  format,
  compact: !!minify,
  plugins: !!minify ? [terser()] : [],
  sourcemap: !!minify,
})

export default {
  input: 'src/LocalSync.js', // required
  //   plugins,
  //   cache,
  //   treeshake,

  output: [
    makeOutput('cjs'),
    makeOutput('cjs', true),
    makeOutput('esm'),
    makeOutput('esm', true),
    makeOutput('umd'),
    makeOutput('umd', true),
  ],
}
