<template>
    <div class="explain">
    <div class="exp-text">
        <h1>Watch our one minute video</h1>
        <p>We not only reduce time in data entry. But also saving trees by cutting paper.</p>
    </div>
    </div>
</template>

<script>
export default {
    name: 'explain'
}
</script>

<style lang="scss" scoped>
.explain {
    position: relative;
    height: 500px;
    background-color: cyan;
}

.exp-text {
    position: absolute;
    top: 20%;
    left: 10%;
    text-align: left;
}

</style>