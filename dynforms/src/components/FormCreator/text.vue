<template>
<div class="wrapper">
    <div class="w-100">
    <b-form-input v-model="label" :placeholder="labelplaceholder"></b-form-input>
    <div class="mt-2">Textbox Name Entered: {{ label }}</div>
    <b-form-select v-model="selected" value-field="text" :options="options"></b-form-select>
    <div>Selected options: <strong>{{ selected }}</strong></div>
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
          selected: '',
          label: '',
          text: '',
          options: [
          { value: null, text: 'Please select an option' },
          { value: 'text', text: 'String' },
          { value: 'number', text: 'Telephone' },
        ]
      }
  }
  }
</script>

<style lang="scss" scoped>
</style>