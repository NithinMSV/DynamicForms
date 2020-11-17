<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h3>Text Box Layout</h3>
    <b-form-select v-model="selected" :options="prefixes"></b-form-select>
    <div class="mt-2">Selected: {{ selected }}</div>
    <span>{{save.namelabel}}</span><b-form-input v-model="text" :placeholder="placeholder.textplaceholder"></b-form-input>
    <div class="mt-2">Name Entered: {{ text }}</div>
      </div>
      <div class="col-sm">
        <h3>Properties</h3>
        <div>
    <b-form-checkbox
      id="prefix-checkbox"
      v-model="prefixstatus"
      name="prefix-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this add prefix.
    </b-form-checkbox>

    <div>State: <strong>{{ prefixstatus }}</strong></div>
      </div>
    <b-form-checkbox
      id="required-checkbox"
      v-model="requiredstatus"
      name="required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>

    <div>State: <strong>{{ requiredstatus }}</strong></div>
    <div>
      <b-form-input v-model="save.namelabel" placeholder="Enter text box name" :disabled="!isLabelEditing"
           :class="{labelview: !isLabelEditing}"></b-form-input>
    <div class="mt-2">Textbox Name Entered: {{ save.namelabel }}</div>
     <b-button variant="outline-primary" class="mb-2" @click="isLabelEditing = !isLabelEditing" v-if="!isLabelEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="nameLabelSave" variant="outline-primary" class="mb-2" v-else-if="isLabelEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="nameLabelCancel" variant="outline-warning" v-if="isLabelEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    </div>
    <div>
      <b-form-input v-model="placeholder.textplaceholder" placeholder="Enter placeholder text" 
      :disabled="!isPlaceHolderEditing"
      :class="{phview: !isPlaceHolderEditing}"></b-form-input>
    <div class="mt-2">Value: {{ placeholder.textplaceholder }}</div>
    </div>
    <b-button variant="outline-primary" class="mb-2" @click="isPlaceHolderEditing = !isPlaceHolderEditing" v-if="!isPlaceHolderEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="namePlaceholderSave" variant="outline-primary" class="mb-2" v-else-if="isPlaceHolderEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="namePlaceholderCancel" variant="outline-warning" v-if="isPlaceHolderEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    </div>
    </div>
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
        placeholder: {
          textplaceholder: ''
        },
        prefixstatus: 'not_accepted',
        requiredstatus: 'not_accepted',
        isLabelEditing: false,
        isPlaceHolderEditing: false,
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
    this.cachedPlaceholder = Object.assign({},this.savePlaceHolder);
  },
  methods: {
    nameLabelSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isLabelEditing = false;
    },
    nameLabelCancel() {
      this.save = Object.assign({}, this.cachedLabel);
      this.isLabelEditing = false;
    },
    namePlaceholderSave() {
      this.cachedPlaceholder = Object.assign({}, this.savePlaceHolder);
      this.isPlaceHolderEditing = false;
    },
    namePlaceholderCancel() {
      this.save = Object.assign({}, this.cachedPlaceholder);
      this.isPlaceHolderEditing = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.labelview {
  border-color: transparent;
  background-color: initial;
  color: initial
}

.phview {
  border-color: transparent;
  background-color: initial;
  color: initial
}

.container {
  h3 {
    color: white;
  }
}

</style>