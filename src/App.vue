<template>
    <div class="wrapper">

        <header-app></header-app>
        <menu-app></menu-app>

        <main class="main">
            <div class="container main-container">
                <router-view/>
            </div>
        </main>

        <footer-app></footer-app>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
            'header-app': require('./components/header/login').default,
            'footer-app': require('./components/footer/index').default,
            'menu-app': require('./components/menu/index').default,
        }
    }
</script>

<style src="./assets/css/main.css">

</style>
