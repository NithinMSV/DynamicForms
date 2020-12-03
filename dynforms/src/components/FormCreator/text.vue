<template>
<div class="container">
  <div class="row">
    <div id="tooltip-target-1" v-if="requiredstatus === 'accepted'">
      <p class="h3 mb-2"><b-icon icon="exclamation-circle-fill" animation="cylon" variant="danger"></b-icon></p>
    <b-tooltip target="tooltip-target-1" triggers="hover">
        You have chosen this field as mandatory
      </b-tooltip>
    </div>
    <div class="col-sm">
      <p>{{save.label}}</p>
     <b-form-input v-model="textboxvalue" :placeholder="save.placeholder"></b-form-input>
    <div class="mt-2">Value: {{ textboxvalue }}</div>
    </div>
    <div class="col-sm">
    <b-button id="show-btn" class="mt-2" v-b-modal.modal-scrollable variant="primary" @click="$bvModal.show('text-properties')">Set Properties</b-button>
  <b-modal 
  id="text-properties"
  header-bg-variant="primary"
  hide-footer>
    <template #modal-title>
      Properties
    </template>
    <div class="d-block text-center">
      <b-form-checkbox
      id="textbox-required-checkbox"
      v-model="requiredstatus"
      name="textbox-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
    <b-form-group label="Enter the Label name">
    <b-form-input v-model="save.label" placeholder="Enter text box name" :disabled="!isLabelEditing"
           :class="{view: !isLabelEditing}"></b-form-input>
    <b-button variant="outline-primary" class="mb-2" @click="isLabelEditing = !isLabelEditing" v-if="!isLabelEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="labelSave" variant="outline-primary" class="mb-2" v-else-if="isLabelEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="labelCancel" variant="outline-warning" v-if="isLabelEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <div class="mt-2">Textbox Name Entered: {{ save.label }}</div>
    </b-form-group>
    <b-form-group label="Enter the placeholder text">
    <b-form-input v-model="save.placeholder" placeholder="Enter placeholder value" :disabled="!isPlaceHolderEditing"
           :class="{view: !isPlaceHolderEditing}"></b-form-input>
    </b-form-group>
    <b-button variant="outline-primary" class="mb-2" @click="isPlaceHolderEditing = !isPlaceHolderEditing" v-if="!isPlaceHolderEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="phSave" variant="outline-primary" class="mb-2" v-else-if="isPlaceHolderEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="phCancel" variant="outline-warning" v-if="isPlaceHolderEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <div class="mt-2">Textbox Name Placeholder: {{ save.placeholder }}</div>
    </div>
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('text-properties')">Close</b-button>
  </b-modal>
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