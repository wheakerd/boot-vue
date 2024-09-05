import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "node:path";
import {fileURLToPath, URL} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'BootstrapVueLib',
            fileName: (format) => `bootstrap-vue-lib.${format}.js`,
        },
        rollupOptions: {
            external: [
                'vue',
                'bootstrap',
            ],
            output: {
                globals: {
                    vue: 'Vue',
                    bootstrap: 'Bootstrap',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});