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
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ checkbox.text }}
        </b-form-checkbox>

        <div>
          State: <strong>{{ status }}</strong>
        </div>
      </div>
      <div class="col-sm">
        <b-button id="show-btn" class="mt-2" variant="primary" @click="$bvModal.show('checkbox-properties')">Set Properties</b-button>

  <b-modal id="checkbox-properties" hide-footer>
    <template #modal-title>
      Properties
    </template>
    <div class="d-block text-center">
      <b-form-checkbox
          id="checkbox-required"
          v-model="requiredstatus"
          name="checkbox-required"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Check this to make this field required.
        </b-form-checkbox>

        <div>
          State: <strong>{{ status }}</strong>
        </div>
        <b-form-group label="Enter the Label name">
          <b-form-input
            v-model="checkbox.text"
            placeholder="Enter the checkbox text"
            :disabled="!isCheckBoxEditing"
            :class="{ phview: !isCheckBoxEditing }"
          ></b-form-input>
          <div class="mt-2">Value: {{ checkbox.text }}</div>
        </b-form-group>
        <b-button
          variant="outline-primary"
          class="mb-2"
          @click="isCheckBoxEditing = !isCheckBoxEditing"
          v-if="!isCheckBoxEditing"
        >
          <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit</b-button
        >
        <b-button
          @click="CheckBoxSave"
          variant="outline-primary"
          class="mb-2"
          v-else-if="isCheckBoxEditing"
        >
          <b-icon icon="check2-square" aria-hidden="true"></b-icon>
          Save</b-button
        >
        <b-button
          class="mr-auto mb-2"
          @click="CheckBoxCancel"
          variant="outline-warning"
          v-if="isCheckBoxEditing"
        >
          <b-icon icon="x-circle-fill" aria-hidden="true"></b-icon>
          Cancel</b-button
        >
      </div>
    <b-button class="mt-3" variant="danger" block @click="$bvModal.hide('checkbox-properties')">Close</b-button>
  </b-modal>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkbox",
  data() {
    return {
      checkbox: {
        text: 'Edit to rename me!',
      },
      status: "not_accepted",
      requiredstatus: "not_accepted",
      isCheckBoxEditing: false,
    };
  },
  mounted() {
    this.cachedCheckBox = Object.assign({}, this.checkbox);
  },
  methods: {
    CheckBoxSave() {
      this.cachedCheckBox = Object.assign({}, this.checkbox);
      this.isCheckBoxEditing = false;
    },
    CheckBoxCancel() {
      this.checkbox = Object.assign({}, this.cachedCheckBox);
      this.isCheckBoxEditing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: white;
}
</style>