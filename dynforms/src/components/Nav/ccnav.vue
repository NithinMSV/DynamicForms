<template>
    <div class="ccnav">
        <router-link class="link" to="/">
        <p class="h4 mb-2"><b-icon icon="arrow-left-circle-fill"
        variant="primary"></b-icon> BACK TO HOME</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CCNavigation',
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
.ccnav {
    position: relative;
    height: 50px;
    background-color: black;
    h1 {
        color: white;
    }
}

.link {
    position: absolute;
    top: 20%;
    left: 10%;
    text-decoration: none;
}

</style>