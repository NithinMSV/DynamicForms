<template>
  <div class="landing">
    <div class="head">
        <h1>Complete forms in no time!</h1>
        <p>Save time by filling e-forms and recieve right away to your database.</p>
        <p>Fill, Create, Send & Recieve form data in minutes. Create forms by clicking here.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Welcome',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.landing {
    position: relative;
    height: 500px;
    background-color: gray;
}

.head {
    position: absolute;
    top: 20%;
    left: 10%;
    text-align: left;
}
</style>