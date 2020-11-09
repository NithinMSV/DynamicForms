<template>
    <div>
    <b-form-select v-model="selected" :options="prefixes"></b-form-select>
    <div class="mt-2">Selected: {{ selected }}</div>
    <b-form-input v-model="labeltext" placeholder="Give a title"></b-form-input>
    <div class="mt-2">Label Created: {{ labeltext }}</div>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Name Entered: {{ text }}</div>
  </div>
</template>

<script>
export default {
    name: 'name',
    data() {
      return {
        labeltext: '',
        text: '',
        selected: null,
        prefixes: [
          {text:'Please choose a prefix', value: null},
          {text:'Mr', value: 'Mr'},
          {text:'Mrs', value:'Mrs'}, 
          {text:'Ms', value:'Ms'},
          {text:'Dr', value:'Dr'},
          {text:'Hon', value:'Hon'},
          {text:'Capt', value:'Capt'},
          {text:'Chief', value:'Chief'},
          {text:'Cmdr', value:'Cmdr'},
          {text:'Col', value:'Col'},
          {text:'Maj', value:'Maj'},
          {text:'Lt Col', value:'Lt Col'}
          ]
      }
    }
}
</script>

<style lang="scss" scoped>

</style>