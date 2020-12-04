<template>
    <div class="CompCrtr">
        <CCnav />
        <router-view></router-view>
    </div>
</template>

<script>
import CCnav from "../Nav/ccnav";

export default {
    name: 'CCLayout',
    components: {
        CCnav
    }
}
</script>

<style lang="scss" scoped>
.CompCrtr {
    position: relative;
}
</style>