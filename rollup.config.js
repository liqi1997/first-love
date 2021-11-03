import typescript from '@rollup/plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'
import dts from 'rollup-plugin-dts'

export default [{
    input: 'src/index.ts',
    output: {
        dir: 'dist/',
        format: 'esm',
    },
    plugins: [
        typescript(),
        uglify()
    ]
}, {
    input: 'src/index.d.ts',
    output: {
        file: 'dist/index.d.ts',
        format: 'es'
    },
    plugins: [
        dts()
    ]
}]