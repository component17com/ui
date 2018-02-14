<template>
    <div>
        Главная
        <lkHeader></lkHeader>
        <listModules></listModules>
    </div>
</template>

<script>
    export default {
        components: {
            lkHeader: require('../components/LKheader').default,
            listModules: require('../components/listModules').default,
        }
    }
</script>

<style scoped>

</style>