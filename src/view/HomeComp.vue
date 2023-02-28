<template>
    <div class="mid">
        <img style="width: 100px;" src="/logo.png" alt="">
        <h1>欢迎使用<a class="ye-cli" target="_blank" href="https://github.com/yc-cooding/ye-cli">ye-cli</a>搭建项目</h1>
        <h2>本项目基于vite+vue3</h2>
        <h2>常用库都已配置，只需安装依赖直接开发项目即可</h2>
        <a href="https://github.com/axios/axios" target="_blank">
            <h3>axios</h3>
        </a>
        <a href="https://github.com/zenorocha/clipboard.js" target="_blank">
            <h3>clipboard</h3>
        </a>
        <a href="https://echarts.apache.org/zh/index.html" target="_blank">
            <h3>echarts</h3>
        </a>
        <a href="https://element-plus.org/zh-CN/" target="_blank">
            <h3>element-plus</h3>
        </a>
        <a href="https://github.com/developit/mitt" target="_blank">
            <h3>mitt</h3>
        </a>
        <a href="https://github.com/vuejs/pinia" target="_blank">
            <h3>pinia</h3>
        </a>
        <a href="https://router.vuejs.org/" target="_blank">
            <h3>vue-router</h3>
        </a>
        <a href="https://lesscss.org/" target="_blank">
            <h3>less</h3>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <h3>typescript</h3>
        </a>
        <a href="https://eslint.org/" target="_blank">
            <h3>eslint</h3>
        </a>
    </div>
</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
.mid {
    text-align: center;
    padding-top: 100px;
    a.ye-cli:hover {
        color: rgb(44, 118, 255);
    }
    h1,
    h2 {
        color: #666;
        margin-bottom: 10px;
    }

    h3 {
        &:hover {
            color: rgb(44, 118, 255);
        }
        color: rgb(101, 155, 255);
        margin-bottom: 10px;
    }
}
</style>
