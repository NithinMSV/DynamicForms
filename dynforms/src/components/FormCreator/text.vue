<template>
<div class="container">
  <div class="row">
    <div class="col">
      <h3>Text Box Layout</h3>
      <p>{{save.label}}</p>
     <b-form-input v-model="textboxvalue" :placeholder="save.placeholder"></b-form-input>
    <div class="mt-2">Value: {{ textboxvalue }}</div>
    </div>
    <div class="col">
    <div class="w-100">
      <h3>Properties</h3>
      <b-form-checkbox
      id="textbox-required-checkbox"
      v-model="requiredstatus"
      name="textbox-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
    <b-form-input v-model="save.label" placeholder="Enter text box name" :disabled="!isLabelEditing"
           :class="{view: !isLabelEditing}"></b-form-input>
    <b-button variant="outline-primary" class="mb-2" @click="isLabelEditing = !isLabelEditing" v-if="!isLabelEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="labelSave" variant="outline-primary" class="mb-2" v-else-if="isLabelEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="labelCancel" variant="outline-warning" v-if="isLabelEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <div class="mt-2">Textbox Name Entered: {{ save.label }}</div>
    <b-form-input v-model="save.placeholder" placeholder="Enter placeholder value" :disabled="!isPlaceHolderEditing"
           :class="{view: !isPlaceHolderEditing}"></b-form-input>
    <b-button variant="outline-primary" class="mb-2" @click="isPlaceHolderEditing = !isPlaceHolderEditing" v-if="!isPlaceHolderEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="phSave" variant="outline-primary" class="mb-2" v-else-if="isPlaceHolderEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="phCancel" variant="outline-warning" v-if="isPlaceHolderEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <div class="mt-2">Textbox Name Placeholder: {{ save.placeholder }}</div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
      name: 'Textfield',
      data() {
        return{
          isLabelEditing: false,
          isPlaceHolderEditing: false,
          selected: '',
          requiredstatus: 'not_accepted',
          save: {
            label: 'Edit to rename me!',
            placeholder: 'Edit to rename me!'
          },
          textboxvalue: 'Edit to rename me!'
      }
  },
  mounted() {
    this.cachedLabel = Object.assign({},this.save);
    this.cachedPlaceholder = Object.assign({},this.save);
  },
  methods: {
    labelSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isLabelEditing = false;
    },
    labelCancel() {
      this.save = Object.assign({}, this.cachedLabel);
      this.isLabelEditing = false;
    },
    phSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isPlaceHolderEditing = false;
    },
    phCancel() {
      this.save = Object.assign({}, this.cachedLabel);
      this.isPlaceHolderEditing = false;
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

h3 {
  color: white;
}
</style>