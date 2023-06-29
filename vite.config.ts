import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from 'path';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [vue(), viteCompression()],
    base: process.env.NODE_ENV === 'production' ? '/' : '', // 设置打包路径
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            assets: resolve(__dirname, 'src/assets'),
            view: resolve(__dirname, 'src/view'),
            comp: resolve(__dirname, 'src/components'),
            utils: resolve(__dirname, 'src/utils'),
            page: resolve(__dirname, 'src/page'),
            api: resolve(__dirname, 'src/api'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve('src/style/index.less')}"`,
                },
            },
        },
    },
    build: {
        chunkSizeWarningLimit: 500,
        // 压缩
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // 打包时删除console
                drop_debugger: true, // 打包时删除 debugger
                pure_funcs: ['console.log'],
            },
            output: {
                // 去掉注释内容
                comments: false,
            },
        },
        // 进行压缩计算
        brotliSize: false,
        cssCodeSplit: true,
        // 拆分三方包
        rollupOptions: {
            output: {
                // 拆分第三方包为单独文件，避免vendor.js文件大小，降低引入第三包组件的js大小
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3001,
        proxy: {
            '/api': {
                target: 'https://www.example.com/',
                changeOrigin: true, // 跨域设置
                secure: false,
                rewrite: (paths:any) => paths.replace(/^\/api/, '/'),
            },
        },
    },
});
