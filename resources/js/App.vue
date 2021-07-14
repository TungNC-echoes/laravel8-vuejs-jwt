<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "App",
    };
</script>

<style lang="scss">
    body {
        margin: 0;
    }
    #app {
        font-family: Roboto, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #4f4f4f;
        font-size: 14px;
        background-color: #f5f7fa;
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .footer,
    .header {
        padding: 20px 20px;
        color: #f0f4f8;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1,
        h2,
        h3 {
            color: #f0f4f8;
            padding: 0;
            margin: 0;
        }
        .version {
            font-family: "Open Sans";
            padding: 0 10px;
            color: #9fb3c8;
            font-size: 12px;
            margin-top: 5px;
        }
    }
    .header {
        padding: 10px 20px;
        .logo {
            font-family: "Open Sans";
            letter-spacing: 3px;
            padding-top: 15px;
            padding-bottom: 15px;
        }
        .logo .part-2 {
            color: #d64545;
        }
    }
</style>

