<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h3>Rating Layout</h3>
        <h3>{{save.label}}</h3>
    <b-form-rating v-model="value" variant="warning" class="mb-2"></b-form-rating>
    <div class="m">Value is: {{value}} out of 5</div>
    </div>
    <div class="col-sm">
      <div class="w-100">
      <h3>Properties</h3>
      <b-form-checkbox
      id="rating-required-checkbox"
      v-model="requiredstatus"
      name="rating-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
    <b-form-input v-model="save.label" placeholder="Enter label name" :disabled="!isLabelEditing"
           :class="{view: !isLabelEditing}"></b-form-input>
    <b-button variant="outline-primary" class="mb-2" @click="isLabelEditing = !isLabelEditing" v-if="!isLabelEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="labelSave" variant="outline-primary" class="mb-2" v-else-if="isLabelEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="labelCancel" variant="outline-warning" v-if="isLabelEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <div class="mt-2">Label Name Entered: {{ save.label }}</div>
    </div>
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