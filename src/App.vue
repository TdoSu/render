<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">editor</router-link> |
            <router-link to="/container1">render-page1</router-link> |
            <router-link to="/container2">render-page2</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="stylus">
    #app
        font-family Avenir, Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50
        margin-top 60px
</style>
