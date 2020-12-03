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
        <div v-show="prefixstatus === 'accepted'">
    <b-form-select v-model="selected" :options="prefixes"></b-form-select>
    <div class="mt-2">Selected: {{ selected }}</div>
    </div>
    <span>{{save.namelabel}}</span>
    <b-form-input v-model="text" :placeholder="placeholder.textplaceholder"></b-form-input>
    <div class="mt-2">Name Entered: {{ text }}</div>
      </div>
    <div class="col-sm">
  <b-button variant="primary" class="mt-2" id="show-btn" @click="$bvModal.show('name-properties')">Set Properties</b-button>
    </div>
  <b-modal id="name-properties" hide-footer>
    <template #modal-title>
      Properties
    </template>
    <div class="d-block text-center">
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
      id="name-required-checkbox"
      v-model="requiredstatus"
      name="name-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>

    <div>State: <strong>{{ requiredstatus }}</strong></div>
    <div>
      <b-form-group 
          label="Enter the textbox name">
      <b-form-input v-model="save.namelabel" placeholder="Enter text box name" :disabled="!isLabelEditing"
           :class="{labelview: !isLabelEditing}"></b-form-input>
    <div class="mt-2">Textbox Name Entered: {{ save.namelabel }}</div>
     <b-button variant="outline-primary" class="mb-2" @click="isLabelEditing = !isLabelEditing" v-if="!isLabelEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="nameLabelSave" variant="outline-primary" class="mb-2" v-else-if="isLabelEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="nameLabelCancel" variant="outline-warning" v-if="isLabelEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
      </b-form-group>
    </div>
      <b-form-group 
          label="Enter the placeholder text" >
      <b-form-input v-model="placeholder.textplaceholder" placeholder="Enter placeholder text" 
      :disabled="!isPlaceHolderEditing"
      :class="{phview: !isPlaceHolderEditing}"></b-form-input>
    <div class="mt-2">Placeholder text entered: {{ placeholder.textplaceholder }}</div>
    <b-button variant="outline-primary" class="mb-2" @click="isPlaceHolderEditing = !isPlaceHolderEditing" v-if="!isPlaceHolderEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="namePlaceholderSave" variant="outline-primary" class="mb-2" v-else-if="isPlaceHolderEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="namePlaceholderCancel" variant="outline-warning" v-if="isPlaceHolderEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
      </b-form-group>
    </div>
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('name-properties')">Close</b-button>
  </b-modal>
</div>
    </div>
</template>

<script>
export default {
    name: 'name',
    data() {
      return {
        save: {
          namelabel: 'Edit to rename me!'
        },
        placeholder: {
          textplaceholder: 'Edit to rename me!'
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
  color: initial;
}

.phview {
  border-color: transparent;
  background-color: initial;
  color: initial;
}

.container {
  h3 {
    color: white;
  }
}
.align {
    text-align: left;
    justify-content: left;
  }
</style>