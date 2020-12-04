<template>
    <div class="DashView">
        <h1>Dashboard Layout</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DashLayout',
    components: {

    }
}
</script>

<style lang="scss" scoped>
.DashView {
    position: relative;
}
</style>