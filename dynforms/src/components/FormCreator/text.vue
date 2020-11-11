<template>
<div class="wrapper">
    <div class="w-100">
    <b-form-input v-model="label" :placeholder="labelplaceholder"></b-form-input>
    <div class="mt-2">Textbox Name Entered: {{ label }}</div>
    <b-form-input v-model="text" :placeholder="placeholder"></b-form-input>
    <div class="mt-2">Name Entered: {{ text }}</div>
    </div>
</div>
</template>

<script>
  export default {
      name: 'Textfield',
      props: ['placeholder','labelplaceholder'],
      data() {
        return{
          label: '',
          text: ''
        }
      }
  }
</script>

<style lang="scss" scoped>
</style>