<template>
    <div class="w-100">
    <b-form-input :v-model="label" :placeholder="labelplaceholder"></b-form-input>
    <b-form-input :v-model="text" :placeholder="placeholder"></b-form-input>
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