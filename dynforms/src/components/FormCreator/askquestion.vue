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
      <p>{{save.asklabel}}</p>
        <b-form-textarea
      id="textarea"
      v-model="textarea"
      placeholder="Enter the text"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </div>
    <div class="col-sm">
      <b-button id="show-btn" class="mt-2" variant="primary" @click="$bvModal.show('ask-properties')">Set Properties</b-button>

  <b-modal id="ask-properties" hide-footer>
    <template #modal-title>
      Properties
    </template>
    <div class="d-block text-center">
    <b-form-checkbox
      id="ask-required-checkbox"
      v-model="requiredstatus"
      name="ask-required-checkbox"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Check this to make this field required.
    </b-form-checkbox>
    <b-form-group label="Enter the Label name">
        <b-form-input v-model="save.asklabel" placeholder="ask a question?" :disabled="!isEditing"
           :class="{view: !isEditing}"></b-form-input>
    </b-form-group>
        <b-button variant="outline-primary" class="mb-2" @click="isEditing = !isEditing" v-if="!isEditing">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button>
      <b-button @click="labelSave" variant="outline-primary" class="mb-2" v-else-if="isEditing">
        <b-icon icon="check2-square" aria-hidden="true"></b-icon> Save</b-button>
      <b-button class="mr-auto mb-2" @click="labelCancel" variant="outline-warning" v-if="isEditing">
        <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon> Cancel</b-button>
    <div class="mt-2">Question Entered: {{ save.asklabel }}</div>
    </div>
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('ask-properties')">Close</b-button>
  </b-modal>
    </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'askquestions',
    components: {
    },
    data() {
        return{
          isEditing: false,
          selected: '',
          save: {
            asklabel: 'Edit to rename me!'
          },
          text: '',
          textarea: '',
          requiredstatus: 'not_accepted'
      }
    },
    mounted() {
    this.cachedLabel = Object.assign({},this.save);
    },
  methods: {
    labelSave() {
      this.cachedLabel = Object.assign({}, this.save);
      this.isEditing = false;
    },
    labelCancel() {
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
h3 {
  color: white;
}
</style>