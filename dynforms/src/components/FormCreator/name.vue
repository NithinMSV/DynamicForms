<template>
    <div>
    <b-form-select v-model="selected" :options="prefixes"></b-form-select>
    <div class="mt-2">Selected: {{ selected }}</div>
    <b-form-input v-model="save.namelabel" :placeholder="labelplaceholder" :disabled="!isEditing"
           :class="{view: !isEditing}"></b-form-input>
    <div class="mt-2">Textbox Name Entered: {{ save.namelabel }}</div>
     <b-button variant="outline-primary" class="mb-2" @click="isEditing = !isEditing" v-if="!isEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="nameLabelSave" variant="outline-primary" class="mb-2" v-else-if="isEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="nameLabelCancel" variant="outline-warning" v-if="isEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Name Entered: {{ text }}</div>
  </div>
</template>

<script>
export default {
    name: 'name',
    data() {
      return {
        save: {
          namelabel: ''
        },
        isEditing: false,
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
    },
    mounted() {
    this.cachedLabel = Object.assign({},this.save);
  },
  methods: {
    nameLabelSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isEditing = false;
    },
    nameLabelCancel() {
      this.save = Object.assign({}, this.cachedLabel);
      this.isEditing = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
</style>