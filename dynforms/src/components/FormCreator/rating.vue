<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
      <div id="tooltip-target-1" v-if="requiredstatus === 'accepted'">
      <p class="h3 mb-2"><b-icon icon="exclamation-circle-fill" animation="cylon" variant="danger"></b-icon></p>
    <b-tooltip target="tooltip-target-1" triggers="hover">
        You have chosen this field as mandatory
      </b-tooltip>
    </div>
        <h3>{{save.label}}</h3>
    <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
    <div class="m">Value is: {{value}} out of 5</div>
    </div>
    <div class="col-sm">
      <b-button id="show-btn" variant="primary" class="mt-2" @click="$bvModal.show('rating-properties')">Set Properties</b-button>

  <b-modal id="rating-properties" hide-footer>
    <template #modal-title>
      Rating Properties
    </template>
    <div class="d-block text-justify">
      <b-form-checkbox
      id="rating-required-checkbox"
      v-model="requiredstatus"
      name="rating-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
    <b-form-group label="Enter the Label name">
    <b-form-input v-model="save.label" placeholder="Enter label name" :disabled="!isLabelEditing"
           :class="{view: !isLabelEditing}"></b-form-input>
    </b-form-group>
    <b-button variant="outline-primary" class="mb-2" @click="isLabelEditing = !isLabelEditing" v-if="!isLabelEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="labelSave" variant="outline-primary" class="mb-2" v-else-if="isLabelEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="labelCancel" variant="outline-warning" v-if="isLabelEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <div class="mt-2">Label Name Entered: {{ save.label }}</div>
    </div>
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('rating-properties')">Close</b-button>
  </b-modal>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'rating',
    data() {
      return {
        value: 3,
        isLabelEditing: false,
        requiredstatus: 'not_accepted',
          save: {
            label: 'Edit to rename me!',
          }
      }
    },
    mounted() {
    this.cachedLabel = Object.assign({},this.save);
  },
  methods: {
    labelSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isLabelEditing = false;
    },
    labelCancel() {
      this.save = Object.assign({}, this.cachedLabel);
      this.isLabelEditing = false;
    }
  }
  }
</script>

<style lang="scss" scoped>
h3 {
  color: white;
}
</style>